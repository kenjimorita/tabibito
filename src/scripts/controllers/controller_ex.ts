/// <reference path="../vendor_def/angularjs/angular.d.ts"/>
/// <reference path="../vendor_def/jQuery/jquery.d.ts"/>

//
// <div ng-controller="sub">
//
// </div>
module myModule {
export	class Myservice{
	constructor(){
	}
	fafa(){
		 console.log('eeee');
	}
}

export	class Sub{
	constructor(public morita){

	}
	ccc(){//上で定義しないでもよい
		 console.log(this.morita.fafa())//controllerにDIされたserviceはこの時点ではthisで参照可能
	}
}
var eeee  = angular.module('tabibito',[])
eeee.service('morita', Myservice).controller('sub', myModule.Sub);
}
