module.exports = function (grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    cssmin: {},
    uglify: {}

  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', []);

};
