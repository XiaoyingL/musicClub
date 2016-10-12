/**
 * Created by lenovo on 2016/5/14.
 */
//轮播图开始
$(function(){
    //上面的轮播图
    //找人
    var box1 = document.getElementById("box1");
    var screen1 = box1.children[0];
    var ul = screen1.children[0];
    var ulLis = ul.children;
    var ol = screen1.children[1];

    var arr1 = document.getElementById("arr1");
    var left1 = document.getElementById("left1");
    var right1 = document.getElementById("right1");
    var timer = null;

//alert(screen.offsetWidth);

    var imgWidth = screen1.offsetWidth;//图片宽度

//根据图片数量动态生成按钮 动态生成最后一张图片
    for (var i = 0; i < ulLis.length; i++) {
        //动态生成按钮
        var li = document.createElement("li");
        li.innerHTML = i + 1;//设置li内部的编号
        ol.appendChild(li);
    }
    var olLis = ol.children;
    olLis[0].className = "current";
//动态生成最后一张图片
    var firstImg = ulLis[0].cloneNode(true);//克隆节点 而且是深度克隆
    ul.appendChild(firstImg);
//2.鼠标经过按钮 按钮排他 并且将ul移动到指定位置
    for (var j = 0; j < olLis.length; j++) {

        olLis[j].index = j;
        //鼠标经过 按钮排他
        olLis[j].onmouseover = function () {
            //干掉所有人
            for (var k = 0; k < olLis.length; k++) {
                olLis[k].className = "";
            }
            //留下我自己
            this.className = "current";

            //根据鼠标经过的按钮的索引号去移动ul

            //目标 和当前按钮的索引有关 和图片宽度有关 而且是负数
            var target = -this.index * imgWidth;
            animate(ul, target);

            //pic = this.index;//把应该播放的图片的索引变成当前经过的按钮的索引
            //square = this.index;//把下一个应该亮起的按钮的索引也变成当前经过的按钮的索引
            pic = square = this.index;//这样就把索引统一了
        }
    }


    var pic = 0;//pic表示当前应该显示的图片的索引

//点击right 移动ul到指定位置
    right1.onclick = function () {
        playNext();
    }
    left1.onclick = function () {
        //判断 如果是最后一张就该跳了
        if (pic == 0) {
            ul.style.left = -(ulLis.length - 1) * imgWidth + "px";//一定要注意这里是字符串
            //图片的位置是 最后一张图片之前的所有图片的宽度 而且是负数
            pic = ulLis.length - 1;//变成最后一张图片的索引
        }
        pic--;
        var target = -pic * imgWidth;
        animate(ul, target);


        //按钮也要跟着走
        //判断 如果大于第一个按钮的索引才能-- 否则等于最后按钮的索引
        if (square > 0) {
            square--;
        } else {
            square = olLis.length - 1;
        }
        //干掉所有人
        for (var i = 0; i < olLis.length; i++) {
            olLis[i].className = "";
        }
        //留下当前的
        olLis[square].className = "current";
    }

//添加自动滚动
    timer = setInterval(playNext, 5000)//每隔一秒钟播放一张


    var square = 0;//表示当前应该亮起的按钮
    function playNext() {
        //判断 如果是最后一张就该跳了
        if (pic == ulLis.length - 1) {
            ul.style.left = "0px";
            pic = 0;
        }
        pic++;
        var target = -pic * imgWidth;
        animate(ul, target);

        //按钮也要跟着走
        //判断 如果小于最后一个按钮的索引才能++ 否则等于0
        if (square < olLis.length - 1) {
            square++;
        } else {
            square = 0;
        }
        //干掉所有人
        for (var i = 0; i < olLis.length; i++) {
            olLis[i].className = "";
        }
        //留下当前的
        olLis[square].className = "current";
    }

//最后的 功能完善
//0.1鼠标经过盒子 清理定时器
//点击按钮移动ul
//鼠标经过box显示arr
    box1.onmouseover = function () {
        arr1.style.display = "block";
        clearInterval(timer);
    }
    box1.onmouseout = function () {
        arr1.style.display = "none";
        timer = setInterval(playNext, 3000);
    }

    function animate(obj, target) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var leader = obj.offsetLeft;
            /*//如果offsetLeft<target 说明 盒子在目标左侧 应该往右走 step是正数
             if (obj.offsetLeft < target) {
             var step = 10;
             }
             //如果offsetLeft>target 说明 盒子在目标右侧 应该往左走 step是负数
             if (obj.offsetLeft > target) {
             var step = -10;
             }*/
            var step = 10;
            step = obj.offsetLeft < target ? step : -step;
            leader = leader + step;
            if (Math.abs(obj.offsetLeft - target) > Math.abs(step)) {
                obj.style.left = leader + "px";
            } else {
                obj.style.left = target + "px";
                clearInterval(obj.timer);
            }
        }, 15)
    }

})
//轮播图结束
//下面的图片特效突出展示开始
$(function(){
    $(".screen li").mouseenter(function(){
        $(this).css("opacity",1).siblings().css("opacity",0.5);
    })
    $(".screen").mouseleave(function(){
        $(this).find("li").css("opacity",1);
    })
})
//下面的图片特效结束
//更多
$(function(){
    $(".more").mouseenter(function(){
        $(this).css({
            "backgroundColor":"#29C4CA",
            "color":"white"
        });

    })
    $(".more").mouseleave(function(){
        $(this).css({
            "backgroundColor":"white",
            "color":"#29C4CA"
        });
    })
    //图片下面标题特效
    //鼠标放上去的时候
    $(".lone-line h4").mouseenter(function(){
        $(".lone-line h4 a").css({
            "color":"#87B6DD",
        })
    })
    //鼠标离开的时候恢复默认的字体
    $(".lone-line h4").mouseleave(function(){
        $(".lone-line h4 a").css({
            "color": "#000",
        })
    })
    //左侧导航高亮显示开始
    $(".popular li").mouseenter(function(){
        $(this).css("backgroundColor","#DDB8ED");
    })

    $(".popular li").mouseleave(function(){
        $(this).css("backgroundColor","white");
    })


    //左侧导航高亮显示结束

    //右侧导航部分开始
    //鼠标放上去内容显示
    $(".cate-cate").mouseenter(function(){

        $(".cate-cate p").css({
            "display":"block",
            "color":"#5DDE6F"
        });
    })
    //鼠标离开内容隐藏
    $(".cate-cate").mouseleave(function(){
        $(".cate-cate p").css("display","none");
    })

})
