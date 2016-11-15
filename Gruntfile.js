module.exports = function (grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
      target: {
        files: {
          'assets/css/style.min.css': ['src/css/*.css']
        }
      }
    },

    uglify: {
      my_target: {
        files: {
          'assets/js/scripts.min.js': [ 'src/js/*.js' ]
        }
      }
    },

    watch: {
      options: {
        livereload: false,
        spawn: false
      },
      css: {
        files: 'src/css/*.css',
        tasks: ['cssmin']
      },
      js: {
        files: 'src/js/*.js',
        tasks: ['uglify']
      }
    }

  });

  grunt.registerTask('default', ['uglify', 'cssmin']);

};
