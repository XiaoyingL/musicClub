window.onload=function(){
    var wrap=document.getElementById("wrap");
    var slide=document.getElementById("slide");
    var ull=slide.children[0];
    var uls=ull.children;
    var arrow=document.getElementById("arrow");
    var arrRight=document.getElementById("arrRight");
    var arrLeft=document.getElementById("arrLeft");
    //4.设置节流阀
    var timer=null;
    var flag = true;

    var config = [
        {
            "width": 400,
            "top": 20,
            "left": 50,
            "opacity": 0.2,
            "zIndex": 2
        },//0
        {
            "width": 600,
            "top": 70,
            "left": 0,
            "opacity": 0.8,
            "zIndex": 3
        },//1
        {
            "width": 700,
            "top": 100,
            "left": 200,
            "opacity": 1,
            "zIndex": 4
        },//2
        {
            "width": 600,
            "top": 70,
            "left": 600,
            "opacity": 0.8,
            "zIndex": 3
        },//3
        {
            "width": 400,
            "top": 20,
            "left": 750,
            "opacity": 0.2,
            "zIndex": 2
        }//4
    ];
    timer= setInterval(function(){
        config.push(config.shift());
        assign()
    },1500)

    //鼠标放在盒子上显示arrow
    wrap.onmouseover=function(){
        clearInterval(timer);
        animate(arrow,{"opacity":1})

    };
    wrap.onmouseout=function(){

        animate(arrow,{"opacity":0})  ;
        timer= setInterval(function(){
            config.push(config.shift());
            assign()
        },1500)

    };

    assign()
    function assign(){
        //让每个动画函数 渐渐的到指定位子
        for (var i=0;i<uls.length;i++){
            animate(uls[i],config[i],function () {
                flag = true;
            });
            flag=false;
        }
    }
    var flag=true;
    //点击右键图片滚动
    arrRight.onclick=function(){
        if(flag){
            //删除第一个追加到最后
            flag=false;
            config.push(config.shift());
            assign();
        }
    }
    arrLeft.onclick = function () {
        if (flag) {
            flag = false;
            //点击做箭头 删除最后一个 追加到开始
            config.unshift(config.pop());
            assign();
        }
    }

}

//缓动框架
function animate(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            //json 属性名:属性值 k:json[k]
            if (k == "opacity") {
                var leader = parseInt(getStyle(obj, k) * 100);
                var target = json[k] * 100;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader / 100;
            } else if (k == "zIndex") {
                obj.style[k] = json[k];
            } else {
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
            }

            if (leader != target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 15)
}

function getStyle(obj, attr) {
    if (obj && obj.currentStyle) {
        return obj.currentStyle[attr];//IE678
    } else {
        return window.getComputedStyle(obj, null)[attr];
    }
}
        //var pic=-350
$(function(){
   //$(".star li ").animate({
   //    "left":pic,
   //},500)
})
