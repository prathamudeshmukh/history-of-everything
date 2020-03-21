module.exports = {
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  env: {
    es6: true,
    browser: true
  },
  plugins: [ 'svelte3' ],
  overrides: [
    {
      files: '*.svelte',
      processor: 'svelte3/svelte3'
    }
  ],
  globals: {
    "module": true,
    "process": true,
  },
  rules: {
      "no-var": 2,
  },
  settings: {
      "import/core-modules": ["svelte"]
  }
};
