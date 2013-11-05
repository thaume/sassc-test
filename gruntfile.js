module.exports = function(grunt) {

  'use strict';

  var config = {

    pkg: grunt.file.readJSON('package.json'),
    // Compile SCSS to CSS
    sass: {
      dev: {
        files: {
          'build/main.css': 'src/main.scss'
        }
      }
    }
  };

  // Uncomment here and comment the other task to release the power of sassc
  //grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Register tasks
  grunt.initConfig(config);

  grunt.registerTask('default', 'Launch the sassc compile', [
    'sass'
  ]);

};
