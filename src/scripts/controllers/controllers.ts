/// <reference path="../../DefinitelyTyped-master/angularjs/angular.d.ts"/>
/// <reference path="../../DefinitelyTyped-master/jquery/jquery.d.ts"/>

class TodoCtrl{
	public tabibito : string;
	public setService:void;
	constructor(tabibito){
		this.tabibito = tabibito;
		console.log(tabibito);
	}
	setService(){
		alert('eeee');
	}
}


var tabibito = angular.module('tabibito', []);
tabibito.controller('todoCtrl', TodoCtrl)
.service('tabibito',TodoCtrl.setService);

var eee = new TodoCtrl('fafa');
console.log(eee);
