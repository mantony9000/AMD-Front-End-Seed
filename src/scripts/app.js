require(['app.settings', 'app.vendor', 'routing/routes'], 
	function(settings, vendor, routes) {
		m.route.mode = settings.routeMode;
		m.route(settings.app, "/", routes);
		if(m.route() && routes[m.route()] && routes[m.route()].controller){
			routes[m.route()].controller().init(); // all route's controllers MUST have a init function
		}
});