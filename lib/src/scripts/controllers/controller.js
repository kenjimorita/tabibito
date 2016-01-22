/// <reference path="../../../typings/tsd.d.ts" />
"use strict";
var MyController = (function () {
    function MyController(value) {
        this.value = value;
        this.value = value;
    }
    return MyController;
})();
var tabibito = angular.module('tabibito', []);
tabibito.value('value', function () {
    return [
        {
            name: 'kenji',
            age: 92
        },
        {
            name: 'kenji',
            age: 92
        }
    ];
});
tabibito.controller('myController', function () { new MyController(); });
