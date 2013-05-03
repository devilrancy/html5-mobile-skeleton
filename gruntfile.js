module.exports = function (grunt) {
    grunt.initConfig({
       
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['public/js/app.js'],
                dest: 'public/js/app.tmp.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'public/js/app.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        sass: {
            dist: {
                files: { 
                    'public/css/styles.css': 'scss/styles.scss',
                }
            },
            develop: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'public/css/dev/styles.css': 'scss/styles.css'
                }
            }
        },
        watch: {
            scripts: {
                files: ['scss/*.scss'],
                tasks: ['sass'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat', 'uglify', 'sass']);
};