(function($) {

	var navs = $('nav');
	var foot = $('footer');
	var footc = $('.sponsor-container');
	var logo = $('.logo-box');

	$(window).resize(function() {
		var winwidth = $(window).width();

		$(navs).css({
			width: (winwidth - 350) / 2
		});

		$(foot).css({
			width: winwidth - 20
		});

		$(footc).css({
			width: winwidth - 40
		});
	});

	var init = function() {
		var winwidth = $(window).width();

		$(navs).css({
			width: (winwidth - 350) / 2
		});

		$(foot).css({
			width: winwidth - 20
		});

		$(footc).css({
			width: winwidth - 40
		});
	};

	init();

})(jQuery);