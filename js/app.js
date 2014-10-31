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
        controller:'eventCtrl'
      		 	//controller: 'PhoneDetailCtrl'
    		}).
      when('/join/', {
       	templateUrl: 'templates/join.html',
       		 	//controller: 'PhoneDetailCtrl'
      }).
      when('/execs/', {
        templateUrl: 'templates/execs.html',
            //controller: 'PhoneDetailCtrl'
      }).
      when('/contact/', {
       	templateUrl: 'templates/contact.html',
       		 	//controller: 'PhoneDetailCtrl'
      }).    
      otherwise({
        	redirectTo: '/events'
      });

	}]);

csaapp.controller('navCtrl', ['$scope', '$location', '$route', function($scope,$location,$route) {
    $scope.location = $location.url();

    $scope.currlocation = function(){
      if ($scope.location == "/"){
        $('#homeitem').addClass("active");
      }
      else if ($scope.location == '/about/'){
        $('#aboutitem').addClass("active");
      }
      else if ($scope.location == '/events/'){
        $('#eventsitem').addClass("active");
      }
      else if ($scope.location == '/join/'){
        $('#joinitem').addClass("active");
      }
      else if ($scope.location == '/contact/'){
        $('#contactitem').addClass("active");
      }
      else if ($scope.location == '/execs/'){
        $('#execsitem').addClass("active");
      };
    }

    $scope.currlocation();

    $scope.changeNav = function(current){
      $('.centeredlist').removeClass("active");
      switch(current){
        case 1:
          $('#homeitem').addClass("active");
          break;
        case 2:
          $('#aboutitem').addClass("active");
          break;        
        case 3:
          $('#eventsitem').addClass("active");
          break;        
        case 4:
          $('#joinitem').addClass("active");
          break;
        case 5:
          $('#contactitem').addClass("active");
          break;
        case 6:
          $('#execsitem').addClass("active");
          break;
        default:
          $('#aboutitem').addClass("active");
          break;



      }

    }

}]);

csaapp.controller('eventCtrl', ['$scope', '$location', '$route', function($scope,$location,$route) {
    $scope.toEvent = function(link){

      window.open(link,'_blank');
    }
}]);