//获取元素
var oul=document.getElementsByClassName('boximg')[0]  //包裹图片ul
var oli=oul.getElementsByTagName('li') //li //图片
var list=document.getElementsByClassName('yuandian')[0] //包裹圆点的ul
var boxwidth=document.getElementById('box') //最外层的盒子，显示区域 
var or=document.getElementsByClassName('right')[0] //右按钮
var ol=document.getElementsByClassName('left')[0]  //左按钮
var index; //圆点的索引号
var timer;
//1.创建圆点
	for(var i=0;i<oli.length;i++){
		//1.创建圆点
		 var olist=document.createElement('li')
		 // 6.给创建li添加一个下标
		 olist.setAttribute('index',i)
		 //2.添加圆点
		 list.appendChild(olist)
		//3.圆点背景颜色
		 olist.addEventListener('click',function(){
		 		// 4.排他思想    排除所有人 留下自己
		 		for (var i=0;i<list.children.length;i++) {
		 				list.children[i].className=" "
		 		}
		 		//5.留下自己
		 		this.className="active"
		 		//7.拿到点击圆点下标
		 	index=this.getAttribute('index');
		 	// 2.1 每次点击圆点的下标值赋值num
		 	num=index
		 	//2.3 每次点击圆点的下标值赋值cicrst
		 	cicrst=index;
		 	//8.调用动画
			animate(oul,-index*boxwidth.offsetWidth)
		 })		 
	}
	//9. 给第一个圆点添加className
	list.children[0].className="active"
	//2.2 把第一张图片复制到最后
	var firct=oul.children[0].cloneNode(true)
	oul.appendChild(firct)
    //2.点击右按钮
	var num=0 ;//获取下标值
	var cicrst=0;
	var flag=true;//节流阀
	or.onclick=function(){
		if(flag){
		flag=false
		if(num==list.children.length){
			num=0;
			oul.style.left=0+'px';
		} 
		num++
		animate(oul,-num*boxwidth.offsetWidth,function(){
			flag=true;
		});
		cicrst++
		cicrst= cicrst==list.children.length?0:cicrst
		chage()		
		}
	}


   //3 左侧
	ol.onclick=function(){
		if(flag){
			flag=false
			if(num==0){
			num=list.children.length;
			oul.style.left=-num*boxwidth.offsetWidth
		} 
		num--
	   animate(oul,-num*boxwidth.offsetWidth,function(){
	   	flag=true;
	   })
		cicrst--
		cicrst=cicrst<0?list.children.length-1:cicrst
		chage()
		}	
	}

	function chage(){
		for (var i=0;i<list.children.length;i++) {
		   list.children[i].className=" "
		}
		list.children[cicrst].className="active "
	}
	
//开启定时器
	timer=setInterval(function(){
		or.onclick()
	},1000)
