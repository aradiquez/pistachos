module.exports = {
    js: {
        src: [
            'node_modules/angular/angular.js',
            'javascripts/pistachos/pistachos-module.js',
            'javascript/pistachos/**/*.js',
            'javascript/htmltemplates-module.js'
        ],
        dest: './public/',
        file: 'pistachos.js'
    },
    html: {
        src: './javascript/**/*.html',
        dest: './javascript/',
        file: 'htmltemplates-module.js',
        module: 'NutsHtmltemplates',
        root: '/public/'
    }
};