module.exports = function(grunt) {

  grunt.initConfig({
    browserify: {
      js: {
        //take the main.js and create the dist/app.js file
          src: ['../javascript/factory.js'],
          dest: '../dist/app.js'
      },
      options: {
          transform: ['./node_modules/hbsfy']
      }
    },
    jshint: {
      options: {
        predef: [ "document", "console", "$", "Handlebars"],
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