'use strict';

var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

var CONF = {
  "pkg": require('./package.json').config,
  "webpack": {
    "dev": require('./webpack.config.js'),
    "dist": require('./webpack.dist.config.js')
  }
};

module.exports = function (grunt) {
  // Let *load-grunt-tasks* require everything
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: CONF.pkg,

    webpack: {
      options: CONF.webpack.dist,
      dist: {
        cache: false
      }
    },

    'webpack-dev-server': {
      options: {
        hot: true,
        port: CONF.pkg.port_server,
        webpack: CONF.webpack.dev,
        publicPath: '/assets/',
        contentBase: './<%= pkg.src %>/'
      },

      start: {
        keepAlive: true
      }
    },

    connect: {
      options: {
        port: CONF.pkg.port_server
      },

      dist: {
        options: {
          keepalive: true,
          middleware: function (connect) {
            return [
              mountFolder(connect, CONF.pkg.dist)
            ];
          }
        }
      }
    },

    open: {
      options: {
        delay: 500
      },
      dev: {
        path: 'http://localhost:<%= connect.options.port %>/webpack-dev-server/',
        app: 'Google Chrome Canary'
      },
      dist: {
        path: 'http://localhost:<%= connect.options.port %>/'
      }
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },

    copy: {
      dist: {
        files: [
          // includes files within path
          {
            flatten: true,
            expand: true,
            src: ['<%= pkg.src %>/*'],
            dest: '<%= pkg.dist %>/',
            filter: 'isFile'
          },
          {
            flatten: true,
            expand: true,
            src: ['<%= pkg.src %>/images/*'],
            dest: '<%= pkg.dist %>/images/'
          }
        ]
      }
    },

    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= pkg.dist %>'
          ]
        }]
      }
    }
  });

  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'open:dist', 'connect:dist']);
    }

    if (target === 'open') {
      return grunt.task.run(['open:dev', 'webpack-dev-server']);
    }

    grunt.task.run(['webpack-dev-server']);
  });

  grunt.registerTask('test', ['karma']);

  grunt.registerTask('build', ['clean', 'copy', 'webpack']);

  grunt.registerTask('default', []);
};
