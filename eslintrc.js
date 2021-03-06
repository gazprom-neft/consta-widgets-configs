var spellcheckConfig = require('./config/eslint/spellcheckConfig');

module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2018,
    "project": "tsconfig.json",
    "sourceType": "module",
  },
  "plugins": [
    "prefer-arrow",
    "import",
    "unicorn",
    "@typescript-eslint",
    "@typescript-eslint/tslint",
    "react",
    "react-hooks",
    "prettier",
    "spellcheck",
    "jest-dom",
    "jsdoc"
  ],
  "extends": ["plugin:jsdoc/recommended"],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    "react/jsx-key": 2,
    "react/jsx-no-bind": [2, { "allowArrowFunctions": true }],
    "react/no-string-refs": 2,
    "react/self-closing-comp": 1,
    "spaced-comment": ["error", "always"],
    "jsdoc/require-returns": "off",
    "jsdoc/require-param": "off",
    "jsdoc/require-param-type": "off",
    "jsdoc/require-jsdoc": "off",

    "arrow-body-style": "off",
    "arrow-parens": [
      "off",
      "as-needed"
    ],
    "camelcase": "error",
    "complexity": "off",
    "constructor-super": "error",
    "curly": "error",
    "no-case-declarations": "error",
    "dot-notation": "error",
    "eol-last": "off",
    "eqeqeq": [
      "error",
      "smart"
    ],
    "guard-for-in": "error",
    "id-match": "error",
    "import/no-default-export": "error",
    "linebreak-style": "off",
    "max-classes-per-file": [
      "error",
      1
    ],
    "max-len": "off",
    "new-parens": "off",
    "newline-per-chained-call": "off",
    "no-nested-ternary": "error",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-cond-assign": "error",
    "no-console": "error",
    "no-debugger": "error",
    "no-empty": "error",
    "no-eval": "error",
    "no-extra-semi": "off",
    "no-fallthrough": "off",
    "no-invalid-this": "off",
    "no-irregular-whitespace": "off",
    "no-multiple-empty-lines": "off",
    "no-new-wrappers": "error",
    "no-throw-literal": "error",
    "no-trailing-spaces": "off",
    "no-undef-init": "error",
    "no-underscore-dangle": ["error"],
    "no-unsafe-finally": "error",
    "no-unused-expressions": [
      "error",
      {
        "allowShortCircuit": true,
        "allowTernary": true
      }
    ],
    "no-unused-labels": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-arrow/prefer-arrow-functions": "off",
    "prefer-const": "error",
    "quote-props": "off",
    "radix": "error",
    "space-before-function-paren": "off",
    "spellcheck/spell-checker": [1,
      {
        "comments": true,
        "strings": true,
        "templates": true,
        "identifiers": false,
        "lang": {
          "comments": "ru_RU",
          "strings": "ru_RU",
          "templates": "ru_RU"
        },
        "minLength": 4,
        ...spellcheckConfig
      }
    ],
    "unicorn/filename-case": [
      "error",
      {
        "cases": {
          "camelCase": true,
          "kebabCase": true,
          "pascalCase": true
        }
      }
    ],
    "use-isnan": "error",
    "valid-typeof": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "prettier/prettier": "error",
    "@typescript-eslint/ban-types": [
      "error",
      {
        extendDefaults: true
      }
    ],
    "@typescript-eslint/tslint/config": [
      "error",
      {
        "rulesDirectory": [
          "node_modules/tslint-immutable/rules",
        ],
        "rules": {
          "no-array-mutation": [true, "ignore-new-array", {"ignore-prefix": "mutable"}],
          "ordered-imports": [
            true,
            {
              "import-sources-order": "lowercase-first",
              "module-source-path": "full",
              "grouped-imports": true,
              "groups": [
                {
                  "match": "^react",
                  "order": 1
                },
                {
                  "name": "Root",
                  "match": "^@\/",
                  "order": 99
                },
                {
                  "name": "Parent dir",
                  "match": "^[.][.]",
                  "order": 100
                },
                {
                  "name": "Current dir",
                  "match": "^[.]",
                  "order": 110
                },
                {
                  "match": "^[^\\.]",
                  "order": 10
                }
              ]
            }
          ],
          "import-blacklist": [
            true,
            [
              "^@csssr/gpn-dashboard-constructor/lib/@types/(components|utils|ui)",
              "^@csssr/gpn-dashboard-constructor/lib/@types/(dashboard|widgets)/[a-z0-9]*",
            ]
          ]
        }
      }
    ],
    "react/button-has-type": "error",
    "jest-dom/prefer-checked": "warn",
    "jest-dom/prefer-empty": "warn",
    "jest-dom/prefer-enabled-disabled": "warn",
    "jest-dom/prefer-required": "warn",
    "jest-dom/prefer-focus": "warn",
    "jest-dom/prefer-to-have-attribute": "warn",
    "jest-dom/prefer-to-have-style": "warn",
    "jest-dom/prefer-to-have-text-content": "warn"
  },
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "rules": {
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/array-type": ["error", {
          "default": "array-simple"
        }],
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/naming-convention": [
          "error",
          {
            "selector": "interface",
            "format": ["PascalCase"],
            "custom": {
              "regex": "^I[A-Z]",
              "match": false
            }
          },
          {
            "selector": "class",
            "format": ["PascalCase"]
          }
        ],
        "@typescript-eslint/member-delimiter-style": [
          "off",
          "error",
          {
            "multiline": {
              "delimiter": "none",
              "requireLast": true
            },
            "singleline": {
              "delimiter": "semi",
              "requireLast": false
            }
          }
        ],
        "@typescript-eslint/array-type": ["error", {
          "default": "array-simple"
        }],
        "@typescript-eslint/member-ordering": "error",
        "@typescript-eslint/no-empty-function": "error",
        "@typescript-eslint/no-empty-interface": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/triple-slash-reference": "error",
        "@typescript-eslint/no-use-before-define": "error",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-interface": "off",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/quotes": [
          "error",
          "single"
        ],
        "@typescript-eslint/semi": [
          "off",
          null
        ],
        "@typescript-eslint/space-within-parens": [
          "off",
          "never"
        ],
        "@typescript-eslint/type-annotation-spacing": "off",
        "@typescript-eslint/unified-signatures": "error",
        "@typescript-eslint/no-shadow": ["error"]
      },
    }
  ],
};
