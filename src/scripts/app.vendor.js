var log = console.log.bind(console);
var clear = console.clear.bind(console);
var	pluginLocation = '../plugins';
var plugins = [
		{
			name : 'mithril',
			main: 'mithril.min', // have separate for prod and build
			location : pluginLocation
		}
	];
requirejs.config( {
	packages : plugins
});
// below gives global scope
define(['mithril'],function(m){
	return plugins;
});