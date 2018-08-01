module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
      build: {
        files: [
          {
            src: ['./client/dist/styles.css'],
            dest: './client/dist/build/styles.min.css'
          }
        ]
      }
    },
    uglify: {
      build: {
        files: [
          {
            src: ['./client/dist/bundle.js'],
            dest: './client/dist/build/bundle.min.js'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['uglify', 'cssmin']);
};