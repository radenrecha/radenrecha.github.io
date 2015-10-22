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

    //右边目录
    if (typeof $('#markdown-toc').html() === 'undefined') {
        $('.catalog-menu').hide();
    } else {
        $('.catalog-menu .catalog-menu-content').html($('#markdown-toc').html());
    }
});
