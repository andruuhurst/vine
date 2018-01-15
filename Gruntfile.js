module.exports = function(grunt) {

    grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		/**
		 * Sass
		 */
		sass: {
		  dev: {
		    options: {
		      style: 'expanded',
		      sourcemap: 'none',
		    },
		    files: {
		      'compiled/style-human.css': 'sass/style.scss'
		    }
		  },
      dist: {
		    options: {
		      style: 'compressed',
		      sourcemap: 'none',
		    },
		    files: {
		      'compiled/style.css': 'sass/style.scss'
		    }
		  }
		},

    /**
     * Autoprefixer
     */
     postcss: {
       options: {
         processors: [
           require('autoprefixer')({browsers: ['last 2 version']})
         ]
       },
       multiple_files: {
         expand: true,
         flatten: true,
         src: 'compiled/*.css',
         dest: ''
       }
     },
	  	/**
	  	 * Watch
	  	 */
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass', 'postcss']
			}
		},

	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');
	grunt.registerTask('default',['watch']);
}
