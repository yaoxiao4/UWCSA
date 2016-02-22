csaapp.directive('events', function() {
	return {
		restrict: 'E',
		templateUrl: 'templates/events/events.html',
		controller: function($scope) {
			$scope.upcomingEvents = [
			{
				title: "Night Market 2016",
				backgroundImage: "url(images/events/nightmarket2016.jpg)",
				caption: "you’ll fill up before you can manage to go through them all!",
				link: "https://www.facebook.com/events/1532196107078340/"
			},
			{
				title: "Can You Escape?",
				backgroundImage: "url(images/events/canyouescape.png)",
				caption: "Come join us for thrill! See if you can beat the test and escape in time!",
				link: "https://www.facebook.com/events/746934622108868/"
			}
			];

			$scope.pastEvents = [
			{
				title: "CUSA Annual Semi-Formal: Crystal Gala",
				backgroundImage: "url(images/events/cusa.png)",
				caption: "Annual CUSA Semi-Formal",
				link: "https://www.facebook.com/events/1725742570977981/"
			},
			{
				title: "BOMBER BLACKOUT",
				backgroundImage: "url(images/events/bomberblackout.jpg)",
				caption: "We’re going to make this one of the best nights of 2016!",
				link: "https://www.facebook.com/events/431565447029749/"
			},
			{
				title: "THE TASTING HALL: A NIGHT MARKET",
				backgroundImage: "url(images/events/tastinghall.jpg)",
				caption: "Come out and experience a bit of Asian culture right here on campus. ",
				link: "https://www.facebook.com/events/1627820754134340/"
			},
			{
				title: "Ride the Tide",
				backgroundImage: "url(images/events/ridethetide.jpg)",
				caption: "Be prepared for a night filled with summer feel-good tunes and beach balls!",
				link: "https://www.facebook.com/events/919499258104458/"
			},
			{
				title: "UWCSA x GEESERABBIT: BUBBLE SOCCER",
				backgroundImage: "url(images/events/bubblesoccer.jpg)",
				caption: "Come on down and play a game of bubble soccer with your friends! ",
				link: "https://www.facebook.com/events/1690798727801005/"
			},
			{
				title: "HANGMAN [ESCAPE ROOM]",
				backgroundImage: "url(images/events/hangman.jpg)",
				caption: "Will you live to tell the tale, or be locked in FOREVER? One way to find out.",
				link: "https://www.facebook.com/events/1675603609365107/"
			},
			]
		},
	};
});