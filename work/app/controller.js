var app = angular.module('myapp',['ngAnimate','ngRoute']);
function routeConfig($routeProvider){
    $routeProvider.
        when('/add', {
            controller: 'AddController',
            templateUrl: 'add.html'
        })
}

app.config(routeConfig);
var comment1=[
					{username:'大张李',content:'希望你能每天都快乐',time:'10m ago',img:'images/a4.jpg',vip:''},
					{username:"月亮的影子",content:'孩子的时候，我们简单地把人划分为好人或坏人。只是后来长大了，知道了，好人没有你想象的那么好，坏人也没有你想象的那么坏。正如，外表坚强的人，也许内心很脆弱，而外表柔弱的人，却有着一颗强韧的心。',time:'9h ago',img:"images/a2.jpg",vip:'1'}
					];
var comment2=[];				
app.controller("ctrl",function($scope){
	$scope.user=[
					{username:'别无所求',tag:"IT大牛",age:'23',sex:'女',address:"河北省石家庄",upNum:'2000',fansNum:'250',img:""}
				];
	$scope.fans=[
					{username:'小王',tag:"设计师，博客博主",img:"images/a1.jpg",id:1},
					{username:'张琳',tag:"作家，杂志编辑",img:"images/a2.jpg",id:2},
					{username:'李小明',tag:"艺术总监，电影剪辑",img:"images/a3.jpg",id:4},
					{username:"赵大成",tag:'音乐家，运动员',img:"images/a4.jpg",id:3}
				];
	$scope.content=[
					{username:'小鱼儿',content:"不哭不闹不炫耀，安安分分一起老。不骂不吵不张扬，安安分分一起过。就算逃到天涯海角，也决不回头。就算哭到世界灭亡，也决不后悔。我想依靠你 永远在我旁边带路。我想牵着你 永远只会为你带路。偶尔有点小任性，为了等待你安抚。偶尔有点小情绪，为了引起你注意。所有的一切、都不是什么誓言。所谓的一切、到头来都是欺骗。蓦然、心锁的钥匙新了不实用了。蓦然、心锁的钥匙旧了可以换了",time:new Date(),img:"images/a9.jpg",comment:[{username:"大张李",age:12}]},
					{username:'我是黄小明',content:"我只是从这里路过......",time:new Date(),img:"images/a3.jpg"},
					{username:"帕金森",content:"日动影移，日穿帘隙，时间悄无声息地离去。不知不觉，那么多渐行渐远的岁月，如今只剩下依稀的背影，翻过岁月的篱墙，面对那些悄然散场的旧时光，莞尔一笑，只言感恩岁月，不诉岁月离殇。",time:new Date(),img:"images/a6.jpg"},
					{username:"请叫我大帅柯",content:"这世界上的很多事，有时候和我们眼睛看到的不一样。很多时候要我们慢慢地体会才会知道。我们不能急着看结果，就像种下一棵小花，你要耐心地等它破土发芽，慢慢长大，才能看到它开出美丽的花。尘世间的事也一样，要在时间里发酵，岁月里沉香，人生那些百思不得其解的事情，到后来时间会一一给你答案。岁月有时候特别用心良苦，它时常会给你很多磨难，其实它是想让你变得更好。",time:new Date(),img:"images/a4.jpg"},
					{username:"月亮的影子",content:"孩子的时候，我们简单地把人划分为好人或坏人。只是后来长大了，知道了，好人没有你想象的那么好，坏人也没有你想象的那么坏。正如，外表坚强的人，也许内心很脆弱，而外表柔弱的人，却有着一颗强韧的心。",time:new Date(),img:"images/a2.jpg"}
					];
	$scope.nav=[
				{name:'首页',id:1,children:[{}],icon:"glyphicon glyphicon-home"},
				{name:'简介',id:2,children:[{}],icon:"glyphicon glyphicon-file"},
				{name:'信息',id:3,children:[{}],icon:"glyphicon glyphicon-envelope"},
				{name:'操作',id:4,children:[
											{name:"设置栏目",id:11},
											{name:"更多设置",id:12},
											{name:"分割线",id:13}
					],icon:'glyphicon glyphicon-cog'}
				];
	$scope.comment=comment1;
	$scope.comment1=comment2;
	$scope.show1=function(){
//		$scope.more=1;
		if($scope.more==1){
			$scope.more=0;
		}
		else{
			$scope.more=1;
		}
//		console.log($scope.more);
	};
	$scope.show2=function(){
		if($scope.leftList==1){
			$scope.leftList=0;
		}
		else{
			$scope.leftList=1;
		}
	}
});
app.controller('AddController',function($scope){
    $scope.time = new Date();
    $scope.content = '';
    console.log('2');
        comment2.push({
            username : "别无所求",
            content : $scope.content3,
            time : new Date(),
            img:'images/a0.jpg',
            vip:''
        });
        console.log(comment2);
    
});
//app.controller('AddController',function($scope){
//  $scope.time = new Date();
//  $scope.content = '';
//  console.log('2');
//      comment2.push({
//          username : "别无所求",
//          content : $scope.content3,
//          time : new Date(),
//          img:'images/a0.jpg',
//          vip:''
//      });
//      console.log(comment2);
//  
//});

