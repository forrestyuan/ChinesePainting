/*
 * 原生js实现瀑布流
 */
window.onload=function(){
	waterfall('tt','tt');
	$("#showMbtn").animate({marginLeft:'0'},1500);
	var cwd=document.documentElement.clientWidth;
	if(cwd<800){
		$("#showMbtn h2").css("font-size","20px");
	}
	$('.wapian-moutian').animate({height:'100px'},1500);
}
/*
 *@参数：parent 父容器id; className:要查找的容器的类名
 *@功能：实现瀑布流
 *@返回： 无返回值
 * */
function waterfall(parent,className){
	var oParent=document.getElementById(parent); //获得父容器对象
	var oBoxs=getByClassName(oParent,className);//得到类名为className 的所有元素对象
	var hArr=new Array();						//存放高度
	var oBoxW=oBoxs[0].offsetWidth;				//数据块的宽度
	var cols=Math.floor(document.documentElement.clientWidth/oBoxW);//计算列数
	var maxHeight=getMaxHeight(className);		//计算所有数据块中
	var rows=Math.floor(oBoxs.length/cols);		//计算行数
	var oHeight=(rows-1)*maxHeight;				//计算父容器应设的高度
	document.getElementById("sec").style.height=oHeight+"px";//设置父容器高度
	oParent.style.width=cols*oBoxW+"px";		//设置父容器宽度
	for(var i=0;i<oBoxs.length;i++){			
		if(i<cols){
			hArr.push(oBoxs[i].offsetHeight);
		}else{
			var minH=Math.min.apply(null,hArr);
			var index=getIndex(minH,hArr);
			oBoxs[i].style.position="absolute";
			oBoxs[i].style.top=minH+"px";
			oBoxs[i].style.left=oBoxW*index+"px";
			
			hArr[index]+=oBoxs[i].offsetHeight;
		}
	}
}
/*
 *@参数： dest所要找的元素；arr：在哪个数组查找
 *@功能：得到minH的下标
 *@返回：所查找的元素下标
 * */
function getIndex(dest,arr){
	for(var i in arr){
		if(arr[i]==dest){
			return i;
		}
	}
}
/*
 *@参数： pt父元素；clsName 要查找的类名
 *@功能：得到某容器下的类名为 clsName的容器
 *@返回：所查找的元素数组
 */
function getByClassName(pt,clsN){
	var oElements=pt.getElementsByTagName('*');
	var boxs=new Array();
	for(var i=0;i<oElements.length;i++){
		if(oElements[i].className==clsN){
			boxs.push(oElements[i]);
		}
	}
	return boxs;
}
/*
 *@参数： cls要查找的类名
 *@功能：得到数据块的最大高度
 *@返回：所查高度
 * */
function getMaxHeight(cls){
	var boxs=document.getElementsByClassName(cls);
	var hArray=new Array();
	for(var i=0;i<boxs.length;i++){
		hArray.push(boxs[i].offsetHeight);
	}
	var maxH=Math.max.apply(null,hArray);
	return maxH;
}
/**************************************show or hide**********************************************/
var showYearClickTimes=0;
function showyearcc(bt,pt){
	showYearClickTimes++;
	var btt=document.getElementById(bt);
	var parent=document.getElementById(pt);
	if(showYearClickTimes%2!=0){
		parent.style.display="none";
		btt.innerHTML="显示朝代";
		document.getElementById("sec").style.height="200px";
	}else{
		parent.style.cssText="display:inline-block;";
		waterfall('tt','tt');
		btn.innerHTML="隐藏朝代";
	}
}

/*show 悟意人生*/
function showSubMoive(){
	var subM=$("#sub-moive");
	subM.height('50%').slideDown('slow');
	$('#closeX').css({'display':'inline-block'},{'z-index':'1000'});
}

function  closeSubMoive(){
	var subM=$("#sub-moive");
	subM.css('display','none');
	$('#closeX').css('display','none');
	$("#sub-moive video")[0].pause();
}

var arrowTimes=0;
function arrowGo(){
	arrowTimes++;
	if(arrowTimes%2){
		$("#showMbtn").animate({marginLeft:'97%'},1500);
		$("#arrow").removeClass("glyphicon-arrow-right").addClass("glyphicon-arrow-left");
		closeSubMoive();
	}else{
		$("#showMbtn").animate({marginLeft:'0'},1500);
		$("#arrow").removeClass("glyphicon-arrow-left").addClass("glyphicon-arrow-right");
		
	}
	
}
