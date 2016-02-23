var csaapp = angular.module('csa', []);

csaapp.controller('navCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.location = $location.url();

    $(document).on( 'scroll', function(){
        if ($(window).scrollTop() > 90) {
          $('.navbar').addClass('fixed');
        } else {
          $('.navbar').removeClass('fixed');
        }
    });

    $( window ).resize(function() {
        FB.XFBML.parse();    
    });
}]);