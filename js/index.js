 window.onload=function () {
    // 轮播图效果开始
     let images=document.querySelectorAll(".imges");
     let dots=document.querySelectorAll(".banner .container .circle li");
     let leftbtn=document.querySelectorAll(".banner .container .left")[0];
     let rightbtn=document.querySelectorAll(".banner .container .right")[0];
     let banners=document.querySelectorAll(".picture")[0];
     let now=0;
     let flag=true;
     let t=setInterval(move,2000);
    //向右移
     function move() {
         now++;
         if (now==images.length){
             now=0;
         }
         for (let i=0;i<images.length;i++){
             images[i].style.opacity=0;
             dots[i].classList.remove("dots");
         }
         flag=true;
         images[now].style.opacity=1;
         dots[now].classList.add("dots");
     }
    //向左移
     function movel() {
         now--;
         if (now==-1){
             now=images.length-1;
         }
         for (let i=0;i<images.length;i++){
             images[i].style.opacity=0;
             dots[i].classList.remove("dots");
         }
         flag=true;
         images[now].style.opacity=1;
         dots[now].classList.add("dots");
     }
    //单击轮播点
     for (let j=0;j<dots.length;j++){
         dots[j].onclick=function () {
             for (let i=0;i<dots.length;i++){
                 dots[i].classList.remove("dots");
                 images[i].style.opacity=0;
             }
             dots[j].classList.add("dots");
             images[j].style.opacity=1;
             now=j;
         }
     }
    //左按键
     leftbtn.onclick=function () {
         if (!flag){
             return;
         }
         flag=false;
         movel();
     }
    //右按键
     rightbtn.onclick=function () {
         if (!flag){
             return;
         }
         flag=false;
         move();
     }
     banners.onmouseover=function(){
         clearInterval(t);
     }
     banners.onmouseout =function(){
         t=setInterval(move,2000);
     }
     //轮播图效果结束
    //封装下方轮播效果函数
     function banner(imgs,dots,leftBtn,rightBtn,widths,active) {
         let now=0;
         let next=0;
         //设置默认值
         imgs[0].style.left=0;
         dots[0].classList.add(active);

         //定义开关:控制快速点击时图片快速轮播的现象
         //默认开关是打开的，可以点击左右箭头 flag=true
         let flag=true;
         function move() {
             next++;
             if(next==imgs.length){
                 next=0;
             }
             //确保下一张图永远在最右侧
             imgs[next].style.left=widths+"px";
             animate(imgs[now],{left:-widths});
             animate(imgs[next],{left:0},function(){
                 flag=true;

             });
             dots[now].classList.remove(active);
             dots[next].classList.add(active);
             now=next;

         }
         // 点击左箭头
         function moveL(){
             next--;
             if(next<0){
                 next=imgs.length-1;
             }
             imgs[next].style.left=-widths+"px";
             animate(imgs[now],{left:widths});
             animate(imgs[next],{left:0},function(){
                 flag=true;});
             dots[now].classList.remove(active);
             dots[next].classList.add(active);
             now=next;
         }
         leftBtn.onclick=function(){
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
         }
         rightBtn.onclick=function(){
             if(!flag){
                 return;
             }
             if (next==imgs.length-1) {
                 return;
             }
             flag=false;
             move();
         }
         //鼠标单击轮播点
         for(let i=0;i<dots.length;i++){
             dots[i].onclick=function(){
                 if (next==i){
                     return;
                 }
                 if (next>i){
                     imgs[i].style.left=`${-widths}px`;
                     animate(imgs[now],{left:widths});
                     animate(imgs[i],{left:0});
                     dots[now].classList.remove(active);
                     dots[i].classList.add(active);
                 }else  if (next<i){
                     imgs[i].style.left=`${widths}px`;
                     animate(imgs[now],{left:-widths});
                     animate(imgs[i],{left:0},);
                     dots[now].classList.remove(active);
                     dots[i].classList.add(active);
                 }
                 now=next=i;
             }
         }
     }
     //调用下方轮播函数
     let contacts=document.querySelectorAll(".main .container .bottom ul .first .contact_1");
     let dot=document.querySelectorAll(".main .container .bottom ul .first .dot .circle");
     let lBtn=document.querySelector(".main .container .bottom ul .first .left");
     let rBtn=document.querySelector(".main .container .bottom ul .first .right");
     let wids=parseInt(getComputedStyle(contacts[0],null).width);
     banner(contacts,dot,lBtn,rBtn,wids,"circles") ;
     let contacts1=document.querySelectorAll(".main .container .bottom ul .second .contact_1");
     let dot1=document.querySelectorAll(".main .container .bottom ul .second .dot .circle");
     let lBtn1=document.querySelector(".main .container .bottom ul .second .left");
     let rBtn1=document.querySelector(".main .container .bottom ul .second .right");
     let wids1=parseInt(getComputedStyle(contacts1[0],null).width);
     banner(contacts1,dot1,lBtn1,rBtn1,wids1,"circles") ;
     let contacts2=document.querySelectorAll(".main .container .bottom ul .third .contact_1");
     let dot2=document.querySelectorAll(".main .container .bottom ul .third .dot .circle");
     let lBtn2=document.querySelector(".main .container .bottom ul .third .left");
     let rBtn2=document.querySelector(".main .container .bottom ul .third .right");
     let wids2=parseInt(getComputedStyle(contacts2[0],null).width);
     banner(contacts2,dot2,lBtn2,rBtn2,wids2,"circles") ;
     let contacts3=document.querySelectorAll(".main .container .bottom ul .fourth .contact_1");
     let dot3=document.querySelectorAll(".main .container .bottom ul .fourth .dot .circle");
     let lBtn3=document.querySelector(".main .container .bottom ul .fourth .left");
     let rBtn3=document.querySelector(".main .container .bottom ul .fourth .right");
     let wids3=parseInt(getComputedStyle(contacts3[0],null).width);
     banner(contacts3,dot3,lBtn3,rBtn3,wids3,"circles") ;
     //下方轮播结束
    //小米闪购
     let btn=document.querySelectorAll(".buy .top .right ul li");
     let lists=document.querySelector(".buy .bottom ul");
     let widths=parseInt(getComputedStyle(lists,null).width)/2;
     let times=0;
     btn[0].onclick=function () {
         times++;
         if (times===2){
             times=1;
         }
         btn[0].classList.remove("active");
         btn[1].classList.add("active");
         lists.style.transform=`translate(${(-widths*times)}px)`;
     }
     btn[1].onclick=function () {
         times--;
         if (times===-1){
             times=0;
         }
         btn[1].classList.remove("active");
         btn[0].classList.add("active");
         lists.style.transform=`translate(${(-widths*times)}px)`;
     }
     //小米闪购结束
    //为你推荐
     let btn1=document.querySelectorAll(".recommend .container .top .right ul li");
     let lists1=document.querySelector(".recommend .container .bottom ul");
     let widths1=parseInt(getComputedStyle(lists1,null).width)/4;
     let times1=0;
     btn1[0].onclick=function () {
         times1++;
         if (times1==3) {
             btn1[0].classList.remove("active");
         }
         if (times1===4){
             times1=3;
             return;
         }
         btn1[1].classList.add("active");
         lists1.style.transform=`translate(${(-widths1*times1)}px)`;
     }
     btn1[1].onclick=function () {
         times1--;
         if (times1==0) {
             btn1[1].classList.remove("active");
         }
         if (times1===-1){
             times1=0;
             return;
         }
         btn1[0].classList.add("active");
         lists1.style.transform=`translate(${(-widths1*times1)}px)`;
     }
     // 为你推荐结束
    //购物车
    //  let shops=document.querySelector(".title .container .right .shop");
    //  let nones=document.querySelector(".title .container .right .shop .none");
    //  shops.onmouseenter=function () {
    //      nones.style.height="100px";
    //      shops.style.background="white";
    //      shops.style.color="#ff6700";
    //  }
    //  shops.onmouseleave=function () {
    //      nones.style.height="0";
    //      shops.style.background="#424242";
    //      shops.style.color="#B0B0B0";
    //  }
     // 购物车下拉结束
     //轮播图选项卡
     // 1.获取元素
     let lis = document.querySelectorAll(".banner .container .table .list .list_1");
     let son = document.querySelectorAll(".banner .container .table .list .list_1 .card");
     console.log("lis");
     // 2.遍历每个li
     for (let i = 0; i < lis.length; i++) {
         // 3.当鼠标移入每个li时的操作
         lis[i].onmouseover = function () {
             // 4.其余子元素消失
             for (let j = 0; j < son.length; j++) {
                 son[j].style.display = "none";
             }
             // 5.当前子元素出现
             son[i].style.display="flex";
         }
         for (let k = 0; k < son.length; k++) {
             lis[k].onmouseleave = function () {
                 son[k].style.display = "none";
             }
         }
     }
     //轮播图选项卡结束
     //返回顶部
     let back=document.querySelector(".goback");
     back.onclick=function () {
         document.body.scrollTop=0;
         document.documentElement.scrollTop=0;
     }
     window.onscroll=function () {
         let heights=document.body.scrollTop||document.documentElement.scrollTop;
         if (heights>1500) {
             back.style.display="block";
         }else if(heights<1500){
             back.style.display="none";
         }

     }
     //返回顶部结束
     //家电选项卡
     // 1.获取元素
     let as = document.querySelectorAll(".elec .container .top .right a");
     let child = document.querySelectorAll(".elec .container .bottom .right");
     child[0].style.display="flex";
     as[0].className="action";
     // 2.遍历每个li
     for (let i = 0; i < as.length; i++) {
         // 3.当鼠标移入每个li时的操作
         as[i].onmouseover = function () {
             // 4.其余子元素消失
             for (let j = 0; j < child.length; j++) {
                 child[j].style.display = "none";
                 as[j].classList.remove("action");
             }
             // 5.当前子元素出现
             child[i].style.display="flex";
             as[i].className="action";
         }
     }
     //家电选项卡结束
     //右侧固定栏
     let message=document.querySelectorAll(".sort ul li .message");
     let is=document.querySelectorAll(".sort ul li");
     for (let i=0;i<is.length;i++){
         is[i].onmouseenter=function () {
            message[i].style.display="block";
         }
         is[i].onmouseleave=function () {
             message[i].style.display="none";
         }
     }

     //右侧固定栏结束
 }

