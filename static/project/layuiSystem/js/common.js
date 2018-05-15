$(function() {
	//读取选定皮肤
	var color = sessionStorage.getItem("skin", color);
	if(color) {
		$("body").attr("class", "skin-" + color);
	}else {
		$("body").attr("class", "skin-blue");
	}
	//侧导航点击效果
	layui.use(['layer', 'element', 'form', 'laydate'], function() {
		var layer   = layui.layer,
			element = layui.element(),
			form    = layui.form(),
			laydate = layui.laydate;
		//加减数量
		$("#reduce").click(function(){
			var num = $(this).siblings("input[type='text']").val();
			if(num == 1){
				layer.msg("所选数量不能小于等于0！",{icon: 5});
				return;
			}
			num--;
			$(this).siblings("input[type='text']").val(num);
		})
		$("#add").click(function(){
			var num = $(this).siblings("input[type='text']").val();
			num++;
			$(this).siblings("input[type='text']").val(num);
		})
	})
	//全选
	var checkFlag = true;
	$("#reverse").click(function(){
		$(".table-bordered input[type='checkbox'],.row input[type='checkbox']").each(function(){
			var $this = $(this);
			if(checkFlag){
				$this.prop("checked",true);
			}else{
				$this.prop("checked",false);
			}
		})
		if(checkFlag){
			checkFlag = false;
		}else{
			checkFlag = true;
		}
	})
	//不同分辨率下侧导航效果
	$(".menu").unbind();
	if($(window).width() > 750) {
		$(".navbar").show();
		$(".menu").click(function() {
			$(".navbar").toggleClass("outLeft");
			$(".content").toggleClass("outLeft");
			$(".layui-nav-item").removeClass("layui-nav-itemed");
			$(".navbar.outLeft").unbind();
			$(".navbar.outLeft").click(function() {
				$(this).removeClass("outLeft");
				$(".content").removeClass("outLeft");
			})
		})
	} else {
		$(".navbar").hide();
		$(".navbar").removeClass("outLeft");
		$(".menu").click(function() {
			$(".navbar").toggle();
			$(".navbar").toggleClass("bounceInDown");
		})
		$(".nav-dropback").click(function() {
			$(".navbar").hide();
			$(".navbar").removeClass("bounceInDown");
		})
		$(".dropdown-toggle").click(function(){
			$(".navbar").hide();
			$(".navbar").removeClass("bounceInDown");
		})
	}

	//浏览器调整窗口大小
	$(window).resize(function() {
		if($(window).width() > 750) {
			$(".navbar").show();
			$(".menu").unbind();
			$(".nav-dropback").unbind();
			$(".dropdown-toggle").unbind();
			$(".menu").click(function() {
				$(".navbar").toggleClass("outLeft");
				$(".content").toggleClass("outLeft");
				$(".layui-nav-item").removeClass("layui-nav-itemed");
				$(".navbar.outLeft").unbind();
				$(".navbar.outLeft").click(function() {
					$(this).removeClass("outLeft");
					$(".content").removeClass("outLeft");
				})
			})
		} else {
			$(".navbar").hide();
			$(".navbar").removeClass("outLeft");
			$(".content").removeClass("outLeft");
			$(".menu").unbind();
			$(".menu").click(function() {
				$(".navbar").toggle();
				$(".navbar").toggleClass("bounceInDown");
			})
			$(".nav-dropback").unbind();
			$(".nav-dropback").click(function() {
				$(".navbar").hide();
				$(".navbar").removeClass("bounceInDown");
			})
			$(".dropdown-toggle").unbind();
			$(".dropdown-toggle").click(function(){
				$(".navbar").hide();
				$(".navbar").removeClass("bounceInDown");
			})
		}
	})
})

//换肤
function replaceSkin(color) {
	$("body").attr("class", "");
	sessionStorage.setItem("skin", color);
	$("body").addClass("skin-" + color);
}