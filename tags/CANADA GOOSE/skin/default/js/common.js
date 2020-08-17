$().ready(function(){
	var mySwiper = new Swiper ('.banner .swiper-container', {
		direction: 'horizontal',
		autoplay:5000,
		loop: true,
		// 如果需要分页器
		pagination: '.swiper-pagination',
		// 如果需要前进后退按钮
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
	 });
	 var mySwiper2 = new Swiper ('.gundong2 .swiper-container', {
		direction: 'vertical',
		pagination:'.show2 .swiper-container',
		autoplay:3000,
		slidesPerView:3,
		loop: true,
	 });
});
function proshow(o){
	if(o!="xq"){
		$("#xq").css("display","none");$("#pj").css("display","block");
		$("#xqa").css("background-color","#FFF");$("#pja").css("background-color","#f5f3f0");
	}else{
		$("#xq").css("display","block");$("#pj").css("display","none");
		$("#xqa").css("background-color","#f5f3f0");$("#pja").css("background-color","#FFF");
	}
}
function shownows(o,id){
	for (i=1;i<4;i++) {
		$("#ntop"+i).attr("class","d1");
	}
	$(o).attr("class","d2");
	for (i=1;i<4;i++) {
		$("#now"+i).css("display","none");
	}
	$("#"+id).css("display","block");
}
function showchanpin(o,id){
	$(o).parent().children().each(function(){
		$(this).attr("class","a2");
	});
	$(o).attr("class","a3");
	$("div[class='ddt']").each(function(){
		$(this).css("display","none");
	});
	$("#"+id).css("display","block");
}

function selectSite(url){
	var ua = navigator.userAgent;
	var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
	isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
	isAndroid = ua.match(/(Android)\s+([\d.]+)/),
	isMobile = isIphone || isAndroid;
	if(isMobile && sessionStorage.getItem('goto')==null) { //如果是手机访问
		if(window.confirm("您使用的是手机\n需要转到手机站吗？")){
			sessionStorage.setItem('goto',"yes");
			location.href = url;
		}
		sessionStorage.setItem('goto',"no");
	}
}
