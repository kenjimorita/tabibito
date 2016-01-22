/// <reference path="../../../typings/tsd.d.ts" />



module tabibitoModule {
	export class TabibitoClass{
		public name : string = "fafa";
		constructor(){
			this.name = name;
		}
	}
}
var tabibito = angular.module('tabibito',['ngSanitize','ngMessageFormat']);
tabibito.controller('SampleController',[tabibitoModule.TabibitoClass]);
