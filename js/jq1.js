/*
* @Author: lenovo
* @Date:   2018-09-13 16:35:58
* @Last Modified by:   lenovo
* @Last Modified time: 2018-09-13 22:24:22
*/
$(function(){

	// 购物车落下
	let car=$(".shopcar");
	let cardown=$(".shopcar-bottom");
		car.mouseenter(function(){
			cardown.clearQueue().slideDown("slow");
	});
	car.mouseleave(function() {
		cardown.slideUp("slow");
	});

	// 侧面选项卡
	let page=$(".list .page");
	page.mouseenter(function(){
		$(".page-right").css("display","none");
		$(this).children(".page-right").css("display","block");
	})
	page.mouseleave(function(){
		$(this).children(".page-right").css("display","none");
	})

	// 家电选项卡
	let spa=$(".household .top .housea");
	let bottom=$(".adv2-right");
	spa.mouseenter(function(){
		let i=$(this).index();
		spa.removeClass("acolor");
		spa.eq(i).addClass("acolor");
		// bottom.eq(i).css("display","block");	
		bottom.css("display","none").eq(i).css("display","block");
	});
	spa.triggerHandler("mouseenter");


	// 轮播图
	
	let images=$(".beijin");
	let left=$(".leftbtn");
	let right=$(".rightbtn");
	let dots=$(".dots");
	let banner=$(".banner");
	let now=0;
	// 初始化
	let i=images.index();
	images.first().css("opacity","1");
	dots.eq(i).addClass("color");

	let t=setInterval(move,2000);
	function move(){
		now++;
		if (now==images.length) {
			now=0;
		}
		images.css("opacity","0").eq(now).css("opacity","1");
		dots.removeClass("color").eq(now).addClass("color");
	}

	function move1(){
		now--;
		if (now<0) {
			now=images.length-1;
		}
		images.css("opacity","0").eq(now).css("opacity","1");
		dots.removeClass("color").eq(now).addClass("color");
	}
	right.click(function(){
		move();
	});
	left.click(function(){
		move1();
	});

	dots.click(function(){
		let index=$(this).index();
		images.css("opacity","0").eq(index).css("opacity","1");
		dots.removeClass("color").eq(index).addClass("color");
	});
	banner.mouseenter(function(){
		clearInterval(t);
	});
	banner.mouseleave(function(){
		t=setInterval(move,2000);
	});

	// 整体
	/























})