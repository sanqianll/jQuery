$(function () {
    $(".btn").on("click", function () {
        var li = $("<li></li>");
        li.html($("textarea").val() + "<a href='javascript:;'>删除</a>")
        $("ul").prepend(li);
        li.slideDown();
    });
    $("ul").on("click", "a", function () {
        $(this).parent().slideUp(function(){
            $(this).remove();
        });
    });

    var obj1={
        name:111,
        age:222
    }
    var obj2={
        sex:333
    }
    $.extend(obj1,obj2);
    console.log(obj1);
    console.log(obj2);
});