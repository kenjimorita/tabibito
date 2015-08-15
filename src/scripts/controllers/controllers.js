/// <reference path="../vendor_def/angularjs/angular.d.ts"/>
/// <reference path="../vendor_def/jQuery/jquery.d.ts"/>
var tabobito;
(function (tabobito) {
    var TodoCtrl = (function () {
        function TodoCtrl(serviceConsole, myValue) {
            this.serviceConsole = serviceConsole;
            this.myValue = myValue;
            this.myValue = myValue;
            console.log(myValue);
        }
        TodoCtrl.prototype.setService = function () {
            console.log('eee');
        };
        return TodoCtrl;
    })();
    tabobito.TodoCtrl = TodoCtrl;
})(tabobito || (tabobito = {}));
var tabibito = angular.module('tabibito', ['ngAria'])
    .factory('serviceConsole', function () {
    return { "value": "called!service" };
})
    .value('myValue', 'myValue');
tabibito.controller('todoCtrl', ['serviceConsole', 'myValue', tabobito.TodoCtrl]);
