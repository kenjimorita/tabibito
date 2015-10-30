/// <reference path="../../../typings/tsd.d.ts" />

"use strict";
// import eee from 'test'

class MyController{
    constructor(public value){
        this.value = value;
    }
    public name:string;
    public age:string;
    public morita: string;
    public ffa: string;
}

var  tabibito = angular.module('tabibito',[]);
tabibito.value('value',function(){
    return [
       {
           name : 'kenji',
           age : 92
       },
       {
           name : 'kenji',
           age : 92
       }

    ]
})
tabibito.controller('myController', function() { new MyController(); });
