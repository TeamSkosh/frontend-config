module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        copy: {
            foundation: {
                files: [
                    {
                        expand: true,
                        src: [
                            "bower_components/foundation/scss/foundation/_functions.scss"
                        ],
                        dest: "static/scss/",
                        flatten: true,
                        filter: "isFile",
                        rename: function(dest, src) {
                            return dest + "_foundation-" + src.replace('_','');
                        }
                    },
                    {
                        expand: true,
                        src: [
                            "bower_components/foundation/js/foundation.min.js",
                            "bower_components/foundation/js/vendor/modernizr.js",
                            "bower_components/foundation/js/vendor/fastclick.js"
                        ],
                        dest: "static/js/",
                        flatten: true,
                        filter: "isFile"
                    }
                ]
            },
            jquery: {
                files: [
                    {
                        expand: true,
                        src: [
                            "bower_components/jquery/dist/jquery.min.js",
                            "bower_components/jquery/dist/jquery.min.map"
                        ],
                        dest: "static/js/",
                        flatten: true,
                        filter: "isFile"
                    }
                ]
            }
        },

        sass: {
            foundation: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'static/css/foundation-custom.min.css': 'static/scss/foundation-custom.scss'
                }
            },
            global: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'static/css/application.min.css': 'static/scss/application.scss'
                }
            }
        },

        watch: {
            foundation: {
                files: ['static/scss/foundation-custom.scss', 'static/scss/_foundation-settings.scss'],
                tasks: ['sass:foundation']
            },
            global: {
                files: ['static/scss/application.scss', 'static/scss/components/*.scss'],
                tasks: ['sass:global']
            }
        }

    });

    require("load-grunt-tasks")(grunt);

    grunt.registerTask('build', [
        'newer:copy:foundation',
        'newer:copy:jquery',
        'sass:foundation',
        'sass:global'
    ]);

    grunt.registerTask('default', [
        'build',
        'watch'
    ]);
}
