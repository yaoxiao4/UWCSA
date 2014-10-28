var csaapp = angular.module('csa', ['ngRoute']);

csaapp.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.

			when('/about/', {
				templateUrl: 'templates/about.html',
        		//controller: 'home'
      		}).
      when('/events/', {
   			templateUrl: 'templates/events.html',
      		 	//controller: 'PhoneDetailCtrl'
    		}).
      when('/join/', {
       	templateUrl: 'templates/join.html',
       		 	//controller: 'PhoneDetailCtrl'
      }).
      when('/contact/', {
       	templateUrl: 'templates/contact.html',
       		 	//controller: 'PhoneDetailCtrl'
      }).
      when('/', {
        templateUrl: 'templates/home.html',
            controller: 'homectrl'
      }).      
      otherwise({
        	redirectTo: '/'
      });

	}]);

csaapp.controller('homectrl', ['$scope', function($scope) {


}]);