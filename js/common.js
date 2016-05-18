function common(){
	
}
common.prototype={
	//显示遮罩
	showMark:function(){
		if($("#ui-id-mark").length==0){
			$('<div id="ui-id-mark"></div>').appendTo($("body"))
		}
	},
	//隐藏遮罩
	hideMark:function(){
		if($("#ui-id-mark").length>0){
			$("#ui-id-mark").remove();
		}
	},
	//检测手机号码
	checkPhone:function(phone){
		var reg=/^1[34578]\d{9}$/;
		if(reg.test(phone)){
			return true;
		}else{
			return false;
		}
	},
	//检测名字
	checkName:function(name){
		var reg=/^[\u4e00-\u9fa5]{1,5}$/;
		if(reg.test(name)){
			return true;
		}else{
			return false;
		}
	},
	//检测品种
	checkKind:function(kind){
		var reg=/^[\u4e00-\u9fa5]{1,6}$/;
		if(reg.test(kind)){
			return true;
		}else{
			return false;
		}
	},
	//弹出框
	showDialog:function(msg,btn,callback){
		var _this=this;
		_this.showMark();
		//创建弹框
		var html='';
		if($("#ui-id-dialog").length==0){
			html+='<div id="ui-id-dialog">'
					  +'<p>'+msg+'</p>'
					  +'<span id="ui-id-btn">'+btn+'</span>'
					+'</div>'

		}
		$(html).appendTo($("body"));
		$("#ui-id-btn").on("click",function(){
			_this.hideMark();
			$("#ui-id-dialog").remove();
			callback && callback();
		})
	}
}
var common=new common();
