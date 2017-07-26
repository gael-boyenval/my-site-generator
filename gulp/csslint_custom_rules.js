/* ----------------------------------- *\
                UTILITIES
\* ----------------------------------- */

// regexps
const regSelectorSplitter = /(?=\.|\s|:)/;
const regContainersClasses = /^\.(qa-|s-|t-|hack-|pl-|is-|has-)/;
const regValidPrefix = /^\.(ol-|oc-|ca-|cm-|co-|u-|is-|has-|qa-|s-|t-|pl-|hack-)/;
const regStateClass = /^\.(is-|has-)/;
const regUtilityClass = /^\.u-/;
const regHackClass = /^\.hack-/;
const regComponentClass = /^\.(ca-|cm-|co-)/;
const regElementClass = /__/;
const regModiferClass = /--/;
const regModifierOrElement = /(--|__)/;

function getClassesFromSelector(string) {
    const selectors = string.split(regSelectorSplitter);

    return selectors.filter(item => item.charAt(0) === '.');
}

function isContainerClass(string) {
    return regContainersClasses.test(string);
}

function isValidPrefix(string) {
    return regValidPrefix.test(string);
}

function getPrefixAndBlockName(string) {
    return string.split(regModifierOrElement)[0];
}

function isStateClass(string) {
    return regStateClass.test(string);
}

function isUtilityClass(string) {
    return regUtilityClass.test(string);
}

function isHackClass(string) {
    return regHackClass.test(string);
}

function isComponentClass(string) {
    return regComponentClass.test(string);
}

function isElementClass(string) {
    return regElementClass.test(string);
}

function isModifierClass(string) {
    return regModiferClass.test(string);
}

/* ----------------------------------- *\
                RULES
\* ----------------------------------- */

const customRules = [
    {
        id: 'selector-require-allowed-prefix',
        name: 'class names require allowed prefixes',
        desc: 'Classes are typed, and need the associated prefix',

        init(parser, reporter) {
            const rule = this;
            let classes = [];
            let isHack = false;

            parser.addListener('startrule', (event) => {
                for (let i = 0; i < event.selectors.length; i++) {
                    classes = getClassesFromSelector(event.selectors[i].text);

                    for (let j = 0; j < classes.length; j++) {
                        if (isHackClass(classes[j])) {
                            isHack = true;
                        }

                        if (!isValidPrefix(classes[j]) && !isHack) {
                            reporter.report(
                                'Forbidden : Classes names require a valid prefix' +
                                ' relative to their types',
                                event.line,
                                event.col,
                                rule
                            );
                        }
                    }
                }
            });
        },
    }, {
        id: 'bad-reference-class-type',
        name: 'forbid referencing differents blocks in a selector',
        desc: 'Choose extension over modification and keep the modules decoupled',

        init(parser, reporter) {
            const rule = this;
            let firstPrefixBlockName;

            function reportError(event) {
                reporter.report(
                    'Forbidden : Do not reference differents blocks in the same selector.' +
                    ' Choose extension over modification and keep modules decoupled',
                    event.line,
                    event.col,
                    rule
                );
            }

            function hasSamePrefixFromIndex(classes, index, event) {
                firstPrefixBlockName = getPrefixAndBlockName(classes[index]);

                let startIndex = index + 1;

                for (startIndex; startIndex < classes.length; startIndex++) {
                    if (
                        getPrefixAndBlockName(classes[startIndex]) !== firstPrefixBlockName
                        && !isStateClass(classes[startIndex])
                        && !isHackClass(classes[0])
                    ) {
                        reportError(event);
                    }
                }
            }

            parser.addListener('startrule', (event) => {
                for (let i = 0; i < event.selectors.length; i++) {
                    const classes = getClassesFromSelector(event.selectors[i].text);

                    if (classes.length !== 0) {
                        if (classes.length > 1 && isContainerClass(classes[0])) {
                            hasSamePrefixFromIndex(classes, 1, event);
                        } else {
                            hasSamePrefixFromIndex(classes, 0, event);
                        }
                    }
                }
            });
        },
    }, {
        id: 'important-only-for-utils-or-hacks',
        name: 'alow !important only for utility classes',
        desc: 'The use of !important is allowed only for utility classes',

        init(parser, reporter) {
            const rule = this;
            let isUtility = false;
            let classes;
            let isHack = false;

            parser.addListener('startrule', (event) => {
                classes = [];
                isUtility = false;

                for (let i = 0; i < event.selectors.length; i++) {
                    classes = getClassesFromSelector(event.selectors[i].text);
                }

                for (let j = 0; j < classes.length; j++) {
                    if (isHackClass(classes[j])) {
                        isHack = true;
                        return;
                    }
                    if (isUtilityClass(classes[j])) {
                        isUtility = true;
                        return;
                    }
                }
            });

            parser.addListener('property', (event) => {
                if (event.important && !isUtility && !isHack) {
                    reporter.report(
                        'Forbidden : Only utilities or hacks are allowed' +
                        ' to implement properties flagged as !important',
                        event.line,
                        event.col,
                        rule
                    );
                }
            });
        },
    }, {
        id: 'parent-level-componant-no-margin',
        name: 'block level components should not use box model properties',
        desc: 'Use an oriented object class or an element from a higher' +
              'level component to manage external layout',

        init(parser, reporter) {
            const rule = this;
            let classes;
            let isMarginAllowed = true;
            let marginFound = false;

            parser.addListener('startrule', (event) => {
                for (let i = 0; i < event.selectors.length; i++) {
                    classes = getClassesFromSelector(event.selectors[i].text);

                    for (let j = 0; j < classes.length; j++) {
                        if (!isMarginAllowed || !isContainerClass(classes[j])) {
                            return;
                        }

                        if (!isElementClass(classes[j]) && !isModifierClass(classes[j])) {
                            if (isComponentClass(classes[j])) {
                                isMarginAllowed = false;
                            }
                        }
                    }
                }
            });

            parser.addListener('property', (event) => {
                if (marginFound) {
                    return;
                }
                const prop = event.property.toString().toLowerCase();
                marginFound = (prop.indexOf('margin') === 0);
            });

            parser.addListener('endrule', (event) => {
                if (marginFound && !isMarginAllowed) {
                    reporter.report(
                        'Forbidden : Don\'t set external layout' +
                        ' rules for block level components',
                        event.line,
                        event.col,
                        rule
                    );
                }

                // reset values
                classes = [];
                isMarginAllowed = true;
                marginFound = false;
            });
        },
    },
];

module.exports = customRules;
