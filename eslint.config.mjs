import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";
import jsdoc from "eslint-plugin-jsdoc";
import preferArrowFunction from "eslint-plugin-prefer-arrow-functions";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import tseslint from "typescript-eslint";

const compat = new FlatCompat();

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  ...compat.extends("plugin:@conarti/feature-sliced/recommended"),
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  jsdoc.configs["flat/recommended-typescript"],
  {
    plugins: {
      "prefer-arrow-functions": preferArrowFunction,
    },
  },
  {
    rules: {
      "@typescript-eslint/no-require-imports": "warn",
      "react/prefer-stateless-function": "error",
      "react/button-has-type": "error",
      "react/no-unused-prop-types": "warn",
      "react/jsx-pascal-case": "error",
      "react/jsx-no-script-url": "error",
      "react/no-children-prop": "error",
      "react/no-danger": "error",
      "react/no-danger-with-children": "error",
      "react/no-unstable-nested-components": ["error", { allowAsProps: true }],
      "react/jsx-fragments": "error",
      "react/destructuring-assignment": [
        "error",
        "always",
        { destructureInSignature: "always" },
      ],
      "react/jsx-no-leaked-render": ["error", { validStrategies: ["ternary"] }],
      "react/jsx-max-depth": ["error", { max: 5 }],
      "react/function-component-definition": [
        "warn",
        { namedComponents: "arrow-function" },
      ],
      "react/jsx-key": [
        "error",
        {
          checkFragmentShorthand: true,
          checkKeyMustBeforeSpread: true,
          warnOnDuplicates: true,
        },
      ],
      "react/jsx-no-useless-fragment": "warn",
      "react/jsx-curly-brace-presence": "warn",
      "react/no-typos": "warn",
      "react/display-name": "warn",
      "react/self-closing-comp": "warn",
      "react/jsx-sort-props": "warn",
      "react/react-in-jsx-scope": "off",
      "react/jsx-one-expression-per-line": "off",
      "react/prop-types": "off",
      "@typescript-eslint/naming-convention": [
        "warn",
        {
          selector: "default",
          format: ["camelCase", "PascalCase"],
          leadingUnderscore: "allow",
        },
        {
          selector: "variable",
          // Specify PascalCase for React components
          format: ["PascalCase", "camelCase"],
          leadingUnderscore: "allow",
        },
        {
          selector: "parameter",
          format: ["camelCase"],
          leadingUnderscore: "allow",
        },
        {
          selector: "property",
          format: null,
          leadingUnderscore: "allow",
        },
        {
          selector: "typeLike",
          format: ["PascalCase"],
        },
      ],
      "jsdoc/no-defaults": "off",
      "jsdoc/no-types": "off",
      "jsdoc/require-throws": "error",
      "jsdoc/check-indentation": "warn",
      "jsdoc/no-blank-blocks": "warn",
      "jsdoc/require-asterisk-prefix": "warn",
      "jsdoc/require-description": "warn",
      "jsdoc/sort-tags": "warn",
      "jsdoc/check-syntax": "warn",
      "jsdoc/tag-lines": ["warn", "never", { startLines: 1 }],
      "jsdoc/require-param": ["warn", { checkDestructuredRoots: false }],
      "jsdoc/require-jsdoc": [
        "warn",
        {
          publicOnly: true,
          require: {
            FunctionDeclaration: true,
            FunctionExpression: true,
            ArrowFunctionExpression: true,
            ClassDeclaration: true,
            ClassExpression: true,
            MethodDefinition: true,
          },
          contexts: [
            "VariableDeclaration",
            "TSTypeAliasDeclaration",
            // Encourage documenting React prop types
            "TSPropertySignature",
          ],
          enableFixer: true,
        },
      ],
      // tsdoc checks this syntax instead
      "jsdoc/require-hyphen-before-param-description": "off",
      "jsdoc/require-returns": "off",

      "prefer-arrow-functions/prefer-arrow-functions": [
        "warn",
        {
          classPropertiesAllowed: true,
          disallowPrototype: true,
          returnStyle: "unchanged",
        },
      ],
      "arrow-body-style": "warn",
      "prefer-arrow-callback": [
        "warn",
        {
          allowNamedFunctions: true,
        },
      ],
    },
  },
];
