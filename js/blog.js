/**
 * Created by lenovo on 2016/5/14.
 */
//�ֲ�ͼ��ʼ
$(function(){
    //������ֲ�ͼ
    //����
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

    var imgWidth = screen1.offsetWidth;//ͼƬ���

//����ͼƬ������̬���ɰ�ť ��̬�������һ��ͼƬ
    for (var i = 0; i < ulLis.length; i++) {
        //��̬���ɰ�ť
        var li = document.createElement("li");
        li.innerHTML = i + 1;//����li�ڲ��ı��
        ol.appendChild(li);
    }
    var olLis = ol.children;
    olLis[0].className = "current";
//��̬�������һ��ͼƬ
    var firstImg = ulLis[0].cloneNode(true);//��¡�ڵ� ��������ȿ�¡
    ul.appendChild(firstImg);
//2.��꾭����ť ��ť���� ���ҽ�ul�ƶ���ָ��λ��
    for (var j = 0; j < olLis.length; j++) {

        olLis[j].index = j;
        //��꾭�� ��ť����
        olLis[j].onmouseover = function () {
            //�ɵ�������
            for (var k = 0; k < olLis.length; k++) {
                olLis[k].className = "";
            }
            //�������Լ�
            this.className = "current";

            //������꾭���İ�ť��������ȥ�ƶ�ul

            //Ŀ�� �͵�ǰ��ť�������й� ��ͼƬ����й� �����Ǹ���
            var target = -this.index * imgWidth;
            animate(ul, target);

            //pic = this.index;//��Ӧ�ò��ŵ�ͼƬ��������ɵ�ǰ�����İ�ť������
            //square = this.index;//����һ��Ӧ������İ�ť������Ҳ��ɵ�ǰ�����İ�ť������
            pic = square = this.index;//�����Ͱ�����ͳһ��
        }
    }


    var pic = 0;//pic��ʾ��ǰӦ����ʾ��ͼƬ������

//���right �ƶ�ul��ָ��λ��
    right1.onclick = function () {
        playNext();
    }
    left1.onclick = function () {
        //�ж� ��������һ�ž͸�����
        if (pic == 0) {
            ul.style.left = -(ulLis.length - 1) * imgWidth + "px";//һ��Ҫע���������ַ���
            //ͼƬ��λ���� ���һ��ͼƬ֮ǰ������ͼƬ�Ŀ�� �����Ǹ���
            pic = ulLis.length - 1;//������һ��ͼƬ������
        }
        pic--;
        var target = -pic * imgWidth;
        animate(ul, target);


        //��ťҲҪ������
        //�ж� ������ڵ�һ����ť����������-- ����������ť������
        if (square > 0) {
            square--;
        } else {
            square = olLis.length - 1;
        }
        //�ɵ�������
        for (var i = 0; i < olLis.length; i++) {
            olLis[i].className = "";
        }
        //���µ�ǰ��
        olLis[square].className = "current";
    }

//����Զ�����
    timer = setInterval(playNext, 5000)//ÿ��һ���Ӳ���һ��


    var square = 0;//��ʾ��ǰӦ������İ�ť
    function playNext() {
        //�ж� ��������һ�ž͸�����
        if (pic == ulLis.length - 1) {
            ul.style.left = "0px";
            pic = 0;
        }
        pic++;
        var target = -pic * imgWidth;
        animate(ul, target);

        //��ťҲҪ������
        //�ж� ���С�����һ����ť����������++ �������0
        if (square < olLis.length - 1) {
            square++;
        } else {
            square = 0;
        }
        //�ɵ�������
        for (var i = 0; i < olLis.length; i++) {
            olLis[i].className = "";
        }
        //���µ�ǰ��
        olLis[square].className = "current";
    }

//���� ��������
//0.1��꾭������ ����ʱ��
//�����ť�ƶ�ul
//��꾭��box��ʾarr
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
            /*//���offsetLeft<target ˵�� ������Ŀ����� Ӧ�������� step������
             if (obj.offsetLeft < target) {
             var step = 10;
             }
             //���offsetLeft>target ˵�� ������Ŀ���Ҳ� Ӧ�������� step�Ǹ���
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
//�ֲ�ͼ����
//�����ͼƬ��Чͻ��չʾ��ʼ
$(function(){
    $(".screen li").mouseenter(function(){
        $(this).css("opacity",1).siblings().css("opacity",0.5);
    })
    $(".screen").mouseleave(function(){
        $(this).find("li").css("opacity",1);
    })
})
//�����ͼƬ��Ч����
//����
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
    //ͼƬ���������Ч
    //������ȥ��ʱ��
    $(".lone-line h4").mouseenter(function(){
        $(".lone-line h4 a").css({
            "color":"#87B6DD",
        })
    })
    //����뿪��ʱ��ָ�Ĭ�ϵ�����
    $(".lone-line h4").mouseleave(function(){
        $(".lone-line h4 a").css({
            "color": "#000",
        })
    })
    //��ർ��������ʾ��ʼ
    $(".popular li").mouseenter(function(){
        $(this).css("backgroundColor","#DDB8ED");
    })

    $(".popular li").mouseleave(function(){
        $(this).css("backgroundColor","white");
    })


    //��ർ��������ʾ����

    //�Ҳർ�����ֿ�ʼ
    //������ȥ������ʾ
    $(".cate-cate").mouseenter(function(){

        $(".cate-cate p").css({
            "display":"block",
            "color":"#5DDE6F"
        });
    })
    //����뿪��������
    $(".cate-cate").mouseleave(function(){
        $(".cate-cate p").css("display","none");
    })

})
