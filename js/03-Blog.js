/**
 * Created by tongtong on 2016/5/15.
 */
//Ҫ����������

    window.onload=function(){
        var box1 = document.getElementById("box1");
        var screen = box1.children[0];
        var ul = screen.children[0];
        var ol = screen.children[1];
        var ulLis = ul.children;//���е�ͼƬ
        var imgWidth = screen.offsetWidth;
        var arr1 = document.getElementById("arr1");
        var arrRight = document.getElementById("right1");
        var arrLeft = document.getElementById("left1");
        var timer = null;
//alert(imgWidth);

//1.��̬���ɽṹ
//1.1����ͼƬ��������̬���ɰ�ť
        for (var i = 0; i < ulLis.length; i++) {
            //��̬���ɰ�ť
            var li = document.createElement("li");
            //��li������
            //�������Ǵ�0��ʼ��
            //���=������+1
            li.innerHTML = i + 1;
            //׷�ӵ�ol����
            ol.appendChild(li);
        }
        var olLis = ol.children;//��������֮����ܻ�ȡ��
        olLis[0].className = "current";

//1.2�ѵ�һ��ͼƬ׷�ӵ����
//���Ƶ�һ��ͼƬ
        var firstImg = ulLis[0].cloneNode(true);
//׷�ӵ�ul����
        ul.appendChild(firstImg);

//2.��꾭����ť
//ѭ������ ��ÿһ����ť����꾭���¼�
        for (var j = 0; j < olLis.length; j++) {
            olLis[j].index = j;
            olLis[j].onmouseover = function () {
                //��ť����
                //�ɵ�������
                for (var k = 0; k < olLis.length; k++) {
                    olLis[k].className = "";
                }
                //�������Լ�
                this.className = "current";
                //���������� ͨ�����������ƶ�ul
                //ͼƬ�ƶ���λ�� �� ��ǰ��ť������ �� ͼƬ����й� �����Ǹ���
                var target = -this.index * imgWidth;
                animate(ul, target);

                //��Ӧ����ʾ��ͼƬ�������� �� ��꾭���İ�ť�������� ����ͳһ
                pic = this.index;
                //��Ӧ������İ�ť�������� �� ��꾭���İ�ť�������� ����ͳһ
                square = this.index;
            }
        }

//3.�������ͷ
//��꾭��box��ʾarr ����ʱ��ֹͣ�Զ�����
        box1.onmouseover = function () {
            arr1.style.display = "block";
            clearInterval(timer);
        }
//����뿪box����arr ���ö�ʱ�������Զ�����
        box1.onmouseout = function () {
            arr1.style.display = "none";
            timer = setInterval(playNext, 1000);
        }

//��� �Ҽ�ͷ ��ʾ��һ��
        var pic = 0;//pic��ʾ��ǰͼƬ������
        var square = 0;//square��ʾ��ǰ��ť������
        arrRight.onclick = function () {
            playNext();
        }
        arrLeft.onclick = function () {
            //�жϵ�ǰͼƬ������pic�Ƿ�������һ��ͼƬ������ulLis.length-1
            if (pic == 0) {
                pic = ulLis.length - 1;
                ul.style.left = -(ulLis.length - 1) * imgWidth + "px";
            }
            pic--;
            //ͨ������������ul�����ƶ�
            //target �� ͼƬ���� �� ͼƬ��� �й� �����Ǹ���
            var target = -pic * imgWidth;
            animate(ul, target);

            //��ťҲӦ���Զ�����
            //�����ǰ��ť��������square���ڵ�һ����ť��������0 ��--
            if (square > 0) {
                square--;
            } else {
                //���square������ ˵������һ���� ��ʱ��Ӧ�ð���������һ��
                square = olLis.length - 1;
            }
            //�ɵ�������
            for (var i = 0; i < olLis.length; i++) {
                olLis[i].className = "";
            }
            //�������Լ�
            olLis[square].className = "current";
        }

//4.����Զ�����
        timer = setInterval(playNext, 5000)

        function playNext() {
            //���жϵ�ǰͼƬ������pic�Ƿ�������һ��ͼƬ������ulLis.length-1
            //��������������ȥȻ����ִ�ж���Ч�� �Ӷ�ʵ���޷����
            //���Ұ�������Ҳ����
            if (pic == ulLis.length - 1) {
                ul.style.left = 0;
                pic = 0;
            }
            pic++;//pic++�൱�� pic=pic+1;
            //ͨ������������ul�����ƶ�
            //target �� ͼƬ���� �� ͼƬ��� �й� �����Ǹ���
            var target = -pic * imgWidth;
            animate(ul, target);

            //��ťҲӦ���Զ�����
            //�����ǰ��ť��������squareС�����һ����ť��������olLis.length - 1 ��++
            if (square < olLis.length - 1) {
                square++;
            } else {
                square = 0;
            }

            //�ɵ�������
            for (var i = 0; i < olLis.length; i++) {
                olLis[i].className = "";
            }
            //�������Լ�
            olLis[square].className = "current";
        }

//5.������꾭��


        function animate(obj, target) {
            clearInterval(obj.timer);
            obj.timer = setInterval(function () {
                var step = 20;

                var step = obj.offsetLeft < target ? step : -step;


                if (Math.abs(obj.offsetLeft - target) > Math.abs(step)) {
                    obj.style.left = obj.offsetLeft + step + "px";
                } else {
                    //����һ���ͳ���Ŀ����
                    obj.style.left = target + "px";//�ֶ��Ѷ�����õ�Ŀ����
                    clearInterval(obj.timer);//����ʱ��
                }
            }, 15)
        }


    }
