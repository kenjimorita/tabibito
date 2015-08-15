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
