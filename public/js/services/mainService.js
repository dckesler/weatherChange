var app = angular.module("weatherShiz");

app.service("mainService", function($http){
    this.getWeather = function(lat, long){
       return $http.get('http://localhost:8484/weather?lat='+lat+'&long='+long);
    }
});