(function ($) {
    "use strict";

    /* ==== 01. Info Bar Js ==== */

	$(".info-toggle-btn").on("click", function () {

		$(".info__area").addClass("info-opened");

		$(".body-overlay").addClass("opened");

	});

	$(".info-close-btn").on("click", function () {

		$(".info__area").removeClass("info-opened");

		$(".body-overlay").removeClass("opened");

	});

	$(".body-overlay").on("click", function () {

		$(".info__area").removeClass("info-opened");

		$(".body-overlay").removeClass("opened");

	});

 /* ==== 02. Mobile Menu Js ==== */

		$('#mobile-menu-active').metisMenu();

		$('#mobile-menu-active .submenu > a').on('click', function (e) {

			e.preventDefault();

		});


/* ==== 03. Animation Slider Js ==== */

function mainSlider() {
	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: true,
		autoplaySpeed: 10000,
		dots: false,
		fade: true,
		arrows: true,
		prevArrow: '<button class="slick-prev"> <i class="fas fa-chevron-left"></i> </button >',
        nextArrow: '<button class="slick-next"> <i class="fas fa-chevron-right"></i> </button>',
		responsive: [
			{ breakpoint: 767, settings: { dots: true, arrows: false } }
		]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}
}
mainSlider();



})(jQuery);