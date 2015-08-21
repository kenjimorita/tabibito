/// <reference path="../vendor_def/angularjs/angular.d.ts"/>
/// <reference path="../vendor_def/jQuery/jquery.d.ts"/>
var ToDoApp;
(function (ToDoApp) {
    var Model;
    (function (Model) {
        var Service = (function () {
            function Service($timeout) {
                this.$timeout = $timeout;
            }
            Service.prototype.getList = function () {
                var _this = this;
                return {
                    success: function (callback) {
                        _this.$timeout(function () {
                            callback(angular.copy(_this.todoList));
                        });
                    }
                };
            };
            Service.prototype.insert = function () { };
            Service.prototype.update = function () { };
            Service.prototype.deleteDoneItems = function () { };
            return Service;
        })();
        Model.Service = Service;
    })(Model = ToDoApp.Model || (ToDoApp.Model = {}));
})(ToDoApp || (ToDoApp = {}));
var tabibito = angular.module('tabibito', []);
tabibito.controller('SampleController', SampleController);
