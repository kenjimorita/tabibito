/// <reference path="../vendor_def/angularjs/angular.d.ts"/>
/// <reference path="../vendor_def/jQuery/jquery.d.ts"/>

module tabibitoModule {
	// export interface ITodo {
	// }
	export interface TIfafa{
		message: string;
		memo: string;
		favs: string[];
		menber: Object;
		onclick: Function;
		greeting: string;
		show: boolean;
		myName: string;
		books: string[];
	}
	export class TabibitoClass implements TIfafa{
			constructor(public ngSanitize, public ngMessageFormat){
			}
			favs = [
				'morita','oosato','morimoto','natsuki','moeko','miyo'
			];
			menber = [
				{"namae" : "kenji" , "age" : 30 , "living" : "kuki"},
				{"namae" : "kenji2" , "age" : 20 , "living" : "kawasaki"},
				{"namae" : "kenj3" , "age" : 30 , "living" : "megurdadao"},
				{"namae" : "kenji4" , "age" : 20 , "living" : "kawasaki"},
				{"namae" : "kenji5" , "age" : 30 , "living" : "meguro"},
				{"namae" : "kenji6" , "age" : 20 , "living" : "kawasaki"},
				{"namae" : "kenji7" , "age" : 30 , "living" : "kuki"},
				{"namae" : "kenji8" , "age" : 20 , "living" : "kawasaki"},
				{"namae" : "kenji9" , "age" : 40 , "living" : "meguro"}
			],
			books = [
				'ふぁふぁふぁふぁふぁふぁふぁふぁふぁふぁふぁふぁ',
				'repeat1repeat1repeat1repeat1',
				'repeat1repeat1repeat1repeat1',
				'repeat2repeat2repeat2repeat2',
				'repeat3repeat3repeat3repeat3',
				'ふぁふぁふぁふぁふぁふぁふぁふぁふぁふぁふぁふぁ'
			]
			myName = 'morita';
			greeting = 'さんこんにちは!'
			onclick =  ()=>{
				this.greeting = this.myName + this.greeting
			}
			show = true;
			message = 'fafa';
			memo = "<p>iijfafa</p><script> alert('fafa');</script><button>わたし</button>";
	}
}
var tabibito = angular.module('tabibito',['ngSanitize','ngMessageFormat']);
tabibito.controller('SampleController',[tabibitoModule.TabibitoClass]);
