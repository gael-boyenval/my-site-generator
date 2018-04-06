/* eslint-disable func-names */
/* eslint-disable space-before-function-paren */
module.exports = function(plop) {
  plop.setGenerator('stateless', {
    description: 'stateless component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'sateless component name',
      },
      {
        type: 'input',
        name: 'path',
        message: 'component path from src ex: "components/atoms/"',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{path}}{{pascalCase name}}/index.js',
        templateFile: './plopTemplates/indexFolder.hbs',
      },
      {
        type: 'add',
        path: 'src/{{path}}{{pascalCase name}}/{{pascalCase name}}.js',
        templateFile: './plopTemplates/statelessComponent.hbs',
      },
      {
        type: 'add',
        path: 'src/{{path}}{{pascalCase name}}/{{pascalCase name}}.test.js',
        templateFile: './plopTemplates/component.test.hbs',
      },
      {
        type: 'add',
        path: 'src/{{path}}{{pascalCase name}}/{{pascalCase name}}.stories.js',
        templateFile: './plopTemplates/story.hbs',
      },
      {
        type: 'add',
        path: 'src/{{path}}{{pascalCase name}}/{{pascalCase name}}.mock.js',
        templateFile: './plopTemplates/prop.mock.hbs',
      },
    ],
  });

  plop.setGenerator('component', {
    description: 'class component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name',
      },
      {
        type: 'input',
        name: 'path',
        message: 'component path from src ex: "components/atoms/"',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{path}}{{pascalCase name}}/index.js',
        templateFile: './plopTemplates/indexFolder.hbs',
      },
      {
        type: 'add',
        path: 'src/{{path}}{{pascalCase name}}/{{pascalCase name}}.js',
        templateFile: './plopTemplates/classComponent.hbs',
      },
      {
        type: 'add',
        path: 'src/{{path}}{{pascalCase name}}/{{pascalCase name}}.test.js',
        templateFile: './plopTemplates/component.test.hbs',
      },
      {
        type: 'add',
        path: 'src/{{path}}{{pascalCase name}}/{{pascalCase name}}.stories.js',
        templateFile: './plopTemplates/story.hbs',
      },
      {
        type: 'add',
        path: 'src/{{path}}{{pascalCase name}}/{{pascalCase name}}.mock.js',
        templateFile: './plopTemplates/prop.mock.hbs',
      },
    ],
  });
};
