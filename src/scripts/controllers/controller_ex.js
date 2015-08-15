/// <reference path="../vendor_def/angularjs/angular.d.ts"/>
/// <reference path="../vendor_def/jQuery/jquery.d.ts"/>
var tabibito = angular.module('tabibito', ['ngAria']);
tabibito.service('fafaService', function () {
    this.values = 'Hi!!We are Service!!';
    this.setValue = function (key, value) {
        this.values[key] = value;
    };
    this.getValue = function (key) {
        return this.values[key];
    };
});
var mA;
(function (mA) {
    var Sub = (function () {
        function Sub(fafaService) {
            Sub.$inject = ['fafaService'];
            console.log(Sub.$inject);
        }
        Sub.prototype.func = function () {
            console.log('fafa');
        };
        return Sub;
    })();
    mA.Sub = Sub;
})(mA || (mA = {}));
var moritaControl = mA.Sub;
var eee = tabibito.controller('sub', moritaControl);
console.log(eee);
