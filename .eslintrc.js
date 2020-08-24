module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "react-app",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module",
    useJSXTextNode: true
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "import",
    "require",
    "jest",
    "prettier"
  ],
  rules: {
    "import/no-cycle": [2, { maxDepth: 1 }],
    "@typescript-eslint/explicit-function-return-type": "off",
    "no-console": ["error", { allow: ["warn", "error"] }],
    "sort-imports": [
      "error",
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"]
      }
    ],
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] }
    ],
    "react/forbid-component-props": [2, { forbid: ["style"] }],
    "react/forbid-dom-props": [2, { forbid: ["style"] }],
    "import/order": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never"
      }
    ],
    "react/no-multi-comp": [2, { ignoreStateless: false }],
    "react/jsx-props-no-spreading": [
      2,
      {
        html: "enforce",
        custom: "ignore",
        explicitSpread: "ignore"
      }
    ],
    "react/require-optimization": 2,
    "react/no-redundant-should-component-update": 2,
    "max-lines": ["error", { skipBlankLines: true, skipComments: true }],
    "no-restricted-imports": [
      "error",
      {
        name: "prop-types",
        message: "Please use typescript interfaces instead."
      }
    ]
  },
  settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    }
  }
};
