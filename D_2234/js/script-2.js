(function(){
		$("#back-top").hide();
		$(function(){
			$(window).scroll(function(){
				if($(this).scrollTop()>100){
					$("#back-top").fadeIn()
					}else{
						$("#back-top").fadeOut()
						}
				});
				$("#back-top a").click(function(){
					$("body,html").animate({
						scrollTop:0},800);
						return false
				});
		});
	//FCS Carousel Sliders
	$('.fcsCarousel').fcsCarousel({
		speed: 700,
		//autoplay: true,
	});
	
	$('.ourClients').fcsCarousel();
	
	$('.tool-tip').tooltip();
	$('.pop-over').popover();
	$('.pop-over').on('click',function(e){
		e.preventDefault();
	});
	
	$( ".accordion" ).accordion({
		heightStyle: "content"
	}); 
	
	//Mobile Navigation
	$('.menu').mobileMenu({
	   defaultText: 'Navigate to...',
	   className: 'mnav',
	   subMenuDash: '&emsp;'
	});
	
	//Drop-Down Menu
	$(".menu li.parent, .menu li.parent li").hover(function () {
		$('a', this).addClass('current');
		$(this).children('ul').css({visibility: "visible",display: "none"}).slideDown(300);
	 }, function () {
		$('a', this).removeClass('current');
		$('ul', this).css({visibility: "hidden"});
	});
	
	//Services Animation effect
	$('.animateIcon').hover(function(){
		$this = $(this);
		$this.parents('article').find('hgroup').addClass('up');
		$this.parents('article').find('hgroup .icon50').addClass('orange')
			.end().find('hgroup .title').addClass('orange')
			.end().find('hgroup .icon80').addClass('orange');					
	},
	function(){
		$this = $(this);
		$this.parents('article').find('hgroup').removeClass('up');	
		$this.parents('article').find('hgroup .icon50').removeClass('orange')
			.end().find('hgroup .title').removeClass('orange')
			.end().find('hgroup .icon80').removeClass('orange');	
	});	
})();