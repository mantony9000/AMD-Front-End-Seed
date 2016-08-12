var log = console.log.bind(console);
var clear = console.clear.bind(console);
var	pluginLocation = '../plugins';
var plugins = [
		{
			name : 'mithril',
			main: 'mithril.min',
			location : pluginLocation
		},
		{
			name : 'watch',
			main: 'watch.min',
			location : pluginLocation
		},
		{
			name : 'hammer',
			main: 'hammer.min',
			location : pluginLocation
		}
	];
requirejs.config( {
	packages : plugins
});
// below gives global scope
define(['mithril', 'watch', 'hammer'],function(m, watch, hammer){
	return plugins;
});