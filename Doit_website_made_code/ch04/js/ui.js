// 모든 문서가 onload 되면.
$(document).ready(function(){
	//시작하면 id=container에 class="start"를 추가함. class="start"
	$("#container").addClass("start");
	$("nav li").click(function(){
		$("#container").css("max-width", "100%")
		// li 클릭시 선택인자의 data-rol의 값을 가져옴. 
		// id = menu1이 선택됨.
		var id=$(this).attr("data-rol");    
		// 모든 list의 class="on"을 제거하고, 
		$("nav li").removeClass("on");
		// 선택된 것에만 "on" 클래스 정의
		$(this).addClass("on");    
		// content(menu)에 정의한 prev, this, next 클래스는 모두 삭제
		$(".content").removeClass("prev this next");     
		//클릭한 메뉴와 매칭 되는 id에 this 클래스를 지정하고 그 앞의 모든 <section> 태그는 .prev클래스를 지정한다    
		$("#" + id).addClass("this").prevAll().addClass("prev");    
		//클릭한 메뉴와 매칭 되는 id의 뒤에 오는 <section> 태그는 .next 클래스를 지정한다     
		$("#" + id).nextAll().addClass("next");    
	});
	//로고 클릭 시
	$(".logo_box").click(function(){
		// 모든 list의 class="on"을 제거하고, 선택된 것에만 "on" 클래스 정의
		$("nav li").removeClass("on");
		// content(menu)에 정의한 prev, this, next 클래스는 모두 삭제
		$(".content").removeClass("prev this next");
		$("#container").css("max-width", "1200px");
	});
});

