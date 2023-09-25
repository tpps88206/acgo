module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'import', 'jsx-a11y', 'prettier', 'react-hooks', 'react', 'simple-import-sort'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-console': [0, { 'allow': ['warn', 'error'] }],
    'no-unused-vars': 2,
    'object-shorthand': 2,
    // plugin rules, sort by key name
    'import/default': 0,
    'import/first': 0,
    'import/named': 0,
    'import/namespace': 0,
    'import/no-duplicates': 2,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 2,
    'import/no-unresolved': 0,
    'import/no-anonymous-default-export': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'prettier/prettier': 2,
    'react-hooks/exhaustive-deps': 0,
    'react-hooks/rules-of-hooks': 2,
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'react/no-multi-comp': 0,
    'react/prop-types': 0,
    'react/self-closing-comp': 2,
    'react/display-name': 0,
    'simple-import-sort/imports': [
      2,
      {
        'groups': [
          // Side effect imports.
          ['^\\u0000'],
          // React, Redux imports
          ['^react', '^redux'],
          // Packages
          // Things that start with a letter (or digit or underscore)
          ['^\\w'],
          // Packages.
          // Things that start with a @. usually @material-layouts
          ['^@\\w'],
          // Absolute imports and other imports such as Vue-style `@/foo`.
          // Anything that does not start with a dot.
          // Relative imports.
          // Anything that starts with a dot.
          ['^[^.]', '^\\.']
        ]
      }
    ],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error'
  },
}
