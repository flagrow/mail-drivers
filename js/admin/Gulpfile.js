const gulp = require('flarum-gulp');

gulp({
    modules: {
        'flagrow/mail-drivers': [
            'src/**/*.js',
        ],
    },
});
