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
		
		//�X�N���[��������
		$(window).scroll(function () {
			animation();		
		});
		//���T�C�Y������
		$(window).resize(function(){
    		animation();
		});
		animation();
	});
});