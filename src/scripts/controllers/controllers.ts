/// <reference path="../../../typings/tsd.d.ts" />



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
