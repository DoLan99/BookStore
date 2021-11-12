var setREVStartSize = function () {
	var tpopt = new Object();
	tpopt.startwidth = 1170;
	tpopt.startheight = 600;
	tpopt.container = jQuery('#rev_slider_1_1');
	tpopt.fullScreen = "off";
	tpopt.forceFullWidth = "off";

	tpopt.container.closest(".rev_slider_wrapper").css({
		height: tpopt.container.height()
	});
	tpopt.width = parseInt(tpopt.container.width(), 0);
	tpopt.height = parseInt(tpopt.container.height(), 0);
	tpopt.bw = tpopt.width / tpopt.startwidth;
	tpopt.bh = tpopt.height / tpopt.startheight;
	if (tpopt.bh > tpopt.bw) tpopt.bh = tpopt.bw;
	if (tpopt.bh < tpopt.bw) tpopt.bw = tpopt.bh;
	if (tpopt.bw < tpopt.bh) tpopt.bh = tpopt.bw;
	if (tpopt.bh > 1) {
		tpopt.bw = 1;
		tpopt.bh = 1
	}
	if (tpopt.bw > 1) {
		tpopt.bw = 1;
		tpopt.bh = 1
	}
	tpopt.height = Math.round(tpopt.startheight * (tpopt.width / tpopt.startwidth));
	if (tpopt.height > tpopt.startheight && tpopt.autoHeight != "on") tpopt.height = tpopt.startheight;
	if (tpopt.fullScreen == "on") {
		tpopt.height = tpopt.bw * tpopt.startheight;
		var cow = tpopt.container.parent().width();
		var coh = jQuery(window).height();
		if (tpopt.fullScreenOffsetContainer != undefined) {
			try {
				var offcontainers = tpopt.fullScreenOffsetContainer.split(",");
				jQuery.each(offcontainers, function (e, t) {
					coh = coh - jQuery(t).outerHeight(true);
					if (coh < tpopt.minFullScreenHeight) coh = tpopt.minFullScreenHeight
				})
			} catch (e) {}
		}
		tpopt.container.parent().height(coh);
		tpopt.container.height(coh);
		tpopt.container.closest(".rev_slider_wrapper").height(coh);
		tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(coh);
		tpopt.container.css({
			height: "100%"
		});
		tpopt.height = coh;
	} else {
		tpopt.container.height(tpopt.height);
		tpopt.container.closest(".rev_slider_wrapper").height(tpopt.height);
		tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(tpopt.height);
	}
};

/* CALL PLACEHOLDER */
setREVStartSize();


var tpj = jQuery;
tpj.noConflict();
var revapi1;


tpj(document).ready(function () {


	if (tpj('#rev_slider_1_1').revolution == undefined) {
		revslider_showDoubleJqueryError('#rev_slider_1_1');
	} else {
		revapi1 = tpj('#rev_slider_1_1').show().revolution({

			dottedOverlay: "none",
			delay: 9000,
			startwidth: 1170,
			startheight: 600,
			hideThumbs: 200,

			thumbWidth: 100,
			thumbHeight: 50,
			thumbAmount: 2,

			simplifyAll: "off",
			navigationType: "none",
			navigationArrows: "solo",
			navigationStyle: "navbar-old",
			touchenabled: "on",
			onHoverStop: "off",
			nextSlideOnWindowFocus: "off",

			swipe_threshold: 0.7,
			swipe_min_touches: 1,
			drag_block_vertical: false,


			keyboardNavigation: "on",

			navigationHAlign: "center",
			navigationVAlign: "bottom",
			navigationHOffset: 0,
			navigationVOffset: 20,

			soloArrowLeftHalign: "left",
			soloArrowLeftValign: "center",
			soloArrowLeftHOffset: 20,
			soloArrowLeftVOffset: 0,

			soloArrowRightHalign: "right",
			soloArrowRightValign: "center",
			soloArrowRightHOffset: 20,
			soloArrowRightVOffset: 0,

			shadow: 0,
			fullWidth: "on",
			fullScreen: "off",

			spinner: "spinner0",

			stopLoop: "off",
			stopAfterLoops: -1,
			stopAtSlide: -1,

			shuffle: "off",

			autoHeight: "off",
			forceFullWidth: "off",


			hideThumbsOnMobile: "off",
			hideNavDelayOnMobile: 1500,
			hideBulletsOnMobile: "off",
			hideArrowsOnMobile: "off",
			hideThumbsUnderResolution: 0,

			hideSliderAtLimit: 0,
			hideCaptionAtLimit: 0,
			hideAllCaptionAtLilmit: 0,
			startWithSlide: 0,
			isJoomla: true
		});


	}
  
});
jQuery(document).ready(function() {
  jQuery(".owl_feedback").owlCarousel({
    items:1,
    autoPlay:true,
    pagination:false,
    navigation:true,
    stopOnHover:false,
    navigationText: ["",""],
  });
  jQuery(".owl_feedback").setTimeout(".owl_feedback", 20000);
  jQuery('.menu_mobile_btn .toggle_menu').on('click', function(){
	jQuery(this).toggleClass('mobile-active');
	jQuery('.header').toggleClass('mobile-active');
		
});
jQuery('.sf-menu a').on('click', function(){
	var $this = $(this);
	//If this is a local link or item with sumbenu - not toggling menu
	if (($this.hasClass('sf-with-ul')) || !($this.attr('href').charAt(0) === '#')) {
		return;
	}
	$this.closest('.header').toggleClass('mobile-active').find('.toggle_menu').toggleClass('mobile-active');
});

});