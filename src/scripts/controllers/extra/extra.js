var myApp = angular.module('myApp', []);
myApp.value("myData", {
  "data": [{
    "namae": "kenji",
    "age": 30,
    "status": "yes",
    "living": "kuki"
  }, {
    "namae": "kenji2",
    "age": 20,
    "status": "yes",
    "living": "kawasaki"
  }, {
    "namae": "kenj3",
    "age": 30,
    "status": "no",
    "living": "megurdadao"
  }, {
    "namae": "kenji4",
    "age": 20,
    "status": "yes",
    "living": "kawasaki"
  }, {
    "namae": "kenji5",
    "age": 30,
    "status": "no",
    "living": "meguro"
  }, {
    "namae": "kenji6",
    "age": 20,
    "status": "yes",
    "living": "kawasaki"
  }, {
    "namae": "kenji7",
    "age": 30,
    "status": "no",
    "living": "kuki"
  }, {
    "namae": "kenji8",
    "age": 20,
    "status": "yes",
    "living": "kawasaki"
  }, {
    "namae": "kenji9",
    "age": 40,
    "status": "yes",
    "living": "meguro"
  }]
});
myApp.service('filterDateService', ['myData', function(myData) {
  console.log(myData);
  this.getMydata = function() {
    return myData;
  }
}]);
myApp.filter('myFilter',function(){
	if(this.checked){
		return data.status["no"]
	}
})
myApp.controller('SampleController', ['filterDateService',
  function(filterDateService) {
    this.getedService = filterDateService.getMydata();
  }
]);
