$(function () {
    load(); //启动加载
    $("#title").on("keydown", function (e) { //键盘判断
        if (e.keyCode === 13) { //回车判断
            if ($(this).val() == "") {
                alert("请输入代办项")
            } else {
                // 获取原数据
                var local = getDate();
                // 更新数据
                local.push({
                    title: $("#title").val(),
                    done: false
                })
                $(this).val("");
                // 存储数据
                saveDate(local);
                // 渲染界面
                load();
            }
        }
    });

    // 删除数据
    $("#todolist,#donelist").on("click", "a", function () {
        // 获取原数据
        var local = getDate();
        // 更新原数据
        var index = $(this).attr("id");
        local.splice(index, 1);
        // 存储原数据
        saveDate(local);
        // 渲染界面
        load();
    });

    // 变换完成情况
    $("#todolist,#donelist").on("click", "input", function () {
        // 获取原数据
        var local = getDate();
        // 更新原数据
        var index = $(this).siblings("a").attr("id");
        local[index].done = $(this).prop("checked");
        // 存储原数据
        saveDate(local);
        // 渲染界面
        load();
    });


    // 获取本地信息函数
    function getDate() {
        var data = localStorage.getItem("todolist");
        if (data !== null) {
            return JSON.parse(data);
        } else {
            return [];
        }
    }

    // 存储数据函数
    function saveDate(data) {
        data = JSON.stringify(data);
        localStorage.setItem("todolist", data);
    }

    // 渲染页面函数
    function load() {
        $("#todolist,#donelist").empty();
        var data = getDate();
        var todo = 0; //进行中的个数
        var done = 0; //完成的个数
        $.each(data, function (i, e) {
            if (e.done === true) {
                done++;
                $("#donelist").prepend("<li><input type='checkbox' checked='checked'><p>" + e.title + "</p><a href='javascript:;' id=" + i + "></a></li>");
            } else {
                todo++;
                $("#todolist").prepend("<li><input type='checkbox'><p>" + e.title + "</p><a href='javascript:;' id=" + i + "></a></li>");
            }
        });
        $("#todocount").text(todo);
        $("#donecount").text(done);

    }
});