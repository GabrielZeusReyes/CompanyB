$(document).ready(function (){
	var tabs = $('#categories li a'),
		litabs = $(tabs).parent(),
		products = $('.productslist ul'),
		activeTab;

	function openTab(name){
		//Remove all the active class
		$(products).each(function (){
			$(this).removeClass('active');
		});
		activeTab = $('.productslist').find('#'+name+'prod');
		$(activeTab).addClass('active');
	};

	$(tabs).click(function (){
		openTab($(this).text());
		$(tabs).each(function (){
			$(this).removeClass('selected');
		})
		$(litabs).each(function (){
			$(this).removeClass('active');
		});
		$(this).addClass('selected');
		$(this).parent().addClass('active');
		return false;
	});

	var navlist = $('#navbar ul');

	$('#mobileburger').click(function (){
		$(navlist).toggleClass('opened');
	});

	$('#navbar ul li a').click(function (){
		var section = $(this).attr("href");
		$('html, body').animate({
			scrollTop: $(section).offset().top
		}, 500);
	})
});