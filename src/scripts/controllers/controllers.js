/// <reference path="../vendor_def/angularjs/angular.d.ts"/>
/// <reference path="../vendor_def/jQuery/jquery.d.ts"/>
var tabibitoModule;
(function (tabibitoModule) {
    var TabibitoClass = (function () {
        function TabibitoClass(ngSanitize, ngMessageFormat) {
            var _this = this;
            this.ngSanitize = ngSanitize;
            this.ngMessageFormat = ngMessageFormat;
            this.favs = [
                'morita', 'oosato', 'morimoto', 'natsuki', 'moeko', 'miyo'
            ];
            this.menber = [
                { "namae": "kenji", "age": 30, "living": "kuki" },
                { "namae": "kenji2", "age": 20, "living": "kawasaki" },
                { "namae": "kenj3", "age": 30, "living": "megurdadao" },
                { "namae": "kenji4", "age": 20, "living": "kawasaki" },
                { "namae": "kenji5", "age": 30, "living": "meguro" },
                { "namae": "kenji6", "age": 20, "living": "kawasaki" },
                { "namae": "kenji7", "age": 30, "living": "kuki" },
                { "namae": "kenji8", "age": 20, "living": "kawasaki" },
                { "namae": "kenji9", "age": 40, "living": "meguro" }
            ];
            this.books = [
                'ふぁふぁふぁふぁふぁふぁふぁふぁふぁふぁふぁふぁ',
                'repeat1repeat1repeat1repeat1',
                'repeat1repeat1repeat1repeat1',
                'repeat2repeat2repeat2repeat2',
                'repeat3repeat3repeat3repeat3',
                'ふぁふぁふぁふぁふぁふぁふぁふぁふぁふぁふぁふぁ'
            ];
            this.myName = 'morita';
            this.greeting = 'さんこんにちは!';
            this.onclick = function () {
                _this.greeting = _this.myName + _this.greeting;
            };
            this.show = true;
            this.message = 'fafa';
            this.memo = "<p>iijfafa</p><script> alert('fafa');</script><button>わたし</button>";
        }
        return TabibitoClass;
    })();
    tabibitoModule.TabibitoClass = TabibitoClass;
})(tabibitoModule || (tabibitoModule = {}));
var tabibito = angular.module('tabibito', ['ngSanitize', 'ngMessageFormat']);
tabibito.controller('SampleController', [tabibitoModule.TabibitoClass]);
