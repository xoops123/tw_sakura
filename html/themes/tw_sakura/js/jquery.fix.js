$(function(){
	$(window).bind('load', function(){
		var sct = $(document).scrollTop();
		var hei = $(window).height();
		
		function animation(){
			sct = $(document).scrollTop();
			hei = $(window).height();
			$(".slide").each( function(){
				if($(this).offset().top + 100 < sct + hei){
					$(this).animate({opacity:"1", right: 0}, 1000);				
				};
			});
		}
		
		//スクロールした時
		$(window).scroll(function () {
			animation();		
		});
		//リサイズした時
		$(window).resize(function(){
    		animation();
		});
		animation();
	});
});