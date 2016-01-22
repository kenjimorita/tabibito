/// <reference path="../../../typings/tsd.d.ts" />
"use strict";
var MyController = (function () {
    function MyController() {
    }
    return MyController;
})();
var tabibito = angular.module('tabibito', []);
tabibito.controller('myController', MyController);

exports.eee = 'iiii';

function trimLeft(str) {
    return str.replace(/^¥s+/, '');
}
function trimRight(str) {
    return str.replace(/^¥s+/, '');
}
