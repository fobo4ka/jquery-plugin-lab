(function ($) {
	var deferred = $.Deferred();
	function onLoaded() {
		deferred.resolve();
	}

	$.getScript('https://www.google.com/jsapi', function () {
		google.load('search', '1', {"callback" : onLoaded});
	});
	
	function showQuery(el, query) {
		var searchControl = new google.search.SearchControl();
		searchControl.addSearcher(new google.search.ImageSearch());
		searchControl.draw(el);
		searchControl.execute(query);
	}

	jQuery.fn.google = function (query) {
		var el = this[0];
		deferred.done(function () {
			showQuery(el, query);
		});
	};
})(jQuery);
