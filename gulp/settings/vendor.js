/**
 * This file/module contains all external configuration for the build/compile process.
 */
module.exports = {
	requiredlibs: {
		require: './required-dependencies/require/require.min.js'
	},
	libraries_js:{
		baseUrl: "src/scripts",
		paths: {
			mithril: "../../bower_components/mithril/mithril.min",
			lodash: "../../bower_components/lodash/dist/lodash.core.min",
			watch: "../../bower_components/watch/src/watch.min",
			snabbt: "../../bower_components/snabbt.js/snabbt.min",
			hammer: "../../bower_components/hammerjs/hammer.min",
			soundjs: "../../bower_components/SoundJS/lib/soundjs-0.6.2.min",
			three: "../../bower_components/three.js/three.min"

		},
		name: "app",
		out: "dist/scripts/app.js"
	},	
	libraries_css: [
		'../../bower_components/skeleton/css/normalize',
		'../../bower_components/skeleton/css/skeleton',
		'../../bower_components/SpinKit/css/spinkit',
		'../../bower_components/animate.css/animate.min',
		'../../bower_components/font-awesome/css/font-awesome.min'
	],	
	libraries_fonts: [
		'../../bower_components/font-awesome/fonts/font-awesome.min'
	],	
	libraries_assets: [
	]
}