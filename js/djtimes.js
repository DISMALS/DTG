(function () {
    var interval = 1000;
    function ShowCountDown(year, month, day, hour, minute, divname) {
        var now = new Date();
        var endDate = new Date(year, month - 1, day, hour , minute);
        var leftTime = endDate.getTime() - now.getTime();
        var leftsecond = parseInt(leftTime / 1000);
        //var day1=parseInt(leftsecond/(24*60*60*6)); 
        var day1 = Math.floor(leftsecond / (60 * 60 * 24));  //剩余的天数
        var hour = Math.floor((leftsecond - day1 * 24 * 60 * 60) / 3600);  //day1 * 24

        var hours =  Math.floor((leftsecond - day1 * 24 * 60 * 60) / 3600) + day1 * 24; //一共剩余的小时

        var minute = Math.floor((leftsecond - day1 * 24 * 60 * 60 - hour * 3600) / 60); //剩余的分钟数

        var second = Math.floor(leftsecond - day1 * 24 * 60 * 60 - hour * 3600 - minute * 60);  //剩余的秒数
		
		var cc = document.getElementById(divname);
		
		//alert(leftsecond);
        //alert(now.getTime());  //Wed 10 14 2015 10:20:53 GMT+0800
		if (divname == 'DJTmain') {
		    if ((day1 == 0 && hours == 0 && minute == 0 && second == 0) || day1 < 0 || hours < 0 || minute < 0 || second < 0) {
		        cc.innerHTML = '<i class="colorFour">倒计时：</i><b class="fon"><em>'+ 0 + '</em>天&nbsp;<em>' + 0 + '</em>' + '时&nbsp;<em>' + 0 + '</em>' + '分&nbsp;<em>' + 0 + '</em>' + '秒</b>';
		    } else if (day1 > 0 || hours > 0 || minute > 0 || second > 0) {
		        cc.innerHTML = '<i class="colorFour">倒计时：</i><b class="fon"><em>' + day1 + '</em>天&nbsp;<em>' + hour + '</em>时&nbsp;<em>' + minute + '</em>分&nbsp;<em>' + second + '</em>秒</b>';
		    }
		} else if (divname == 'RRThreeMOneMI') {
		    if ((day1 == 0 && hours == 0 && minute == 0 && second == 0) || day1 < 0 || hours < 0 || minute < 0 || second < 0) {
		        cc.innerHTML = 0 + '天' + 0 + '时' + 0 + '分' + 0 + '秒';
		    } else if (day1 > 0 || hours > 0 || minute > 0 || second > 0) {
		        cc.innerHTML = day1 + '天' + hour + "时" + minute + "分" + second + '秒';
		    }
		}
		                   
    }
    window.setInterval(function () { ShowCountDown(2015, 11, 20, 10, 10, 'DJTmain'); }, interval);
    window.setInterval(function () { ShowCountDown(2015, 11, 20, 10, 10, 'RRThreeMOneMI'); }, interval);
})();