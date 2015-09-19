/// <reference path="../vendor_def/angularjs/angular.d.ts"/>
/// <reference path="../vendor_def/jQuery/jquery.d.ts"/>
//
// <div ng-controller="sub">
//
// </div>
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



/// <reference path="../vendor_def/angularjs/angular.d.ts"/>
/// <reference path="../vendor_def/jQuery/jquery.d.ts"/>
var tabibitoModule;
(function (tabibitoModule) {
    var TabibitoClass = (function () {
        function TabibitoClass() {
        }
        return TabibitoClass;
    })();
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

/// <reference path="../vendor_def/angularjs/angular.d.ts"/>
/// <reference path="../vendor_def/jQuery/jquery.d.ts"/>
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
        return { 'hoge': 0, 'fuga': 0, 'sum': 0 };
    };
});

function trimLeft(str) {
    return str.replace(/^¥s+/, '');
}
exports.trimLeft = trimLeft;
function trimRight(str) {
    return str.replace(/^¥s+/, '');
}
exports.trimRight = trimRight;

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
