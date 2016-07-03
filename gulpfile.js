var elixir = require('laravel-elixir');
elixir.config.assetsPath = 'src';
elixir.config.publicPath = 'dist';

elixir(function(mix) {
    mix.sass('app.scss');

    mix.styles([
		'dist/css/bootstrap.css',
		'dist/css/ct-navbar.css',
		'dist/css/pe-icon-7-stroke.css',
		'dist/css/styledpixel.css',
	], 'dist/css/app.css', './');

	mix.scripts([
		'dist/js/bootstrap.js',
		'dist/js/ct-navbar.js'
	], 'dist/js/app.js', './');
});