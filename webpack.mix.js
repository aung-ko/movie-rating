let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
 mix.js([
	'resources/assets/talvbansal/media-manager/js/media-manager.js',
	'resources/assets/js/media-manager-custom.js'
	], 'public/js/media-manager.js')
   .styles('resources/assets/talvbansal/media-manager/css/media-manager.css', 'public/css/media-manager.css');

