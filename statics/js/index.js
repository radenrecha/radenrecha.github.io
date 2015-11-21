$(document).ready(function(){

/*回到顶部效果*/
(function(){
   $(window).scroll(function(){
        $(window).scrollTop()>100? $("#returnTop").css("bottom","60px"):$("#returnTop").css("bottom","-200px");
    });
    $("#returnTop").bind("click",function(){
        $("article").animate({scrollTop: 0},500),
        $("html,body").animate({scrollTop: 0},500)
    }); 
})();
 
/*分类目录菜单点击效果*/   
(function(){
   $(".cates").hide();
    $(".category-list li").bind("click",function(){
        var cateName = $(this).attr("data-cate");
        $(".cate-posts > ul[data-cate != "+cateName+"]").hide(280);
        $(".cate-posts > ul[data-cate = "+cateName+"]").show(400);
    }); 
})();
    //右边目录
    /*if (typeof $('#markdown-toc').html() === 'undefined') {
        $('.catalog-menu').hide();
    } else {
        $('.catalog-menu .catalog-menu-content').html($('#markdown-toc').html());
    }*/

/*首页导航效果*/
(function(){
    var pull = $('#pull');
    menu = $('nav ul');
    menuHeight  = menu.height();

    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function(){
        var w = $(window).width();
        if(w > 320 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
})();


/*首页圆圈效果*/
(function(){
    var colors = [['#dfe8ed', '#30bae7'], ['#dfe8ed', '#d74680'], ['#dfe8ed', '#15c7a8'], ['#dfe8ed', '#eb7d4b']];                                                          
    var percentage = [70,60,60,20];
    for (var i = 1; i <= 5; i++) {
        var child = document.getElementById('circles-' + i);                                       
        Circles.create({
            id:         child.id,
            percentage: percentage[i - 1],
            radius:     80,
            width:      15,
            number:     percentage[i - 1],
            text:       '%',
            colors:     colors[i - 1]
        });
    }
})();


});



    
