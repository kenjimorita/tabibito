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
