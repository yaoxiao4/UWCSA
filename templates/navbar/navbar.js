csaapp.directive('navbar', function() {
  return {
	restrict: 'E',
	templateUrl: 'templates/navbar/navbar.html',
	controller: function($scope) {
		$scope.changeNav = function(current) {
		  var selectedOffset = $('#' + current).offset(),
		      scrollLocation = 0;
		  if (selectedOffset) {
		      scrollLocation = selectedOffset.top - 70;
		  }
		  $("html, body").animate({ scrollTop: scrollLocation, easing: 'easein' }, 400);
		};
	}
  }
});