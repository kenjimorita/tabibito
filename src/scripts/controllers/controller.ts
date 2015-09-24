/// <reference path="../../../typings/tsd.d.ts" />

"use strict";
import eee from 'test'

class MyController{
		public name:string;
		public age:string;
		public morita: string;
		public ffa: string;
}

var  tabibito = angular.module('tabibito',[]);
tabibito.controller('myController',MyController);
