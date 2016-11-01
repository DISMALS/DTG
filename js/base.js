



//下面这个函数是一个禁止默认动作的函数
function preDef(evt) {
    var e = evt || window.event;
    if (e.preventDefault) {
        e.preventDefault();   //W3C标准
    } else {
    e.returnValue = false;   //IE
    }
}

//下面这个函数是跨浏览器添加事件
function addEvent(obj, type, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(type, fn, false);
    } else if (obj.attachEvent) {
    obj.attachEvent('on' + type, fn);
    }
}

//下面这个函数是跨浏览器删除事件
function removeEvent(obj, type, fn) {
    if (obj.removeEventListener) {
        obj.removeEventListener(type, fn, false);
    } else if (obj.detachEvent) {
    obj.detachEvent('on' + type, fn);
    }
}

//跨浏览器获取目标对象
function getTarget(evt) {
    if (evt.target) {   //W3C
        return evt.target;
    } else if (window.event.srcElement) {
    return window.event.srcElement;
    }
}

//跨浏览器获取字符编码
function getCharCode(evt){
	var e = evt || window.event;
	if(typeof e.charCode == "number"){
		return e.charCode;
	}else{
		return e.keyCode;
	}
}



//延迟5秒提交表单
/* addEvent(window, 'load', function () {
    var fm = document.getElementById('myForm');
    addEvent(fm, 'submit', function (evt) {
        preDef(evt);
        setTimeout(function () {
            fm.submit();
        }, 5000);
    });
}); */
