var isc = new iScroll('wraper',{
	onBeforeScrollStart:function(e){
        var ele=e.target.tagName.toLowerCase();
        if(ele!="input" && ele!="select" && ele!="textarea"){
            e.preventDefault();
        }
    }
});
function init(){
	bindEvent();
}
function bindEvent(){
	//tab切换
	$(".nav").on("click","li",function(){
		var index=$(this).index();
		$(this).addClass("cur").siblings().removeClass("cur");
		$("#imgList").find("ul").eq(index).addClass("img_cur").siblings().removeClass("img_cur");
	})
	//页脚
	$(".foot").on("click","dl",function(){
		$(this).addClass("hh").siblings().removeClass("hh");
	})
	//参赛切换
	$(".match_btn").on("tap","div",function(){
		var index=$(this).index();
		$(this).addClass("cur").siblings().removeClass("cur");
		$("#match_upload").find(".match_box").eq(index).addClass("photo_cur").siblings().removeClass("photo_cur");
	})
	//给所有的文本框绑定事件
	/*$(".forms").on("input propertychange","input[type=text]",checkInput);*/
	//确定
	$("#bto").on("click",checkBtn)
	//搜索
	$(".s_form input").on("focus",function(){
		$("#divs").css({
			"display":"block"
		})
		$(".s_form").css({
			"display":"none"
		})
	})
	$("#divs input").on("focus",function(){
		$(".s_form").css({
			"display":"block"
		})
		$("#divs").css({
			"display":"none"
		})
	})
	$("#cancel").on("click",function(){
		$(".s_form").css({
			"display":"block"
		})
		$("#divs").css({
			"display":"none"
		})
	})
}
//检查所有的文本框是否都填写了
/*function checkInput(){
	var name=$("#name").val(),
		kind=$("#kind").val(),
		phone=$("#phone").val(),
		ownbaby=$("#ownbaby").text(),
		bto=$("#bto");
	if(name && kind && phone && ownbaby){
		bto
	}
}*/
function checkBtn(){
	var name=$("#name").val(),
		kind=$("#kind").val(),
		phone=$("#phone").val();
	if(!common.checkName(name)){
		common.showDialog("请输入有效的名字字数","确定");
		return;
	}
	if(!common.checkKind(kind)){
		common.showDialog("请输入有效的品种字数","确定");
		return;
	}
	if(!common.checkPhone(phone)){
		common.showDialog("请输入有效的手机号码","确定");
		return;
	}
}
init();