$(function () {
    // $('div').hide();//这样子写捕获不到元素
    //第二种方法等待网页中所有的元素全都加载完成之后再执行
    // $(document).ready(function () {
    //     $('div').hide();
    // });
    // 这种方法和上一种方法一样，就是少写了些东西
    // $(document).ready(function () {
    //     $('div').hide();
    // });
    var div = document.querySelector('div');
    console.dir(div);
    console.dir($('div'));
    console.dir($('div').get(0))

    $('.ul1 li').css('background-color', 'pink');

    $("ol li:eq(1)").css('color', 'red');

    $(".nav>li").click(function (e) {
        e.preventDefault();
        $(this).css("background-color", "skyblue");
        $(this).siblings("li").css("background-color", "");
    });

    // jq复杂写法
    // $(".nav>li").mouseover(function () {
    //     $(this).children('ul').show();
    // });
    // $(".nav>li").mouseleave(function () {
    //     $(this).children('ul').hide();
    // });

    // jq简洁写法
    $(".nav>li").hover(function () {
        // over
        $(this).children("ul").stop().slideToggle(50);
    });
});