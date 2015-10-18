$(document).ready(function(){

    // 回到顶部
    $(window).scroll(function(){
        $(window).scrollTop()>100? $("#returnTop").css("bottom","60px"):$("#returnTop").css("bottom","-200px");
    });
    $("#returnTop").bind("click",function(){
        $("article").animate({scrollTop: 0},500),
        $("html,body").animate({scrollTop: 0},500)
    });

    //菜单点击
    $(".cates").hide();
    $(".category-list li").bind("click",function(){
        var cateName = $(this).attr("data-cate");
        $(".cate-posts > ul[data-cate != "+cateName+"]").hide(280);
        $(".cate-posts > ul[data-cate = "+cateName+"]").show(400);
    });

    // 信息切换
    $("#list_info").bind("click",function(){
        $("#list_info").addClass("active");
        $("#list_contact,#list_about").removeClass("active");

        $(".info_me").addClass("info_show");
        $(".contact_me").removeClass("contact_show");
        $(".about_here").removeClass("about_show");
    });

    $("#list_contact").bind("click",function(){
        $("#list_contact").addClass("active");
        $("#list_info,#list_about").removeClass("active");

        $(".contact_me").addClass("contact_show");
        $(".info_me").removeClass("info_show");
        $(".about_here").removeClass("about_show");
    });

    $("#list_about").bind("click",function(){
        $("#list_about").addClass("active");
        $("#list_info,#list_contact").removeClass("active");

        $(".about_here").addClass("about_show");
        $(".contact_me").removeClass("contact_show");
        $(".info_me").removeClass("info_show");
    });
});

function scrollDown(){
    if($("#info-warp")){
        $("#info-warp").css({
            top: 0 + "px",
            width: 100 + "%",
            height: 100 + "%",
            opacity: 1,
            zIndex: 9999
        });

        $("#list_info").addClass("active");
        $(".info_me").addClass("info_show");
    }
}

function scrollUp(){
    if($("#info-warp")){
        $("#info-warp").css({
            top: -$("html,body").height() +"px",
            opacity: 0,
            zIndex: -1
        });
    }

    $("#list_info,#list_contact,#list_about").removeClass("active");
    $(".info_me").removeClass("info_show");
    $(".contact_me").removeClass("contact_show");
    $(".about_here").removeClass("about_show");
}