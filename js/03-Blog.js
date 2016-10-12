/**
 * Created by tongtong on 2016/5/15.
 */
//要做事先找人

    window.onload=function(){
        var box1 = document.getElementById("box1");
        var screen = box1.children[0];
        var ul = screen.children[0];
        var ol = screen.children[1];
        var ulLis = ul.children;//所有的图片
        var imgWidth = screen.offsetWidth;
        var arr1 = document.getElementById("arr1");
        var arrRight = document.getElementById("right1");
        var arrLeft = document.getElementById("left1");
        var timer = null;
//alert(imgWidth);

//1.动态生成结构
//1.1根据图片的数量动态生成按钮
        for (var i = 0; i < ulLis.length; i++) {
            //动态生成按钮
            var li = document.createElement("li");
            //给li添加序号
            //索引号是从0开始的
            //序号=索引号+1
            li.innerHTML = i + 1;
            //追加到ol下面
            ol.appendChild(li);
        }
        var olLis = ol.children;//必须生成之后才能获取到
        olLis[0].className = "current";

//1.2把第一张图片追加到最后
//复制第一张图片
        var firstImg = ulLis[0].cloneNode(true);
//追加到ul后面
        ul.appendChild(firstImg);

//2.鼠标经过按钮
//循环遍历 给每一个按钮绑定鼠标经过事件
        for (var j = 0; j < olLis.length; j++) {
            olLis[j].index = j;
            olLis[j].onmouseover = function () {
                //按钮排他
                //干掉所有人
                for (var k = 0; k < olLis.length; k++) {
                    olLis[k].className = "";
                }
                //留下我自己
                this.className = "current";
                //根据索引号 通过动画函数移动ul
                //图片移动的位置 和 当前按钮索引号 和 图片宽度有关 而且是负数
                var target = -this.index * imgWidth;
                animate(ul, target);

                //将应该显示的图片的索引号 和 鼠标经过的按钮的索引号 进行统一
                pic = this.index;
                //将应该亮起的按钮的索引号 和 鼠标经过的按钮的索引号 进行统一
                square = this.index;
            }
        }

//3.鼠标点击箭头
//鼠标经过box显示arr 清理定时器停止自动播放
        box1.onmouseover = function () {
            arr1.style.display = "block";
            clearInterval(timer);
        }
//鼠标离开box隐藏arr 设置定时器继续自动播放
        box1.onmouseout = function () {
            arr1.style.display = "none";
            timer = setInterval(playNext, 1000);
        }

//点击 右箭头 显示下一张
        var pic = 0;//pic表示当前图片的索引
        var square = 0;//square表示当前按钮的索引
        arrRight.onclick = function () {
            playNext();
        }
        arrLeft.onclick = function () {
            //判断当前图片的索引pic是否等于最后一张图片的索引ulLis.length-1
            if (pic == 0) {
                pic = ulLis.length - 1;
                ul.style.left = -(ulLis.length - 1) * imgWidth + "px";
            }
            pic--;
            //通过动画函数对ul进行移动
            //target 和 图片索引 和 图片宽度 有关 而且是负数
            var target = -pic * imgWidth;
            animate(ul, target);

            //按钮也应该自动播放
            //如果当前按钮的索引号square大于第一个按钮的索引号0 就--
            if (square > 0) {
                square--;
            } else {
                //如果square等于零 说明到第一个了 这时就应该把他变成最后一个
                square = olLis.length - 1;
            }
            //干掉所有人
            for (var i = 0; i < olLis.length; i++) {
                olLis[i].className = "";
            }
            //留下我自己
            olLis[square].className = "current";
        }

//4.添加自动滚动
        timer = setInterval(playNext, 5000)

        function playNext() {
            //先判断当前图片的索引pic是否等于最后一张图片的索引ulLis.length-1
            //如果相等马上跳过去然后在执行动画效果 从而实现无缝滚动
            //并且把索引号也归零
            if (pic == ulLis.length - 1) {
                ul.style.left = 0;
                pic = 0;
            }
            pic++;//pic++相当于 pic=pic+1;
            //通过动画函数对ul进行移动
            //target 和 图片索引 和 图片宽度 有关 而且是负数
            var target = -pic * imgWidth;
            animate(ul, target);

            //按钮也应该自动播放
            //如果当前按钮的索引号square小于最后一个按钮的索引号olLis.length - 1 就++
            if (square < olLis.length - 1) {
                square++;
            } else {
                square = 0;
            }

            //干掉所有人
            for (var i = 0; i < olLis.length; i++) {
                olLis[i].className = "";
            }
            //留下我自己
            olLis[square].className = "current";
        }

//5.完善鼠标经过


        function animate(obj, target) {
            clearInterval(obj.timer);
            obj.timer = setInterval(function () {
                var step = 20;

                var step = obj.offsetLeft < target ? step : -step;


                if (Math.abs(obj.offsetLeft - target) > Math.abs(step)) {
                    obj.style.left = obj.offsetLeft + step + "px";
                } else {
                    //再迈一步就超过目标了
                    obj.style.left = target + "px";//手动把对象放置到目标上
                    clearInterval(obj.timer);//清理定时器
                }
            }, 15)
        }


    }
