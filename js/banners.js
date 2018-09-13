// imgs:图片的集合/盒子的集合
// dots：轮播点的集合
// leftBtn：左按键
// rightBtn：右按键
// widths：轮播图的宽度
// active：选中轮播点的样式
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