module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		bower: {
			install: {
				options: {
					copy: false
				}
			}
		}
	});

	grunt.registerTask('default', ['bower:install']);
};