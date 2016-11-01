
window.onload = function () {

    //弹窗调用函数
    function popUpAll(btnPopUp) {
        var Norms = document.getElementById(btnPopUp);
        var popUpWrap = document.getElementById("popUpWrap");
        var popUpMainOne = document.getElementById("popUpMainOne");
        var popUpMainTwo = document.getElementById("popUpMainTwo");
        var Close = document.getElementById("Close");
        var closeBtn = document.getElementById("closeBtn");
        var formBd = document.getElementById("formBd");
        var submits = formBd.elements["submits"];
        var resets = formBd.elements["resets"];

        //以下是实现点击弹窗
        addEvent(Norms, "click", function () {

            popUpWrap.style.width = window.screen.availWidth;  //获取可用屏幕的宽度
            popUpWrap.style.height = window.screen.availHeight; //获取可用屏幕的高度
            popUpWrap.style.display = "block";
            popUpMainOne.style.display = "block";
            document.documentElement.style.overflow = "hidden";   //文档的滚动条隐藏，无法滚动

            //确定按钮点击事件
            addEvent(submits, "click", function () {
                popUpMainOne.style.display = "none";
                popUpMainTwo.style.display = "block"; 
               
               
                //设定倒数秒数  
                var t = 3;  
                //显示倒数秒数  
                function showTime(){  
                    t -= 1;
                    document.getElementById('flashEm').innerHTML = t + "s后自动跳转至全部订单页面";  
                    if(t==2){  
                        location.href = 'myOrder_index.html';
                        popUpMainTwo.style.display = "none";
                        popUpWrap.style.display = "none";
                        document.documentElement.style.overflow = "auto";
                    }  
                    //每秒执行一次,showTime()  
                    setTimeout("showTime()",1000);  
                }  
  
  
                //执行showTime()  
                showTime();  
                    

                
            });

            //延迟5秒提交表单
            /* addEvent(window, 'load', function () {
            var fm = document.getElementById('myForm');
            addEvent(fm, 'submit', function (evt) {
            preDef(evt);
            setTimeout(function () {
            fm.submit();
            }, 5000);
            });
            }); 
            for (var i = 3 ; i > 0; i--) {
                        //alert(i);
                        setTimeout(function (evt) {
                            document.getElementById("flashEm").innerHTML = "（" + i + "s后自动跳转至全部订单页面）";
                            if (i == 0) {
                                formBd.submit;
                            }
                        }, 1000);
                        
            }*/
            //关闭弹窗
            function closeM(btnId, EventTypes) {
                addEvent(btnId, EventTypes, function () {
                    popUpMainTwo.style.display = "none";
                    popUpWrap.style.display = "none";
                    document.documentElement.style.overflow = "auto";

                });
            }
            closeM(resets, "click"); //取消按钮点击事件
            closeM(Close, "click"); //输入取消订单原因时的关闭按钮点击事件
            closeM(closeBtn, "click"); //输入取消订单原因后的关闭按钮点击事件
        });
    }
    popUpAll("Norms");
    popUpAll("NormT");





    //下面这个函数是跨浏览器添加事件
    function addEvent(obj, type, fn) {
        if (obj.addEventListener) {
            obj.addEventListener(type, fn, false);
        } else if (obj.attachEvent) {
            obj.attachEvent('on' + type, fn);
        }
    }



    //下面这个函数是一个禁止默认动作的函数
    function preDef(evt) {
        var e = evt || window.event;
        if (e.preventDefault) {
            e.preventDefault();   //W3C标准
        } else {
            e.returnValue = false;   //IE
        }
    }
};









































