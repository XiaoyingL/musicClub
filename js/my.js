/**
 * Created by jf on 2016/5/6.
 */
window.onload = function () {
    //alert("文件引用成功了");

    //找人
    var wrap = document.getElementById("wrap");
    var arrow = document.getElementById("arrow");
    var arrRight = document.getElementById("arrRight");
    var arrLeft = document.getElementById("arrLeft");
    var slide = document.getElementById("slide");
    var ul = slide.children[0];
    var lis = ul.children;


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
            "width": 800,
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
    ];//其实就是一个配置单 规定了每张图片的大小位置层级透明度

    //鼠标经过盒子显示 渐渐地 箭头
    wrap.onmouseover = function () {
        animate(arrow, {"opacity": 1});
    }
    wrap.onmouseout = function () {
        animate(arrow, {"opacity": 0});
    }

    assign();
    function assign() {
        //通过动画函数 让每一个li 渐渐地跑到指定位置
        for (var i = 0; i < lis.length; i++) {
            //让每一个里 渐渐地 到配置文件里指定的位置
            animate(lis[i], config[i], function () {
                flag = true;
            });
        }
    }

    //节流阀
    var flag = true;//可以点击

    //点击右箭头 操作配置单 删除第一个追加到最后
    arrRight.onclick = function () {
        //alert("arrRight");
        if (flag) {//如果是true就执行
            flag = false;
            config.push(config.shift());//操作配置单
            assign();
        }
    }
    //点击左箭头 操作配置单 删除最后的追加的开头
    arrLeft.onclick = function () {
        config.unshift(config.pop());
        assign();
    }
//colorchanger开始


//colorchanger结束


}
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
