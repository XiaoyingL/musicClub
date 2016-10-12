/**
 * Created by mx on 2016/5/15.
 */


$(function () {
    $(function () {
        //头部nav特效
        var bgColor;
        $("#headerNav").find("a").mouseenter(function () {
            bgColor = $(this).css("backgroundColor");
            $(this).css("backgroundColor", "#29C4CA");
        })
        $("#headerNav").find("a").mouseleave(function () {
            $(this).css("backgroundColor", bgColor);
        })

    });

    //welcome右侧高亮js
    $("#wel").find("div").mouseenter(function () {
        $(this).css("opacity", 1).siblings("div").css("opacity", 0.4);

    });
    $("#wel").mouseleave(function () {
        $(this).find("div").css("opacity", 1);
    });

    //登陆模态框

    $("#wel").find("div").click(function () {
        $("#show").show();
        $("#mask").show();
        document.body.style.overflow="hidden";
    })
    $("#mask").click(function () {
        $("#show").hide();
        $("#mask").hide();
        document.body.style.overflow="visible";
    })




    //轮播特效
//    setInterval(function () {
//
//        $("#lb div").eq(0).animate({'left':-1250},1000, function () {
//            $("#lb").append($("#lb div").eq(0));
//            $("#lb div").eq(2).offset({left:680});
//        });
//    },1500)
//
//
//



$(function(){

    $("#lb div").each(function(index,elem){
        $("#lb div").eq(index).css('zIndex',100000-index);
    })
    setInterval(function(){
        $("#lb div").eq(0).animate({'left':-1250},1500,function(){
            $("#lb").append($("#lb div").eq(0));
            var i = $("#lb div").eq(2).css('zIndex');
            var k = i-3;
            $("#lb div").eq(2).offset({'left':680,"top":570}).css({'zIndex':k});
        })

    },2000)
});

})


