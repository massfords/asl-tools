/** @type {import("plop").NodePlopAPI} */
export default (plop) => {
  plop.setGenerator('controller', {
    description: 'Creates a new component package',
    prompts: [
      {
        type: 'input',
        name: 'package-name',
        message: 'What is the package name?',
      },
      {
        type: 'input',
        name: 'package-description',
        message: 'What is the component package description?',
      },
    ],
    actions: (data) => {
      console.log(data)
      data['package-raw-name'] = data['package-name']
      const packagePaths = data['package-name'].split('.')
      let rootPath = 'packages/{{kebabCase package-name}}'

      if (packagePaths.length > 1) {
        data['package-raw-name'] = packagePaths.pop()
        rootPath = `packages/${packagePaths.join('/')}/{{kebabCase package-raw-name}}`
      }

      return [
        {
          type: 'add',
          path: `${rootPath}/src/index.ts`,
          templateFile: 'toolchain/plop-templates/create-package/package-index.ts.hbs',
          skipIfExists: true,
        },
        {
          type: 'add',
          path: `${rootPath}/package.json`,
          templateFile: 'toolchain/plop-templates/create-package/package.json.hbs',
          skipIfExists: true,
        },
        {
          type: 'add',
          path: `${rootPath}/tsconfig.json`,
          templateFile: 'toolchain/plop-templates/create-package/tsconfig.json.hbs',
          skipIfExists: true,
        },
        {
          type: 'add',
          path: `${rootPath}/eslint.config.js`,
          templateFile: 'toolchain/plop-templates/create-package/eslint.config.js.hbs',
          skipIfExists: true,
        },
        {
          type: 'add',
          path: `${rootPath}/vitest.config.js`,
          templateFile: 'toolchain/plop-templates/create-package/vitest.config.js.hbs',
          skipIfExists: true,
        },
      ]
    },
  })
}
