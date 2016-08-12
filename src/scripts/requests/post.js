define(function() {
	return function(url, params, object){
		return m.request({method: "POST", url: requests.getURI(url, params) }); // ToDo: Not sure how to append object yet
	};
});