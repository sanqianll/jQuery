$(function () {
    // 淘宝精品案例
    $(".left li").mouseover(function () {
        $(this).siblings("li").css("background-color", "");
        $(this).css("background-color", "blanchedalmond");
        var index = $(this).index();
        $(".content>div").eq(index).siblings("div").hide();
        $(".content>div").eq(index).show();
    });

    //京东导航栏详细信息
    $(".tab .tab_head ul li").click(function (e) {
        e.preventDefault();
        $(this).addClass("current");
        $(this).siblings("li").removeClass("current");
        $(".tab .tab_con div").eq($(this).index()).show();
        $(".tab .tab_con div").eq($(this).index()).siblings("div").hide()
    });

    // 渐变焦点
    $(".warp div ul li").hover(function () {
        // over
        $(this).siblings("li").stop().fadeTo(200, 0.2);
    }, function () {
        // out
        $(this).siblings("li").stop().fadeTo(200, 1);
    });

    //jq动画animate()
    $("button").click(function (e) {
        e.preventDefault();
        $(".box1").animate({
            width: 300,
            height: 300,
            backgroundColor: "red",//好像是不支持背景颜色的渐变
            top: 0,
            left: 1300
        }, 300)
    });
});