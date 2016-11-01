$(function(){
	$(".index_content .floor .right .pros ul li:odd").css("margin-left","-1px");
	$(".index_content .floor .right .pros ul li:odd").css("border-right","0px");
	$(".footer_nav ul li:last").css("margin-right","0");
	$(".nav .subnav .box ul li:last").css("background","none");
	$(".foodnav .foodnavbg ul li:last").css("border-bottom","0");
	$(".food_content .floor .left ul li:last").css("border-bottom","0");
	$(".step ul li:odd").css("margin-right","0");
	})
/*top部分菜单弹出*/
$(function(){
	$(".top ul").find("li").each(function(){
		$(this).children(".t_sel").mouseenter(function(){
		 $(this).addClass("on");
		 $(this).children(".box").show().css("opacity",0.1).animate({top:'31px', opacity: 1},300);
		})
	    $(this).children(".t_sel").mouseleave(function(){
		 $(this).removeClass("on");
		 $(this).children(".box").hide().animate({top:'25px'},10);
		})
		})
	})

/*head部分微信*/
$(function(){
	$(".header .hd_wx .del").click(function(){
		$(".header .hd_wx").hide();
		})
	})

/*nav*栏目二级菜单部分*/
$(function(){
	$(".nav .subnav .box ul").find("li").each(function(){
		$(this).mouseenter(function(){
			$(this).addClass("hover");
			$(this).children(".subbox").show().css("opacity",0.1).animate({paddingLeft:'15px', opacity: 1},500);
			})
		$(this).mouseleave(function(){
			$(this).removeClass("hover");
			$(this).children(".subbox").hide().animate({paddingLeft:'0px'},10);
			})
		})
	})
/*nav*子页面box隐藏（index首页为显示状态）*/
/*$(function(){
	$(".nav .subnav").each(function(){
		$(this).mouseenter(function(){
			$(this).find(".hover_box").show();
			})
		$(this).mouseleave(function(){
			$(this).find(".hover_box").hide();
			})
		})
	})*/



// nav菜单隐藏功能
$(function () {
    $(".nav .subnav").mouseenter(function () {
        $(".nav .subnav .box").show();
    })
    $(".nav .subnav").mouseleave(function () {
        $(".nav .subnav .box").hide();
    })

})