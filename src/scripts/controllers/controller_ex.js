/// <reference path="../vendor_def/angularjs/angular.d.ts"/>
/// <reference path="../vendor_def/jQuery/jquery.d.ts"/>
var myModule;
(function (myModule) {
    var Myservice = (function () {
        function Myservice() {
        }
        Myservice.prototype.fafa = function () {
            console.log('eeee');
        };
        return Myservice;
    })();
    myModule.Myservice = Myservice;
    var Sub = (function () {
        function Sub(morita) {
            this.morita = morita;
        }
        Sub.prototype.ccc = function () {
            console.log(this.morita.fafa());
        };
        return Sub;
    })();
    myModule.Sub = Sub;
    var eeee = angular.module('tabibito', []);
    eeee.service('morita', Myservice).controller('sub', myModule.Sub);
})(myModule || (myModule = {}));
