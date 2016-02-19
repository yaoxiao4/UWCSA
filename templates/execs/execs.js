csaapp.directive('execs', function() {
  return {
	restrict: 'E',
	templateUrl: 'templates/execs/execs.html',
	controller: function($scope) {	
		$scope.currentExecs = [
		  {
		    name: "William Li",
		    title: "Co-president",
		    pictureUrl: "url(images/execsw2016/WilliamLi.jpg"
		  },
		  {
		    name: "Edward Tam",
		    title: "Co-president",
		    pictureUrl: "url(images/execsw2016/EdwardTam.jpg"
		  },
		  {
		    name: "Lokhin Yuen",
		    title: "Co-president",
		    pictureUrl: "url(images/execsw2016/LokhinYuen.jpg"
		  },
		  {
		    name: "Rita Chen",
		    title: "VP Admin/Internal",
		    pictureUrl: "url(images/execsw2016/RitaChen.jpg"
		  },
		  {
		    name: "Rachel Poon",
		    title: "Director, Admin",
		    pictureUrl: "url(images/execsw2016/RachelPoon.jpg"
		  },
		  {
		    name: "Michael Luk",
		    title: "VP Events and Operations",
		    pictureUrl: "url(images/execsw2016/MichaelLuk.jpg"
		  },
		  {
		    name: "Sherlyn Vuong",
		    title: "VP Events and Operations",
		    pictureUrl: "url(images/execsw2016/SherlynVuong.jpg"
		  },
		  {
		    name: "David Zhang",
		    title: "Director, Operations",
		    pictureUrl: "url(images/execsw2016/DavidZhang.jpg"
		  },
		  {
		    name: "Herman Li",
		    title: "VP External",
		    pictureUrl: "url(images/execsw2016/HermanLi.jpg"
		  },
		  {
		    name: "Joyce Zhong",
		    title: "Director, External",
		    pictureUrl: "url(images/execsw2016/JoyceZhong.jpg"
		  },
		  {
		    name: "Andy Truong",
		    title: "VP Marketing",
		    pictureUrl: "url(images/execsw2016/AndyTruong.jpg"
		  },
		  {
		    name: "Nina Pan",
		    title: "Director, PR",
		    pictureUrl: "url(images/execsw2016/NinaPan.jpg"
		  },
		]
	}
  }
});