var app = angular.module('app', ['ngRoute']);


app.config(['$routeProvider',
         function($routeProvider) {
           $routeProvider
             .when('/home', {
               templateUrl: 'index.html',
               controller: 'usersctrl'
             })
             .when('/news', {
               templateUrl: 'news.html',
               controller: 'newsctrl'
             })
         }]);

app.controller('usersctrl', [ '$scope',function($scope) {
	
	
	$scope.title = 'Pankaj kumar';
	}

 ]);

app.controller('newsctrl', [ '$scope',function($scope) {
	
	
	$scope.title = 'News..!';
	}

 ]);

