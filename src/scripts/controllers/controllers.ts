/// <reference path="../vendor_def/angularjs/angular.d.ts"/>
/// <reference path="../vendor_def/jQuery/jquery.d.ts"/>

module tabibitoModule {
	// export interface ITodo {
	// }
	export interface TIfafa{
	}
	export class TabibitoClass implements TIfafa{

	}
}
var tabibito = angular.module('tabibito',['ngSanitize','ngMessageFormat']);
tabibito.controller('SampleController',[tabibitoModule.TabibitoClass]);
