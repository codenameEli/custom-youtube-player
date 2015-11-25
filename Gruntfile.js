 module.exports = function(grunt) {

	require('time-grunt')(grunt); // Need to require
	require('load-grunt-tasks')(grunt); // Load tasks automatically

	require('load-grunt-config')(grunt, {

	    data: { // Define global variables in here

  			paths: {

					base: 'custom-youtube-player',

  				// JavaScript assets
  				js : {
              src : '<%= paths.base %>/custom-youtube-player.js',
  				    dest : '<%= paths.base %>/custom-youtube-player.min.js'
  				},

  				// CSS assets
  				css : {
              src : '<%= paths.base %>/custom-youtube-player.scss',
              dest : '<%= paths.base %>/custom-youtube-player.css',
              dest_min : '<%= paths.base %>/custom-youtube-player.min.css'
  				},
  			},
	    }
	});
};
