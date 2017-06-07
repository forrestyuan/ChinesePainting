var imgArr = ["img/220H55U300.jpg", "img/5106585_142206018163_2.jpg",
	"img/2015111711571502.jpg", "img/235045-12101Q3093890.jpg",
	"img/5106585_142206004457_2.jpg"];
var arr = ["《囚徒》",
	"：我们原是自由飞翔的鸟",
	"飞去吧",
	"飞到那乌云背后明媚的山峦",
	"飞到那里",
	"到那蓝色的海角",
	"只有风在欢舞",
	"还有我相伴",
	"--平凡的世界",
	"出路出路，走出去了，总是会有路的。困难苦难，困在家里就是难。",
	"坚其志，苦其心，劳其力，事无大小，必有所成。",
	"路漫漫求修远兮,吾将上下而求索",
	"自己选择的路，跪着也要把它走完.",
	"每个人的一生都有许多梦想，但如果其中一个不断搅扰着你，剩下的就仅仅是行动了.",
	"走得最慢的人，只要他不丧失目标，也比漫无目的地徘徊的人走得快.",
	"有志者自有千计万计，无志者只感千难万难。",
	"有人说，世界上最美的是梦，最长的是路；最易做的是梦，最难走的是路。",
	"你若不离，我便不弃！我的Zone需要你的常来....我...是Forrest！！！一位90后，",
	"热爱工作，投身事业，在这一过程中，抑制私心，陶冶人格，同时积累经验，提高能力。",
	"我不去想，是否能够成功。既然选择了远方，便只顾风雨兼程。",
	"保持自身的个性和尊重别人的个性同样重要。",
	"劝君莫惜金缕衣。劝君惜取少年时。有花堪折直须折，莫待无花空折枝。",
	"三更灯火五更鸡，正是男儿读书时。黑发不知勤学早，白首方悔读书迟。"];
var week = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
var wordi = -1;
var c = imgArr.length;
var setTargetTime = "10/10/2017 00:00";
window.onload = function () {
	setInterval(changebackround, 3000);
	setInterval(changeWords, 2500);
	setInterval(showDetailTime, 1000);
	changeImg();
	overlay();
	countDown();//月日年
	advTop();
	$('#resetTime').click(function () {
		$(this).fadeOut();
		$('#settingTime').fadeIn();
	});
	$('#settingFinish').click(function () {
		setTargetTime = settingTargetTime();
		countDown();//月日年
		if (setTargetTime != null) {
			$('#settingTime').fadeOut();
			$('#resetTime').fadeIn();
		}
	});

	$('#cancleSetting').click(function () {
		$('#settingTime').fadeOut();
		$('#resetTime').fadeIn();
	});
	//鼠标经过每一个列表子项，出现对应的详情
	$('.classes-nav .cnli').mouseover(function () {
		$(this).children('div').show();
	}).mouseout(function () {
		var div = $(this).children('div');
		if (div.mouseover() != null) {
			div.mouseout(function () {
				div.hide();
			});
			$('.classes-nav .cnli').mouseout(function () {
				div.hide();
			});
		} else {
			div.hide();
		}
	});
}
/*
 * 改变背景
 */
function changebackround() {
	var bgc = document.getElementById('changeimg');
	c--;
	if (c == -1) { c = imgArr.length; }
	else {
		bgc.src = imgArr[c];
	}
}
/*fighter show*/
setInterval(function () {
	var totopshow = document.getElementById("gotop");
	var offsetHeight = document.body.scrollTop;
	if (offsetHeight > 450) {
		totopshow.style.display = "block";
	}
	else {
		totopshow.style.display = "none";
	}
}, 100);
/*moive show or close*/
function showclose() {
	document.getElementById('playmoive').style.display = "inline-block";
	document.getElementById('moive').style.display = "none";
	document.getElementById('close').style.display = "none";
	document.getElementsByTagName('video')[0].pause();
}

function showmoive() {
	document.getElementById('playmoive').style.display = "none";
	document.getElementById('moive').style.display = "block";
	document.getElementById('close').style.display = "inline";
}
/*slow up to top*/
function flytotop() {
	$('html,body').animate({ scrollTop: '0px' }, 2000); return false;
}

/**
 * @功能 倒计时
 * @param targetTime (1/1/2017 00:00)
 */
function countDown() {
	var countDownTimeInterval = setInterval(function () {
		var targetTime = new Date(setTargetTime).getTime();
		var currentTime = new Date().getTime();
		var offsetTime = targetTime - currentTime;
		//一天24小时 一小时60分钟 一分钟60秒 所以一天的秒数为：1*24*60*60秒
		var offsetBasicTime = 1 * 24 * 60 * 60 * 1000;
		//页面中放置剩余时间的盒子
		var placeLeftTime = document.getElementById("placeLeftTime");
		if (offsetTime < 0) {
			clearInterval(countDownTimeInterval);
			alert("倒计时结束，现在已经到达指定时间！")
		}
		//带有小数的天数
		var basicDivide = offsetTime / offsetBasicTime;
		//剩余天数 ，本层余数舍掉算进下一层
		var leftDay = Math.floor(basicDivide);
		//剩余小时，上层天数余数计算本层小时
		var leftHour = Math.floor((basicDivide - leftDay) * 24);
		//剩余分钟，上层小时余数计算本层分钟
		var leftMinute = Math.floor(((basicDivide - leftDay) * 24 * 60) - (leftHour * 60));
		//剩余秒数，上层分钟余数计算本层秒数
		var leftSecond = Math.floor((((basicDivide - leftDay) * 24 * 60) - (leftHour * 60)) * 60 - (leftMinute * 60));
		//放置计算好的时间到盒子中
		placeLeftTimeDay.innerHTML = leftDay<10?("0"+leftDay):leftDay;
		placeLeftTimeHour.innerHTML = leftHour<10?("0"+leftHour):leftHour;
		placeLeftTimeMinute.innerHTML = leftMinute<10?("0"+leftMinute):leftMinute;
		placeLeftTimeSecond.innerHTML = leftSecond<10?("0"+leftSecond):leftSecond;
	}, 1000);
}

/**
 * @功能 设置时间
 */
function settingTargetTime() {
	var date = $('#date').val();
	var time = $('#time').val();
	if (date == "" || time == "") {
		alert("时间设置不完整");
		return;
	}
	var datasplit = date.split("-");
	var modifiedDate = datasplit[1] + "/" + datasplit[2] + "/" + datasplit[0] + " " + time;
	$('#setYear').html(datasplit[0]);
	$('#setMonth').html(datasplit[1]);
	$('#setDay').html(datasplit[2]);
	$('#setHM').html(time);
	return modifiedDate;
}

/*显示年月日 时分秒，星期几 ，早中晚*/
function showDetailTime() {
	var pt = $('#wrap_time');
	var dt = new Date();
	var yy = dt.getFullYear();
	var MM = dt.getMonth()+1;
	var dd = dt.getDate();
	var hh = dt.getHours();
	var mm = dt.getMinutes();
	var ss = dt.getSeconds();
	var wd = week[dt.getDay()];
	var wh = null;
	if (hh > 0 && hh <= 5) {
		wh = '凌晨好，现在本是熟睡的时刻！';
	} else if (hh > 5 && hh <= 8) {
		wh = '早上好，早上一杯水，精神一整天，喝杯水吧！';
	} else if (hh > 8 && hh <= 10) {
		wh = '上午好，现在的你，或许已经全身心的投入到工作、学习。';
	} else if (hh > 10 && hh <= 12) {
		wh = '中午好，午睡一会吧，为下午工作蓄足能量！';
	} else if (hh > 12 && hh <= 18) {
		wh = '下午好，为梦想的你，正在奋斗中！';
	} else if (hh > 18 && hh <= 21) {
		wh = '晚上好，忙碌了一天的你，感觉充实吗？放松一下，休息休息吧。';
	} else {
		wh = '很晚了，听听音乐，放松身心，准备入眠吧，晚安！';
	}
	MM = MM < 10 ? ("0" + MM) : MM;
	dd = dd < 10 ? ("0" + dd) : dd;
	hh = hh < 10 ? ("0" + hh) : hh;
	mm = mm < 10 ? ("0" + mm) : mm;
	ss = ss < 10 ? ("0" + ss) : ss;
	pt.html("<br>" + yy + "年" + MM + "月" + dd + "日" + "<hr/>" + hh + "时" + mm + "分" + ss + "秒<br>" + wd + "<hr>" + wh).css("text-align", "center");
}
/*名言警句*/
function changeWords() {
	wordi++;
	if (wordi == 16) {
		wordi = -1;
	}
	$('#wordchange').html(arr[wordi]).fadeIn();
}
/*advertisement top*/
var clearTimeout;
function advTop() {
	var clickadvTimes = 0;
	$('.header').before("<a href=javascript:void(0);><img class='advTop' src='img/ad.jpg'></a>");
	$('.advTop').hide();
	$('.advTop').click(function () {
		if (++clickadvTimes > 1) {
			clearInterval(cleartime);
		}
		$(this).css({ 'width': '85%', 'height': '0', 'position': 'fixed', 'z-index': '900', 'border-radius': '5px', 'left': '7.5%', 'top': '0' }).fadeIn();
		$(this).animate({ 'height': "400" }, 2000);
		$(this).animate({ 'height': "400" }, 2000);
		$(this).animate({ 'height': "45", 'width': '45', 'left': '94%', 'top': '350' }, 1500);
		setTimeout(function () {
			cleartime = setInterval(smallAdvTop, 3000);
		}, 5000);
	});
	$('.advTop').click();
}

var rotateDeg = 0;
var smallAdvTop = function () {
	$('.advTop').css({ 'transition': 'transform 3s', 'transform': "rotate(" + (rotateDeg) + "deg)" });
	if (rotateDeg < 760) {
		rotateDeg += 360;
	} else {
		rotateDeg -= 360;
	}
}

/*adv*/

window.onscroll = function () {
	var ad1 = document.getElementById("ad1");
	var ad2 = document.getElementById("ad2");
	var offsetHeight = document.documentElement.scrollTop || document.body.scrollTop;
	console.log(offsetHeight);
	window.setTimeout(function () {
		ad1.style.top = (200 + offsetHeight) + "px";
		ad2.style.top = (200 + offsetHeight) + "px";
	}, 200);

};
function quitad1() {
	$('#ad1').fadeOut();
}
function quitad2() {
	$('#ad2').fadeOut();
}
/*轮播图的函数封装*/
/**
 * @function 图片轮播
 * @description 在使用该函数时，需要将图片放在 a标签里，并且该父容器的class属性为 .bgimg 
 * 				前一张 按钮的class属性为.preImg 下一站的按钮class属性为.nextImg
 */
function changeImg() {
	var countTimes = 0;
	var isClick = false;
	var imgList = $('.bgimg a');
	$('.nextImg').click(function () {
		isClick = true;
		countTimes++;
		if (countTimes > (imgList.length) - 1) {
			countTimes = 0;
		}
		$(imgList).fadeOut();
		$(imgList[countTimes]).fadeIn();
		setTimeout(function () { isClick = false; }, 2500);
		//console.log("next:"+countTimes);
	});
	$('.preImg').click(function () {
		isClick = true;
		countTimes--;
		if (countTimes < 0) {
			countTimes = (imgList.length) - 1;
		}
		$(imgList).hide();
		$(imgList[countTimes]).fadeIn();
		setTimeout(function () { isClick = false; }, 2500);
		//	console.log("pre:"+countTimes);
	});
	setInterval(function () {
		if (!isClick) {
			countTimes++;
			if (countTimes > (imgList.length) - 1) {
				countTimes = 0;
			}
			$(imgList).fadeOut();
			$(imgList[countTimes]).fadeIn();
		}
	}, 3500);
}
/**
*@功能 异步加载数据
*@说明 通过jquery的ajax组件从php后台异步动态读取数据的数据
*/
var page=0;
function overlay() {
	$('.overlay').click(function () {
		$.getJSON("http://127.0.0.1/index.php?page="+page+"&callback=?",  
		function(result) {
			for(var i=0;i<result.length;i++) {
				var thumbnail=result[i][0];
				var href=result[i][1];
				var title=result[i][2];
				var year=result[i][3];
				var author=result[i][4];
				var content=result[i][5];
				var cont='<li class="event">'+
							'<label></label>'+
							'<div class="thumb" style="background-image:url('+thumbnail+'); background-size:contain">'+
								'<span><a href='+href+'>'+title+'</a></span>'+
							'</div>'+
							'<div class=inner>'+
								'<h3>'+year+'-'+author+'</h3>'+
								'<p>'+content+'</p>'+
							'</div>'+
						'</li>';
				$('.timeline').append(cont);
			} 
			if(result.length<=1){
				$('.overlay').text("~_~ 没有数据了....")
				alert("已加载全部");
				return;
			}
		}); 
		page++;
	});
}
