define(['routing/routes.config',
		'app/home/home'
	],
	function(cfg, home){
	var root = cfg.root;
	return {
		"/": home
	}; 
});