/// <reference path="../vendor_def/angularjs/angular.d.ts"/>
/// <reference path="../vendor_def/jQuery/jquery.d.ts"/>

//
// <div ng-controller="sub">
//
// </div>
module mA {
	export	class sub{
		getValue:string;
		setValue:any;
		constructor(public fafaService:any){
			this.fafaService.setValue;
		}
	}
}
var morit = new mA.sub(['morita',89]);
console.log(morit.setValue);
var tabibito = angular.module('tabibito',['ngAria']);


tabibito.service('fafaService',function(){
	this.values = {};
	this.setValue = function (key,value){
		this.values[key] = value;
	};
	this.getValue = function(key){
		return this.values[key];
	}
})

tabibito.controller('sub', ['fafaService',mA.sub]);

var fafafa = new mA.sub('myservice');
console.log(fafafa.getValue);
