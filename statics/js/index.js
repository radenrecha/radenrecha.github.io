$(document).ready(function(){

/*回到顶部效果*/
(function(){
   $(window).scroll(function(){
        $(window).scrollTop()>100? $("#returnTop").css("bottom","60px"):$("#returnTop").css("bottom","-200px");
    });
    $("#returnTop").bind("click",function(){
        if($(window).scrollTop != 0){
            if(!$("html,body").is(":animated")){
                $("html,body").animate({scrollTop: 0},500)
            }
            
        }
        
    }); 
})();
 
/*分类目录菜单点击效果*/   
(function(){
    $(".cates").hide();
    $(".category-list li:first-child").css({"background-color": "#CE2323","color":"#FFFFFF"});
    $(".category-list li")
    $(".category-list li").bind("click",function(){
        $(this).css({"background-color": "#CE2323","color":"#FFFFFF"}).siblings().css({"background-color":"transparent","color":"#000000"});
        var cateName = $(this).attr("data-cate");
        $(".cate-posts > ul[data-cate != "+cateName+"]").hide(280);
        $(".cate-posts > ul[data-cate = "+cateName+"]").show(400);
    }); 
})();

/*右侧目录*/
(function(){
   if (typeof $('#markdown-toc').html() === 'undefined') {
        $('.catalog-menu').hide();
    } else {
        $('.catalog-menu .catalog-menu-content').html($('#markdown-toc').html());
    } 
})();

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

/*瀑布流效果*/
(function(){
    $.getJSON("../../demo/data.json",function(data){
        for(var i=0;i<data.length;i++){
            //获取高度最小的child
            var _index = getShort();
            var child = $('<div></div>');
            var image = $('<img/>');
            image.attr("src",data[i].src);
            image.css({"width":"214px","height":data[i].height * ( 214 / data[i].width ) + 'px'})
            child.append( image );
            var description = $("<p></p>");
            description.text(data[i].des);
            var code = $("<a>[查看代码]</a>");
            code.attr("href",data[i].code);
            var link = $("<a>[查看演示]</a>");
            link.attr("href",data[i].url);

            description.append( code ); 
            description.append( link );           
            child.append( description );
            $(".element").eq(_index).append( child );
        }
    
        var elementHArr=[];
        console.log( $(".element").eq( 0 ).height())  
        $(".element").each( function( index, value ){
            elementHArr[ index ] = $(".element").eq( index ).height(); 
            console.log( $(".element").eq( index ).height())      
        });

        var maxH = Math.max.apply( null, elementHArr );
        console.log(maxH)
        $(".demo").css("height",maxH +"px");
    }) 
})();

});


/**
 * 获取高度最小的child,瀑布流布局时使用
 * @return {[type]} [description]
 */
function getShort(){
    var index = 0;
    var min = $(".element").eq(index).height();
    $(".element").each(function(i){
        if($(this).height() < min){
            index = i;
            min = $(this).height();
        }
    });
    return index;
}



    
