module.exports = function (grunt) {
    grunt.initConfig({   
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['public/scripts/app.js'],
                dest: 'public/scripts/app.tmp.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'public/scripts/app.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        sass: {
            dist: {
                files: { 
                    'public/styles/styles.css': 'scss/styles.scss',
                }
            },
            develop: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'public/styles/dev/styles.css': 'scss/styles.css'
                }
            }
        },
        less: {
            production: {
                options: {
                    paths: ['less/'],
                    yuicompress: true
                },
                files: {
                    'public/styles/dev/styles.css': 'less/styles.css'
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
        },
        imageoptim: {
          files: [
            'app/public/img'
          ],
          options: {
            quitAfter: true
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-imageoptim');

    grunt.registerTask('default', ['concat', 'uglify', 'sass']);
};