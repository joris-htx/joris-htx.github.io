const ERROR = 2
const WARNING = 1
const OFF = 0

const importOrderSettings = {
  groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
  pathGroups: [
    {
      pattern: '#*/**',
      group: 'internal',
    },
    {
      pattern: '{@ricardo-ch/**,@ricardo-ch/**/*}',
      group: 'internal',
      position: 'before',
    },
    {
      pattern: '{./**/*.+(css|scss),../**/*.+(css|scss),**/*.+(css|scss)}', // match './style.scss', '../style.scss' and 'whatever/file.scss'
      group: 'index',
      position: 'after',
    },
  ],
  pathGroupsExcludedImportTypes: ['builtin'],
  alphabetize: {
    order: 'asc',
  },
  'newlines-between': 'always',
}

const assertFunctionGenerator = ({ variants, queries }) => {
  let assertFunctions = []

  variants.forEach((variant) => {
    queries.forEach((query) => {
      assertFunctions.push(variant + query)
      assertFunctions.push('screen.' + variant + query)
    })
  })
  return assertFunctions
}

module.exports = {
  root: true,
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'testing-library', 'prettier', 'react-hooks'],
  rules: {
    'max-params': [ERROR, 3],
    // Next.js automatically adds the React import when JSX is used. (https://github.com/vercel/next.js/issues/12964#issuecomment-629642157)
    'react/react-in-jsx-scope': OFF,
    // temporary disabled until we switch to using next/image (https://app.asana.com/0/1201386812766057/1201216220287522)
    '@next/next/no-img-element': OFF,
    'import/no-extraneous-dependencies': [
      WARNING,
      {
        devDependencies: [
          './jest.config.ts',
          './next.config.mjs',
          '**/*.test.+(js|jsx|ts|tsx)',
          '**/*.stories.+(js|jsx|ts|tsx)',
          '**/scripts/**/*',
          '**/testing/**/*',
        ],
      },
    ],

    // This could be useful in the future, but wait for TypeScript 5 and see how they handle imports.
    // There is already a known issue described here: https://typescript-eslint.io/rules/no-import-type-side-effects/
    // '@typescript-eslint/consistent-type-imports': [ERROR, {
    //   fixStyle: 'inline-type-imports'
    // }],
    // This rule should be added with the upper one, it only has very few fixable errors:
    // '@typescript-eslint/consistent-type-exports': ERROR,
    '@typescript-eslint/consistent-type-assertions': [ // use together with @typescript-eslint/prefer-reduce-type-parameter
      ERROR,
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'never'
      }
    ],
    '@typescript-eslint/default-param-last': OFF, // we prefer objects as parameters anyways, so this rule would not even be needed
    '@typescript-eslint/explicit-module-boundary-types': OFF,
    '@typescript-eslint/naming-convention': [
      ERROR,
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: [
          'is',
          'are',
          'does',
          'should',
          'has',
          'have',
          'had',
          'can',
          'did',
          'will',
          'show',
          'display',
          'with',
          'was',
          'were',
          'requires',
          'result', // this should actually not be used as a prefix, but "result" is very often used in tests and we would have 100 errors
        ],
      },
      {
        selector: 'typeLike',
        format: ['StrictPascalCase'],
      },
    ],
    '@typescript-eslint/method-signature-style': ERROR,
    '@typescript-eslint/no-base-to-string': ERROR,
    '@typescript-eslint/no-confusing-non-null-assertion': ERROR,
    '@typescript-eslint/no-duplicate-enum-values': ERROR,
    '@typescript-eslint/no-dynamic-delete': WARNING,
    '@typescript-eslint/no-explicit-any': OFF, // in some cases, you can't avoid `any`. I would love to set this to "warn", but it will create too many warnings. Maybe in the future.
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': ERROR,
    '@typescript-eslint/no-non-null-assertion': ERROR, // is already part of 'typescript-eslint/recommended', but only warning
    '@typescript-eslint/no-redundant-type-constituents': ERROR,
    '@typescript-eslint/no-unused-vars': ERROR,
    '@typescript-eslint/prefer-reduce-type-parameter': ERROR,
    '@typescript-eslint/prefer-string-starts-ends-with': WARNING,
    '@typescript-eslint/switch-exhaustiveness-check': ERROR,
    'arrow-body-style': OFF,
    camelcase: OFF,
    'class-methods-use-this': OFF,
    'import/no-cycle': OFF,
    'import/no-extraneous-dependencies': [
      WARNING,
      {
        devDependencies: [
          './jest.config.ts',
          './next.config.mjs',
          '**/*__test.+(js|jsx|ts|tsx)',
          '**/*.test.+(js|jsx|ts|tsx)',
          'testing/*',
          '**/*.stories.*',
          '**/.storybook/**/*.*',
          '**/scripts/**/*',
        ],
      },
    ],
    'import/order': [ERROR, importOrderSettings],
    'import/extensions': [
      ERROR,
      {
        ts: 'never',
        json: 'always',
        md: 'always',
        mdx: 'always',
        svg: 'always',
        scss: 'always',
      },
    ],
    'import/prefer-default-export': OFF,
    'jsx-a11y/anchor-is-valid': [
      ERROR,
      {
        aspects: ['noHref', 'invalidHref', 'preferButton'],
        components: ['Link'],
        specialLink: ['to', 'hrefLeft', 'hrefRight'],
      },
    ],
    'jsx-a11y/label-has-for': [
      2,
      {
        allowChildren: true,
        required: {
          every: ['nesting', 'id'],
        },
      },
    ],
    'node/no-unsupported-features/es-syntax': OFF,
    'node/no-missing-import': OFF,
    'node/no-missing-require': OFF,
    'node/no-unpublished-import': OFF,
    'node/no-unpublished-require': OFF,
    'node/no-process-env': OFF,
    'no-underscore-dangle': OFF,
    'no-unused-vars': OFF, // if we use @typescript-eslint/no-unused-vars, we cannot use that one at the same time
    'prettier/prettier': ERROR,
    radix: [ERROR, 'as-needed'],
    'react-hooks/exhaustive-deps': ERROR,
    'react/default-props-match-prop-types': OFF,
    'react/destructuring-assignment': OFF,
    'react/function-component-definition': OFF,
    'react/jsx-filename-extension': [
      WARNING,
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/jsx-no-bind': OFF, // yes this rule makes sense, but it's a bit of an overkill
    'react/jsx-one-expression-per-line': OFF,
    'react/jsx-props-no-spreading': OFF,
    'react/jsx-wrap-multilines': OFF,
    'react/no-danger': OFF,
    'react/no-did-mount-set-state': OFF,
    'react/prop-types': OFF,
    'react/require-default-props': OFF,
    'react/sort-comp': OFF,
    'react/state-in-constructor': OFF,
    'react/static-property-placement': [ERROR, 'static public field'],
  },
  ignorePatterns: ['.next/**/*', 'build/**/*', 'node_modules/**/*', '.eslintrc.js'],
  overrides: [
    {
      files: ['./**/*.test.js', './**/*.test.jsx'],
      rules: {
        // resolving works in JS files, but ESLint doesn't know, so we just disable this rule
        'import/no-unresolved': OFF,
      },
    },
    // Tests only (some rules were raising false errors in non test files)
    {
      files: ['**/*.test.ts', '**/*.test.tsx', '**/*.test.js', '**/*.test.jsx'],
      extends: ['plugin:testing-library/react', 'plugin:jest/recommended'],
      rules: {
        '@typescript-eslint/ban-ts-comment': [
          ERROR,
          {
            'ts-expect-error': false,
            'ts-ignore': true,
            'ts-nocheck': true,
            'ts-check': true,
          },
        ],
        '@typescript-eslint/consistent-type-assertions': OFF,
        'jest/expect-expect': [
          ERROR,
          {
            assertFunctionNames: [
              'expect',
              ...assertFunctionGenerator({
                variants: ['get', 'getAll', 'find', 'findAll'],
                queries: [
                  'ByLabelText',
                  'ByPlaceholderText',
                  'ByText',
                  'ByAltText',
                  'ByTitle',
                  'ByDisplayValue',
                  'ByRole',
                  'ByTestId',
                  'ByTextWithMarkup',
                ],
              }),
            ],
          },
        ],
        'jest/no-mocks-import': OFF,
        'jest/prefer-spy-on': [ERROR],
        'jest/prefer-to-be': [ERROR],
        'jest/prefer-to-contain': [ERROR],
        'jest/prefer-to-have-length': [ERROR],
        'jest/require-to-throw-message': [ERROR],
        'jest/valid-title': [ERROR],
        'testing-library/no-node-access': WARNING, // It is ok to use `.closest()` it for listitem, because of this issue: https://stackoverflow.com/questions/63033144/unable-to-use-getbyrole-on-listitem-with-a-specific-name-rtl
        'testing-library/prefer-presence-queries': ERROR,
        'testing-library/prefer-wait-for': ERROR,
        'testing-library/render-result-naming-convention': OFF,
      },
    },
  ],
}
