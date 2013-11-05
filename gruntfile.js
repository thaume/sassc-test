module.exports = function(grunt) {

  'use strict';

  var config = {

    pkg: grunt.file.readJSON('package.json'),
    // Compile SCSS to CSS
    sass: {
      dev: {
        files: {
          'public/assets/build/screen.css': 'public/assets/src/css/core/screen.scss'
        }
      }
    }
  };

  grunt.loadNpmTasks('grunt-sass');

  // Register tasks
  grunt.initConfig(config);

  grunt.registerTask('default', 'Launch the sassc compile', [
    'sass'
  ]);

};
