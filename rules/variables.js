module.exports = {
    rules: {
        // enforce or disallow variable initializations at definition
        'init-declarations': 'off',

        // disallow the catch clause parameter name being the same as a variable in the outer scope
        'no-catch-shadow': 'error',

        // disallow deletion of variables
        'no-delete-var': 'error',

        // disallow labels that share a name with a variable
        // http://eslint.org/docs/rules/no-label-var
        'no-label-var': 'error',

        // disallow specific globals
        'no-restricted-globals': 'off',

        // disallow declaration of variables already declared in the outer scope
        'no-shadow': 'error',

        // disallow shadowing of names such as arguments
        'no-shadow-restricted-names': 'error',

        // disallow use of undeclared variables unless mentioned in a /*global */ block
        // @ulianov error => off
        'no-undef': 'off',

        // disallow use of undefined when initializing variables
        // @ulianov error => off
        'no-undef-init': 'off',

        // disallow use of undefined variable
        // http://eslint.org/docs/rules/no-undefined
        // TODO: enable?
        // @ulianov off => error
        'no-undefined': 'error',

        // disallow declaration of variables that are not used in the code
        'no-unused-vars': ['error', { vars: 'local', args: 'after-used', "ignoreRestSiblings": true }],

        // disallow use of variables before they are defined
        'no-use-before-define': 'error'
    }
};