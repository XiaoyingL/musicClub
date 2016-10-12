/**
 * Created by Administrator on 2016/5/15 0015.
 */
$(function(){
    $("#colorchanger li").mouseenter(function(){
        $(this).css("opacity",1);
    });
    $("#colorchanger li").mouseout(function(){
        $(this).css("opacity",0.5);
        $(".content").css("backgroundColor","");
    });
    $("#colorchanger .cBlue").mouseenter(function(){
        $(".content").css("color","blue");
        $(".content").css("backgroundColor","#4dd9c0");
    });
    $("#colorchanger .cRed").mouseenter(function(){
        $(".content").css("color","red");
        $(".content").css("backgroundColor","#f593aa");
    });
    $("#colorchanger .cGreen").mouseenter(function(){
        $(".content").css("color","green");
        $(".content").css("backgroundColor","#a9f1bc");
    });
    $("#colorchanger .cMango").mouseenter(function(){
        $(".content").css("color","#fff200");
        $(".content").css("backgroundColor","#e4f79a");
    });
    $("#colorchanger .cPurple").mouseenter(function(){
        $(".content").css("color","Purple");
        $(".content").css("backgroundColor","#f7bbe8");
    });
    $("#colorchanger .cTeal").mouseenter(function(){
        $(".content").css("color","Teal");
        $(".content").css("backgroundColor","#a8ecce");
    });
    $("#colorchanger .cLime").mouseenter(function(){
        $(".content").css("color","Lime");
        $(".content").css("backgroundColor","#b4f3ad");
    });
    $("#colorchanger .cBrown").mouseenter(function(){
        $(".content").css("color","Brown");
        $(".content").css("backgroundColor","#d6dc7e");
    });
    $("#colorchanger .cPink").mouseenter(function(){
        $(".content").css("color","Pink");
        $(".content").css("backgroundColor","#fceded");
    });
    $("#colorchanger .cMagenta").mouseenter(function(){
        $(".content").css("color","Magenta");
        $(".content").css("backgroundColor","#f7c1eb");
    });



    $("#colorchanger1 li").mouseenter(function(){
        $(this).css("opacity",1);
    });
    $("#colorchanger1 li").mouseout(function(){
        $(this).css("opacity",0.5);
    });
    $("#colorchanger1 .cBlue").mouseenter(function(){
        $(".p1").css("color","blue");

    });
    $("#colorchanger1 .cRed").mouseenter(function(){
        $(".p2").css("color","red");

    });
    $("#colorchanger1 .cGreen").mouseenter(function(){
        $(".p1").css("color","green");

    });
    $("#colorchanger1 .cMango").mouseenter(function(){
        $(".p2").css("color","#fff200");

    });
    $("#colorchanger1 .cPurple").mouseenter(function(){
        $(".p1").css("color","Purple");

    });
    $("#colorchanger1 .cTeal").mouseenter(function(){
        $(".p2").css("color","Teal");

    });
    $("#colorchanger1 .cLime").mouseenter(function(){
        $(".p1").css("color","Lime");

    });
    $("#colorchanger1 .cBrown").mouseenter(function(){
        $(".p2").css("color","Brown");

    });
    $("#colorchanger1 .cPink").mouseenter(function(){
        $(".p1").css("color","Pink");

    });
    $("#colorchanger1 .cMagenta").mouseenter(function(){
        $(".p2").css("color","Magenta");

    });
});