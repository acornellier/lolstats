module.exports = {
  extends: ['blitz'],
  plugins: ['sort-keys-fix'],
  root: true,
  rules: {
    // always add empty line between statements
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        next: ['return', 'function', 'export'],
        prev: '*',
      },
      {
        blankLine: 'any',
        next: ['export'],
        prev: ['export'],
      },
      {
        blankLine: 'always',
        next: '*',
        prev: 'import',
      },
      {
        blankLine: 'never',
        next: 'import',
        prev: 'import',
      },
      {
        blankLine: 'always',
        next: '*',
        prev: ['const', 'let', 'var'],
      },
      {
        blankLine: 'any',
        next: ['const', 'let', 'var'],
        prev: ['const', 'let', 'var'],
      },
    ],

    // enables "fix" for sort-keys rule
    'sort-keys-fix/sort-keys-fix': 'error',
  },
}
