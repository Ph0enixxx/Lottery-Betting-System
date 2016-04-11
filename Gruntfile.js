'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      build: [
        '*.js',
        'public/**/*.js',
        '!public/bower_components/**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    less: {
      development: {
        files: {
          'public/css/main.css': 'public/css/main.less'
        }
      },
      production: {
        files: {
          'public/css/main.css': 'public/css/main.less'
        }
      }
    },
    watch: {
      development: {
        files: [
          'public/**/*.*',
          '!public/css/main.css',
          'index.js'
        ],
        tasks: ['jshint', 'less:development', 'express:development:stop', 'express:development']
      },
      express: {
        files: [
          'index.js'
        ],
        tasks: ['express:development'],
        options: {
          spawn: false
        }
      }
    },
    express: {
      development: {
        options: {
          script: 'index.js',
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.loadNpmTasks('grunt-express-server');

  grunt.registerTask('default', ['jshint', 'less:development', 'express:development', 'watch']);
  grunt.registerTask('production', ['jshint', 'less:production']);
};
