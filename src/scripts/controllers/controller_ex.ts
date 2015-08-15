/// <reference path="../vendor_def/angularjs/angular.d.ts"/>
/// <reference path="../vendor_def/jQuery/jquery.d.ts"/>

//
// <div ng-controller="sub">
//
// </div>
var tabibito = angular.module('tabibito',['ngAria']);
tabibito.service('fafaService',function(){
	this.values = 'Hi!!We are Service!!';
	this.setValue = function (key,value){
		this.values[key] = value;
	};
	this.getValue = function(key){
		return this.values[key];
	}
})
module mA {
	export	class Sub{
		//func:void;/if you write this erea,/Duplicate indetifier
		constructor(fafaService){
			Sub.$inject = ['fafaService'];
			console.log(Sub.$inject);
		}
		func(){//上で定義しないでもよい
			console.log('fafa')//controllerにDIされたserviceはこの時点ではthisで参照可能
		}
	}
}
import moritaControl = mA.Sub;
var eee = tabibito.controller('sub',moritaControl);
console.log(eee);
