"use strict";
class MyController {
}
let faf = 'eeeee';
var tabibito = angular.module('tabibito', []);
tabibito.controller('myController', MyController);



var tabibitoModule;
(function (tabibitoModule) {
    class TabibitoClass {
    }
    tabibitoModule.TabibitoClass = TabibitoClass;
})(tabibitoModule || (tabibitoModule = {}));
var tabibito = angular.module('tabibito', ['ngSanitize', 'ngMessageFormat']);
tabibito.controller('SampleController', [tabibitoModule.TabibitoClass]);

angular.module('tabibito')
    .directive('mainInput', function () {
    return {
        template: '<div class="fafa"><li ng-repeat="(key,val) in datas">{{ key }}{{ val }}</li>'
            + '<li ng-repeat="data in datas">{{ $index }}</li>'
            + '<li ng-repeat="data in datas">{{ ($even) ? "○" : "x" }}</li>'
            + '<li ng-repeat="data in datas">{{ ($middle) ? "o" : "x" }}</li>'
            + '<li ng-repeat="data in datas">{{ data.age | number}}</li>'
            + '<li>{{ datas | json}}</li>'
            + '</div>'
    };
})
    .directive('apiDirective', function () {
    return {
        link: function () {
            var apiURL = 'data.json';
        }
    };
});

class Test {
    testFunc() {
        console.log('ffaaa');
    }
}
export default Test;

angular.module('tabibito')
    .factory('JsonData', function ($http) {
    return {
        getSampleData: function () {
            return $http.get('../data.json')
                .success(function (data, status, headers, config) {
                var time = new Date().getTime();
                while (new Date().getTime() < time + 1000)
                    ;
                return data;
            });
        }
    };
})
    .factory('sum', function () {
    return function () {
        let fafa;
        const fafaee = 'fafafa';
        return { 'hoge': 0, 'fuga': 0, 'sum': 0 };
    };
});

export function trimLeft(str) {
    return str.replace(/^¥s+/, '');
}
export function trimRight(str) {
    return str.replace(/^¥s+/, '');
}

var app;
(function (app) {
    var util;
    (function (util) {
        var strings;
        (function (strings) {
            function trimLeft(str) {
                return str.replace(/^¥s+/, '');
            }
            strings.trimLeft = trimLeft;
            function trimRight(str) {
                return str.replace(/^¥s+/, '');
            }
            strings.trimRight = trimRight;
        })(strings = util.strings || (util.strings = {}));
    })(util = app.util || (app.util = {}));
})(app || (app = {}));
