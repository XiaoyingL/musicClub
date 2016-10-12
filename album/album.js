/**
 * Created by yongaiyan on 2016/5/14.
 */
$(function () {
    //数标经过显示div
    $(".main>.content>ul>li").mouseenter(function () {
        $(this).find("div").stop(false, true).slideDown(200).css({
            "left": "8px",
            "top": "8px"
        });

    });
    //鼠标离开隐藏div
    $(".main>.content>ul>li").mouseleave(function () {
        $(this).find("div").stop(false, true).slideUp(200);
    });
    //点击a标签显示切换图片
    $(".main>.content").find("li").on("click", function () {
        $("#wrap").fadeIn(1000);
        var index = $(this).index();
        $("#show>ul>li").eq(index).show();
        if (index === 0) {
            $("#leftBtn").hide();
        } else {
            $("#leftBtn").show();
        }
        if (index === 8) {
            $("#rightBtn").hide();
        } else {
            $("#rightBtn").show();
        }
        //给左箭头注册事件
        $("#leftBtn").click(function () {
            //if (index === 0) {
            //    $("#leftBtn").hide();
            //} else {
            //    $("#leftBtn").show();
            //}
            if (index >=1) {
                $("#show>ul>li").eq(index).fadeOut(2000);
                $("#show>ul>li").eq(index - 1).stop(false, true).fadeIn(2000);
                index--;
            }
        });

        //点击右箭头切换下一张
        $("#rightBtn").click(function () {
            $("#show>ul>li").eq(index + 1).stop(false, true).fadeIn().siblings().fadeOut(1500);
            index++;
            //if (index === 8) {
            //    $(this).fadeOut(1000);
            //} else {
            //    $(this).show();
            //}
        });
        //给关闭按钮注册事件
        $("#closeBtn").click(function () {
            $("#wrap").fadeOut(600);
        });
        //点击文档关闭
        //$("#mask").click(function () {
        //    $("#wrap").fadeOut(600);
        //
        //    //event.stopPropagation();
        //
        //});

        return false;
    })
    ;

});