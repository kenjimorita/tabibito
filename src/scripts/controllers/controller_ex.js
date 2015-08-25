/// <reference path="../vendor_def/angularjs/angular.d.ts"/>
/// <reference path="../vendor_def/jQuery/jquery.d.ts"/>
var myModule;
(function (myModule) {
    var MyController = (function () {
        function MyController($scope) {
        }
        return MyController;
    })();
})(myModule || (myModule = {}));
var tabibito = angular.module('tabibito', []);
tabibito.controller('myController', myModule.MyController);
