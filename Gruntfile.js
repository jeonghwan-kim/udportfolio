module.exports = function (grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({

    concat: {
      css: {
        src: ['src/main.js'],
        dest: 'dist/basic.js',
      },
      js: {
        src: ['src/main.js', 'src/extras.js'],
        dest: 'dist/with_extras.js',
      },
    },

    uglify: {
      generated: {
        files: [{
          dest: 'js/perfmatters.min.js',
          src: 'js/perfmatters.js'
        }]
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css',
          src: ['*.css', '!*.min.css'],
          dest: 'css',
          ext: '.min.css'
        }, {
          src: ['views/css/*.css', '!*.min.css'],
          dest: 'views/css/style.min.css'
        }]
      }
    },

    imagemin: {
      static: {
        files: {
          'img/2048.min.png': 'img/2048.png',
          'img/cam_be_like.min.jpg': 'img/cam_be_like.jpg',
          'img/mobilewebdev.min.jpg': 'img/mobilewebdev.jpg',
          'img/profilepic.min.jpg': 'img/profilepic.jpg',
          'views/images/pizza.min.png': 'views/images/pizza.png',
          'views/images/pizzeria.min.jpg': 'views/images/pizzeria.jpg'
        }
      }
    }


  });

  grunt.registerTask('default', [
    'uglify',
    'cssmin',
    'imagemin'
  ]);
}
