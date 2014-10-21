var app = angular.module("weatherShiz");

app.controller("mainCtrl", function($scope, mainService){
    $scope.loadingWeather = true;
    $scope.getWeather = function(){
        var geo = navigator.geolocation;
        var success = function(position){
            console.log(position);
            mainService.getWeather(position.coords.latitude, position.coords.longitude).then(function(response){
                $scope.weather = response.data.icon;
                $scope.checkWeather(response.data.icon);
                $scope.loadingWeather = false;
            });
        };
        var error = function(err){
            console.log(err);
        };
        var settings = {
            enableHighAccuracy: true,
            maximumAge: 10000000
        };
        geo.getCurrentPosition(success, error, settings);
    };
    $scope.checkWeather = function(icon){
        var theWeather;
        switch(icon){
            case "partlycloudy":
                theWeather = "partlyCloudy";
                $scope.loadedStyle = "../../styles/"+theWeather+".css";
                break;
            case "cloudy":
            case "mostlycloudy":
                theWeather = "cloudy";
                $scope.loadedStyle = "../../styles/"+theWeather+".css";
                break;
            case "clear":
                theWeather = "sunny";
                $scope.loadedStyle = "../../styles/"+theWeather+".css";
                break;
            case "flurries":
            case "sleet":
            case "snow":
                theWeather = "snow";
                $scope.loadedStyle = "../../styles/"+theWeather+".css";
                break;
            case "tstorms":
                theWeather = "thunderStorm";
                $scope.loadedStyle = "../../styles/"+theWeather+".css";
                break;
        }
    };

});