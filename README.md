# Dashwebapps UTILS

## This repository will include reusable "utility" packages for use within other DASH web apps.

### Contents:

Each feature will likely have its own dependencis, so make sure to run `npm install` in root & for each project.

- [LoginAs](tree/main/src/LoginAs): Handles local-development login functionality

### Tech details:

- Jest/React-Testing-Libary for testing
- Rollup for bundling the modules to ES5.

### Compiling for export as NPM package:

- This will use Rollup to handle bringing all the features together into a single bundle. This will allow for importing modules like: `import { LoginAs, AccountSelector } from "utils";`

- To bundle as ES5: `npm run build`

### Testing:

We will assume all tests will use Jest & VSCode as IDE. If this is the case, it is recommended to install the [Jest extension for VSCode](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest). Notes:

- At the root of this repo is a file: `.vscode/launch.json`. This contains some scripts to allow for debugging with the extension above. It did not seem to work putting this in the root of the sub project. You can edit the `cwd` to run tests that are applicable.
  - You can verify this is working by seeing `Jest:✓` in the bottom of VSCode.

### Formatting:

- We are using ESLint and Prettier with the `@typescript-eslint/parser`. You can verify this is working by seeing `ESLint Prettier:✓` in the bottom right corner of VSCode.
- Husky & LintStaged are used to verify there are no formatting & linting issues being committed.
