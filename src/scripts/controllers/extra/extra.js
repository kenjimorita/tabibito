var myApp = angular.module('myApp', []);
myApp.value("myData",
		{"data" : [
					{ "namae": "kenji", "age": 30, "status" : "有効", "living": "kuki" },
					{ "namae": "kenji2", "age": 20, "status" : "有効", "living": "kawasaki" },
					{ "namae": "kenj3", "age": 30, "status" : "無効", "living": "megurdadao" },
					{ "namae": "kenji4", "age": 20, "status" : "有効", "living": "kawasaki" },
					{ "namae": "kenji5", "age": 30, "status" : "無効", "living": "meguro" },
					{ "namae": "kenji6", "age": 20, "status" : "有効", "living": "kawasaki" },
					{ "namae": "kenji7", "age": 30, "status" : "無効", "living": "kuki" },
					{ "namae": "kenji8", "age": 20, "status" : "有効", "living": "kawasaki" },
					{ "namae": "kenji9", "age": 40, "status" : "有効", "living": "meguro" }
				]
	})
	.value('AppTitle','AngularJSプログラミング')
	.value('AppInfo',
		{
			 autor : '森田',
			 update : new Date(2007,5,25)
		})
.value('CommonProc',function(){
 console.log(value)
});
myApp.service('filterDateService',['myData',function(myData){
	  console.log(myData);
		this.getMydata = function()//controllerから受けとる引数
		{
			return myData;
		}
}]);
myApp.factory('filterDataFactory',['myData',function(myData){
	return {
		getMydata : function()//controllerから受け取る引数
		{//サービスは直接ここで参照
			return myData;
		}
	}
}]);
myApp.controller('SampleController',['AppTitle','AppInfo','CommonProc','filterDateService','filterDataFactory',
function(AppTitle, AppInfo , CommonProc,filterDateService,filterDataFactory){
		console.log(filterDataFactory.getMyData);
		this.AppTitle = AppTitle;
		this.getedFactory = filterDataFactory.getMydata();
		this.getedService = filterDateService.getMydata();
		this.AppInfo = AppInfo;
		this.CommonProc = CommonProc;
}]);
