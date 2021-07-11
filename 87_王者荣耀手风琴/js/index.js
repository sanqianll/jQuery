$(function () {
    // over
    // $(this).addClass("current");
    // $(this).siblings("li").removeClass("current");

    // 徐嘉乐的错误写法
    // $(this).find(".large").fadeIn(500);
    // $(this).find(".small").fadeOut(500);
    // $(this).siblings("li").find(".large").fadeOut(500);
    // $(this).siblings("li").find(".small").fadeIn(500);
    // $(this).animate({
    //     width:224
    // },500)
    // $(this).siblings("li").animate({
    //     width:64
    // },500)

    // 正确写法
    $(".king li").mouseenter(function () {
        $(this).stop().animate({
            width: 224
        }, 300).find(".small").stop().fadeOut(150).siblings(".large").stop().fadeIn(300);
        $(this).siblings("li").stop().animate({
            width: 69
        }, 300).find(".small").stop().fadeIn(150).siblings(".large").stop().fadeOut(300);
    });

    $(".king li:first").data("index", 2);
    console.log($(".king li:first").data("index"));
});