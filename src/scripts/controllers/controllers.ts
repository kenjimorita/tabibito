/// <reference path="../vendor_def/angularjs/angular.d.ts"/>
/// <reference path="../vendor_def/jQuery/jquery.d.ts"/>

module tabobito {
	export	class TodoCtrl{
		constructor(public serviceConsole, public myValue){
			this.myValue = myValue;
			console.log(myValue);
		}
		setService():any{
			console.log('eee')
		}
	}
}



var tabibito = angular.module('tabibito',['ngAria'])
.factory('serviceConsole',function(){
	return {"value" : "called!service"};
})
.value('myValue','myValue');

tabibito.controller('todoCtrl', ['serviceConsole','myValue',tabobito.TodoCtrl])
