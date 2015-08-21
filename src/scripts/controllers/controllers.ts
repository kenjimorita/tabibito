/// <reference path="../vendor_def/angularjs/angular.d.ts"/>
/// <reference path="../vendor_def/jQuery/jquery.d.ts"/>

module ToDoApp.Model {
	export interface ITodo {
		id?: number;
		text: string;
		done: boolean;
	}
	export interface IPromise<T>{
		success(callback: (result: T) => void):void;
	}
	export class Service{
		todoList : ITodo[];
		constructor(
			private $timeout: ng.ITimeoutService
		){
			
		}
		getList():IPromise<ITodo>{
			return {
				success: (callback) => {
					this.$timeout(()=> {
						callback(angular.copy(this.todoList));
					});
				}
			}
		}
		insert(){}
		update(){}
		deleteDoneItems(){}
	}
}


var tabibito = angular.module('tabibito',[]);
tabibito.controller('SampleController',SampleController);
