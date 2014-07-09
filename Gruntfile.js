module.exports = function(grunt) {
    'use strict';

    var LIVERELOAD_PORT = 35729;
    var HTML_OUTPUT = "JohnCaveman's resume.html";

    var resumeSource = {};
    resumeSource[HTML_OUTPUT] = 'resume.jade';

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
                files: resumeSource
            }
        },
        watch: {
            editing: {
                files: ['resume.jade', 'styles.css'],
                tasks: ['jade', 'spell'],
                options: {
                    livereload: LIVERELOAD_PORT
                }
            }
        },
        open: {
            dev: {
                path: "http://localhost:8000/" + HTML_OUTPUT
            }
        },
        spell: {
            html: {
                src: [HTML_OUTPUT],
                options: {
                    lang: 'en',
                    ignore: ['complex expression']
                }
            }

        }
    })

    require('matchdep').filter('grunt-*').forEach( grunt.loadNpmTasks );

    grunt.registerTask('default', ['jade', 'connect', 'spell', 'open', 'watch']);
};