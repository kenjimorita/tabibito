var myApp = angular.module('myApp', []);
myApp.value("myData",
		{"data" : [
					{ "namae": "kenji", "age": 30, "status" : "yes", "living": "kuki" },
					{ "namae": "kenji2", "age": 20, "status" : "yes", "living": "kawasaki" },
					{ "namae": "kenj3", "age": 30, "status" : "no", "living": "megurdadao" },
					{ "namae": "kenji4", "age": 20, "status" : "yes", "living": "kawasaki" },
					{ "namae": "kenji5", "age": 30, "status" : "no", "living": "meguro" },
					{ "namae": "kenji6", "age": 20, "status" : "yes", "living": "kawasaki" },
					{ "namae": "kenji7", "age": 30, "status" : "no", "living": "kuki" },
					{ "namae": "kenji8", "age": 20, "status" : "yes", "living": "kawasaki" },
					{ "namae": "kenji9", "age": 40, "status" : "yes", "living": "meguro" }
				]
	})
	.value('AppTitle','AngularJSPrograming')
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
		this.getMydata = function()
		{
			return myData;
		}
}]);
myApp.factory('filterDataFactory',['myData',function(myData){
	return {
		getMydata : function()
		{
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
