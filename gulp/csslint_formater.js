const customlint = require('./csslint_custom_rules.js');
const gutil = require('gulp-util');

// format csslint output
const customReporter = () => ({
    name: 'customReporter',
    id: 'customReporter',
    startFormat: () => '. . . csslint\n',
    endFormat: () => '',
    formatResults: (results, fileName) => {
        const divider = '.'.repeat(80);
        const simpleDivider = `\n${divider}\n`;
        const bigDivider = `\n\n${divider}\n${divider}\n${divider}\n\n`;
        const c = gutil.colors;

        gutil.log(
            `${c.grey(bigDivider)} ${c.magenta(fileName)}${c.grey(bigDivider)}`
        );

        results.messages.forEach((result) => {
            const line = `line: ${result.line}, col: ${result.col} |`;
            const evidence = `${c.cyan((result.evidence || ' (no evidence)')
                .replace(/\s{2,}/g, ' '))}`;
            const message = `\n${c.red(result.message)}${c.grey(simpleDivider)}`;
            gutil.log(line + evidence + message);
        });
    }
});

const applyCssLintConfig = (csslint) => {
    csslint.addFormatter(customReporter());

    customlint.forEach((rule) => {
        csslint.addRule(rule);
    });
}

module.exports = applyCssLintConfig;
