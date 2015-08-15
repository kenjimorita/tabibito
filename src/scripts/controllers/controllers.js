/// <reference path="../../DefinitelyTyped-master/angularjs/angular.d.ts"/>
/// <reference path="../../DefinitelyTyped-master/jquery/jquery.d.ts"/>
var TodoCtrl = (function () {
    function TodoCtrl(tabibito) {
        this.tabibito = tabibito;
        console.log(tabibito);
    }
    TodoCtrl.prototype.setService = function () {
        alert('eeee');
    };
    return TodoCtrl;
})();
var tabibito = angular.module('tabibito', []);
tabibito.controller('todoCtrl', TodoCtrl)
    .service('tabibito', TodoCtrl.setService);
var eee = new TodoCtrl('fafa');
console.log(eee);
