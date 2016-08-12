define(['requests/requests.config'], function(requests) {
	return function(url, params){ // ToDo: Format Params to accept crap
		return m.request({method: "GET", url: requests.getURI(url, params)});
	};
});