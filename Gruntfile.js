'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
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
        tasks: ['less:development', 'express:development:stop', 'express:development']
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

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.loadNpmTasks('grunt-express-server');

  grunt.registerTask('default', ['less:development', 'express:development', 'watch']);
  grunt.registerTask('production', ['less:production']);
};
