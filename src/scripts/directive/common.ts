

angular.module('myApp')
.directive('hierarcyFast',function(){
	return {
		template:
				'<div class="fafa"><li ng-repeat="(key,val) in datas">{{ key }}{{ val }}</li>'
				+'<li ng-repeat="data in datas">{{ $index }}</li>'
				+'<li ng-repeat="data in datas">{{ ($even) ? "○" : "x" }}</li>'
				+'<li ng-repeat="data in datas">{{ ($middle) ? "o" : "x" }}</li>'
				+'<li ng-repeat="data in datas">{{ data.age | number}}</li>'
				+'<li>{{ datas | json}}</li>'
				+'</div>'
	}
})
.directive('apiDirective',function(){
	return {
		link : function(){
			var apiURL = 'data.json'
		}
	}
});
