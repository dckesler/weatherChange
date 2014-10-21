var app = angular.module("weatherShiz");

app.directive("weatherClass", function(){
    return {
        restrict: 'A',
        replace: 'false',
        link: function (scope, elem, attr){
            //Dear Scope, Set the class based on my weather.
            // Sincerely, Directive.
            // PS Sorry I'm so freaking complicated.
            scope.$watch('weather', function(){
                //if(scope.weather.indexOf('loud'))
                elem.addClass(scope.weatherClass);
            });
        }
    }
})
.directive('backgroundClass', function(){
    return {
        restrict: 'A',
        link: function (scope, elem, attr){
            scope.$watch('weatherClass', function(){
                if(scope.weatherClass) {
                    var url = 'http://route66-2011.drycyclist.com/main.php?g2_view=core.DownloadItem&g2_itemId=113&g2_serialNumber=5';
                }
                elem.attr('src', url);
            })
        }
    }
});