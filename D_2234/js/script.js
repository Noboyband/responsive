(function(){$("#back-top").hide();$(function(){$(window).scroll(function(){if($(this).scrollTop()>100){$("#back-top").fadeIn()}else{$("#back-top").fadeOut()}});$("#back-top a").click(function(){$("body,html").animate({scrollTop:0},800);return false})});$(".fcsCarousel").fcsCarousel({speed:700,});$(".ourClients").fcsCarousel();$(".tool-tip").tooltip();$(".pop-over").popover();$(".pop-over").on("click",function(a){a.preventDefault()});$(".accordion").accordion({heightStyle:"content"});$(".menu").mobileMenu({defaultText:"Navigate to...",className:"mnav",subMenuDash:"&emsp;"});$(".menu li.parent, .menu li.parent li").hover(function(){$("a",this).addClass("current");$(this).children("ul").css({visibility:"visible",display:"none"}).slideDown(300)},function(){$("a",this).removeClass("current");$("ul",this).css({visibility:"hidden",display:"none"})});$(".animateIcon, .icon190, .icon100").hover(function(){$this=$(this);$this.parents(".singleService").addClass("hover").find(".title").addClass("orange")},function(){$this=$(this);$this.parents(".singleService").removeClass("hover").find(".title").removeClass("orange")});$(".animateIconServices").hover(function(){$this=$(this);$this.find(".serviceTitle").addClass("orange").end().parent().find(".singleService").addClass("hover")},function(){$this=$(this);$this.find(".serviceTitle").removeClass("orange").end().parent().find(".singleService").removeClass("hover")})})();