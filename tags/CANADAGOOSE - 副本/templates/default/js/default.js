$().ready(function(){
	var mySwiper = new Swiper ('.banner .swiper-container', {
		direction: 'horizontal',
		autoplay:5000,
		loop: true,
		// 如果需要分页器
		pagination: '.swiper-pagination',
	 });
	 var mySwiper = new Swiper ('.showpic .swiper-container', {
		direction: 'horizontal',
		autoplay:5000,
		loop: true,
		// 如果需要分页器
		pagination: '.swiper-pagination',
	 });
});
function showchanpin(o,id){
	$(o).parent().children().each(function(){
		$(this).attr("class","nt2");
	});
	$(o).attr("class","nt1");
	$("div[class='nt3']").each(function(){
		$(this).css("display","none");
	});
	$("#"+id).css("display","block");
}
function shownews(o,id){
	$(o).parent().children().each(function(){
		$(this).attr("class","nt2");
	});
	$(o).attr("class","nt1");
	$("div[class='nt4']").each(function(){
		$(this).css("display","none");
	});
	$("#"+id).css("display","block");
}