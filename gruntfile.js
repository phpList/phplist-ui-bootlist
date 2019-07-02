module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    	 concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['js/jquery.toggleText.js'
                    ,'js/bootstrap-select.js'
                    ,'js/phpList3ToBootstrap.js'
                    ,'bootstrap/dist/js/bootstrap.min.js'
                    ,'js/bootstrap-tagsinput.js'
                    ,'js/bootstrap-dialog.js'
                    ,'js/bootstrap-toggle.js'
                    ,'js/phplist.js'],
                dest: 'js/dist/<%= pkg.name %>.js'
            }
        },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'js/dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "css/style.css": "less/style.less" // destination file and source file
        }
      }
    },
    watch: {
      styles: {
        files: ['less/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('mydefault', [
        'less'
        , 'watch'
        , 'concat'
        , 'uglify'
    ]);
};
