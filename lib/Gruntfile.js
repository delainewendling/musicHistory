module.exports = function(grunt) {

  grunt.initConfig({
    browserify: {
      '../dist/app.js':['../javascript/controller.js']
    }, //creates a fill named app.js and takes everything from events.js
    jshint: {
      options: {
        predef: [ "document", "console", "$", "Mustache"],
        esnext: true,
        globalstrict: true,
        browserify: true
      },
      files: ['../javascript/**/*.js']
    },
    sass: {
      dist: {
        files: {
          '../css/styles.css': '../sass/main.scss'
        }
      }
    },
    watch: {
      javascripts: {
        files: ['../javascript/**/*.js', '../sass/main.scss'],
        tasks: ['jshint', 'browserify', 'sass']
      }
    },
    jshintrc: './.jshintrc'
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks); //one line of code that loops through all of the dependencies and pulls them in
  grunt.registerTask('default', ['browserify', 'sass', 'jshint', 'watch']);
}