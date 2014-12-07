(function ($) {
	google.load('search', '1');
	
	jQuery.fn.google = function (query) {
		var searchControl = new google.search.SearchControl();
		searchControl.addSearcher(new google.search.ImageSearch());
		searchControl.draw(this[0]);
		searchControl.execute(query);
	};
})(jQuery);
