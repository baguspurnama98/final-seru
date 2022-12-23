module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "plugin:react/recommended",
    "overrides": [ {"files": ["*.ts", "*.tsx", "*.js", "*.jsx"],}
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
    
           "react/react-in-jsx-scope": "off",
           "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }], //should add ".ts" if typescript project
          
    }
}
