module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
  options: {
    // define a string to put between each file in the concatenated output
    separator: ';'
  },
  dist: {
    // the files to concatenate
    src: ['js/*.js'],
    // the location of the resulting JS file
    dest: 'js/script.main.js'
  }
},
uglify: {
	dist:{
		src: ['js/script.main.js'],
		dest: 'js/script.main.min.js'
	}
},
cssmin: {
  target: {
    files: [{
      expand: true,
      //cwd: 'release/css',
      src: ['css/*.css'],
      dest: 'css/style.min.css',
      //ext: '.min.css'
    }]
  }
}

  });

 
  grunt.loadNpmTasks('grunt-contrib-concat');
  
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};