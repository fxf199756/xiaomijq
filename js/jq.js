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
        // lists1.css("transform",`translate(${-widths1*times1}px)`);
        lists1.animate({left:-(widths1 * times1)});
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
        lists1.animate({left:-widths1*times1});
    })
    //封装下方轮播效果函数
    function banner(imgs,dots,leftBtn,rightBtn,widths,active) {
        let now=0;
        let next=0;
        //设置默认值
        imgs.eq(0).css("left","0");
        dots.eq(0).addClass(active);

        //定义开关:控制快速点击时图片快速轮播的现象
        //默认开关是打开的，可以点击左右箭头 flag=true
        let flag=true;
        function move() {
            next++;
            if(next==imgs.length){
                next=0;
            }
            //确保下一张图永远在最右侧
            imgs.eq(next).css("left",`$(widths)px`);
            imgs.eq(now).animate({left:-widths});
            imgs.eq(next).animate({left:0},function(){
                flag=true;
            });
            dots.eq(now).removeClass(active);
            dots.eq(next).addClass(active);
            now=next;
        }
        // 点击左箭头
        function moveL(){
            next--;
            if(next<0){
                next=imgs.length-1;
            }
            imgs.eq(next).css("left",`$(-widths)px`);
            imgs.eq(now).animate({left:widths});
            imgs.eq(next).animate({left:0},function(){
                flag=true;
            });
            dots.eq(now).removeClass(active);
            dots.eq(next).addClass(active);
            now=next;
        }
        leftBtn.click(function(){
            //判断开关是否开启
            //如果开关开启，则!flag=flase,不执行return，执行flag=flase和move，move执行完flag=true
            //开关关闭的时候，不要点击
            //flag=false !flge=true
            if(!flag){
                return;
            }
            if (next==0) {
                return;
            }
            flag=false;
            moveL();
        })
        rightBtn.click(function(){
            if(!flag){
                return;
            }
            if (next==imgs.length-1) {
                return;
            }
            flag=false;
            move();
        })
        //鼠标单击轮播点
            dots.click(function(){
                let i=$(this).index();
                if (next==i){
                    return;
                }
                if (next>i){
                    imgs.eq(i).css("left",`${-widths}px`);
                    imgs.eq(now).animate({left:widths});
                    imgs.eq(i).animate({left:0});
                    dots.eq(now).removeClass(active);
                    dots.eq(i).addClass(active);
                }else  if (next<i){
                    imgs.eq(i).css("left",`${widths}px`);
                    imgs.eq(now).animate({left:-widths});
                    imgs.eq(i).animate({left:0});
                    dots.eq(now).removeClass(active);
                    dots.eq(i).addClass(active);
                }
                now=next=i;
            })
    }
    // }
    //调用下方轮播函数
    let contacts=$(".main .container .bottom ul .first .contact_1");
    let dot=$(".main .container .bottom ul .first .dot .circle");
    let lBtn=$(".main .container .bottom ul .first .left");
    let rBtn=$(".main .container .bottom ul .first .right");
    let wids=contacts.width();
    banner(contacts,dot,lBtn,rBtn,wids,"circles") ;
    let contacts1=$(".main .container .bottom ul .second .contact_1");
    let dot1=$(".main .container .bottom ul .second .dot .circle");
    let lBtn1=$(".main .container .bottom ul .second .left");
    let rBtn1=$(".main .container .bottom ul .second .right");
    let wids1=contacts.width();
    banner(contacts1,dot1,lBtn1,rBtn1,wids1,"circles") ;
    let contacts2=$(".main .container .bottom ul .third .contact_1");
    let dot2=$(".main .container .bottom ul .third .dot .circle");
    let lBtn2=$(".main .container .bottom ul .third .left");
    let rBtn2=$(".main .container .bottom ul .third .right");
    let wids2=contacts.width();
    banner(contacts2,dot2,lBtn2,rBtn2,wids2,"circles") ;
    let contacts3=$(".main .container .bottom ul .fourth .contact_1");
    let dot3=$(".main .container .bottom ul .fourth .dot .circle");
    let lBtn3=$(".main .container .bottom ul .fourth .left");
    let rBtn3=$(".main .container .bottom ul .fourth .right");
    let wids3=contacts.width();
    banner(contacts3,dot3,lBtn3,rBtn3,wids3,"circles") ;
    //返回顶部
    let back=$(".goback");
    console.log(back);
    back.click(function () {
        $(window).scrollTop(0);
    })
    $(window).scroll(function () {
        let heights=$(window).scrollTop();
        if (heights>1500) {
            back.css("display","block");
        }else if(heights<1500){
            back.css("display","none");
        }
    })
    //下部侧边栏
    let message=$(".sort ul li .message");
    let is=$(".sort ul li");
    is.mouseenter(function () {
        let i=$(this).index();
        message.eq(i).css("display","block");
    })
    is.mouseleave(function () {
        let i=$(this).index();
        message.eq(i).css("display","none");
    })
    //倒计时
    function djs(spans){
        setInterval(setDate,1000);
        function setDate(){
            let arr=fn();
            spans.each(function (i) {
                $(this).html(arr[i]);
            })
        }
        function fn() {
            let arr = [];
            let now = new Date();
            let future = new Date(2018,9,1,18,0,0);
            let time = Math.floor((future.getTime() - now.getTime()) / 1000);

            //月
            // let month = Math.floor(time / (30 * 24 * 60 * 60));
            // arr.push(month);
            // let day = Math.floor(time % (30 * 24 * 60 * 60) / (24 * 60 * 60));
            // arr.push(day);
            let hour = Math.floor(time % (30 * 24 * 60 * 60) % (24 * 60 * 60) / (60 * 60));
            arr.push(hour);
            let m = Math.floor(time % (30 * 24 * 60 * 60) % (24 * 60 * 60) % (60 * 60) / (60));
            arr.push(m);
            let s = Math.floor(time % (30 * 24 * 60 * 60) % (24 * 60 * 60) % (60 * 60) % (60));
            arr.push(s);

            return arr;
        }
    }
    let spans=$(".buy .bottom .left .coun .box");
    djs(spans);
})
