//下面这个函数是跨浏览器添加事件
function addEvent(obj, type, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(type, fn, false);
    } else if (obj.attachEvent) {
        obj.attachEvent('on' + type, fn);
    }
}
// addEvent(window, "load", function () {
//     //判断单个产品是否被选中
//     //如果没每个店铺的所有单个产品被选中，则此店铺被选中，
//     //如果每个店铺被选中，则全选按钮被选中
//     var fm = document.forms[0];
//     var Inputs = fm.elements['ch'];  //获取每一个单一产品的checkbox按钮
//     var InputKuai = fm.elements['kua']; //获取每一个店铺的checkbox按钮
//     var all = fm.elements['all'];   //获取页面两个全选的checkbox按钮
//     alert(Inputs.length);

// });





























