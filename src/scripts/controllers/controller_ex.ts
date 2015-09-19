/// <reference path="../vendor_def/angularjs/angular.d.ts"/>
/// <reference path="../vendor_def/jQuery/jquery.d.ts"/>

//
// <div ng-controller="sub">
//
// </div>
module myModule {
	class MyController{
		public name:string;
		public age:number;
		constructor($scope:ngIscpe){

		}

	}
}

var  tabibito = angular.module('tabibito',[]);
tabibito.controller('myController',myModule.MyController);
