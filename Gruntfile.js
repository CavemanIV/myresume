module.exports = function(grunt) {
    'use strict';

    var LIVERELOAD_PORT = 35729;

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    base: '.',
                    // This will inject live reload script into the html
                    livereload: LIVERELOAD_PORT
                }
            }
        },
        jade: {
            compile: {
                options: {
                    pretty: true
                },
                files: {
                    "Mobile_JohnCaveman.html": "mobile.jade"
                }
            }
        },
        watch: {
            editing: {
                files: ['mobile.jade', 'styles.css'],
                tasks: ['jade'],
                options: {
                    livereload: LIVERELOAD_PORT
                }
            }
        }
    })

    require('matchdep').filter('grunt-*').forEach( grunt.loadNpmTasks );

    grunt.registerTask('default', ['jade', 'connect', 'watch']);
};