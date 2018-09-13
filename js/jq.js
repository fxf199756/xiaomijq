$(function () {
    //购物车
    $(".shop").mouseenter(function () {
        $(".none").clearQueue().slideDown();
    })
    $(".shop").mouseleave(function () {
        $(".none").clearQueue().slideUp();
    })
    //轮播图选项卡
    let lis = $(".banner .container .table .list .list_1");
    let son = $(".banner .container .table .list .list_1 .card");
         //隐性循环
    lis.mouseenter(function () {
        let i=$(this).index();
        //链式调用
        son.css("display","none").eq(i).css("display","flex");
    })
    lis.mouseleave(function () {
        son.css("display","none");
    })
    // 家电选项卡
    let as = $(".elec .container .top .right a");
    let child = $(".elec .container .bottom .right");
    as.mouseenter(function () {
        let i=$(this).index();
        as.removeClass("action");
        as.eq(i).addClass("action");
        child.css("display","none").eq(i).css("display","flex");
    });
    as.triggerHandler("mouseenter");
    //轮播图
    let images=$(".imges");
    let dots=$(".banner .container .circle li");
    let leftbtn=$(".banner .container .left");
    let rightbtn=$(".banner .container .right");
    let banners=$(".picture");
    let now=0;
        //初始化
    images.first().css("opacity","1");
    dots.eq(0).addClass("dots");
    let t=setInterval(move,2000);
    function move() {
        now++;
        if (now==images.length){
            now=0;
        }
        images.css("opacity","0").eq(now).css("opacity","1");
        dots.removeClass("dots").eq(now).addClass("dots");
    }
    function move1(){
        now--;
        if (now<0) {
            now=images.length-1;
        }
        images.css("opacity","0").eq(now).css("opacity","1");
        dots.removeClass("dots").eq(now).addClass("dots");
    }
    rightbtn.click(function(){
        move();
    });
    leftbtn.click(function(){
        move1();
    });
    dots.click(function(){
        let index=$(this).index();
        images.css("opacity","0").eq(index).css("opacity","1");
        dots.removeClass("dots").eq(index).addClass("dots");
    });
    banners.mouseenter(function(){
        clearInterval(t);
    });
    banners.mouseleave(function(){
        t=setInterval(move,2000);
    });
    //小米闪购
    let btn=$(".buy .top .right ul li");
    let lists=$(".buy .bottom ul");
    let widths=lists.width()/2;
    let times=0;
    btn.first().click(function () {
        times++;
        if (times===2){
            times=1;
        }
        btn.first().removeClass("active");
        btn.last().addClass("active");
        lists.css("transform",`translate(${(-widths*times)}px)`);
    })
    btn.last().click(function () {
        times--;
        if (times===-1){
            times=0;
        }
        btn.first().addClass("active");
        btn.last().removeClass("active");
        lists.css("transform",`translate(${(-widths*times)}px)`)
    })
    //为你推荐
    let btn1=$(".recommend .container .top .right ul li");
    let lists1=$(".recommend .container .bottom ul");
    let widths1=lists1.width()/4;
    console.log(widths);
    let times1=0;
    btn1.eq(0).click(function () {
        times1++;
        if (times1==3){
            btn1.eq(0).removeClass("active");
        }
        if (times1==4) {
            times1=3;
            return;
        }
        btn1.eq(1).addClass("active");
        lists1.css("transform",`translate(${-widths1*times1}px)`);
    })
    btn1.eq(1).click(function () {
        times1--;
        if (times1==0){
            btn1.eq(1).removeClass("active");
        }
        if (times1==-1) {
            times1=1;
            return;
        }
        btn1.eq(0).addClass("active");
        lists1.css("transform",`translate(${-widths1*times1}px)`);
    })
})