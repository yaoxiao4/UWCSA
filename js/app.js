var csaapp = angular.module('csa', []);

csaapp.controller('navCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.location = $location.url();
    $scope.upcomingEvents = [
      {
        title: "CUSA Annual Semi-Formal: Crystal Gala",
        backgroundImage: "url(images/events/cusa.png)",
        caption: "Annual CUSA Semi-Formal",
        link: "https://www.facebook.com/events/1725742570977981/"
      },
      {
        title: "upcomingtest2",
        backgroundImage: "url(images/events/frozen.jpg)",
        caption: "caption",
        link: "url(images/events/staytuned.png)"
      }
    ];

    $scope.pastEvents = [
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
      {
        title: "FROZEN",
        backgroundImage: "url(images/events/frozen.jpg)",
        caption: "♫ The booze never bothered me anyway... ♫",
        link: "https://www.facebook.com/events/385498668241792/"
      },
    ]

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

    $(document).on( 'scroll', function(){
        if ($(window).scrollTop() > 180) {
          $('.navbar').addClass('fixed');
        } else {
          $('.navbar').removeClass('fixed');
        }
    });

    $( window ).resize(function() {
        var container_width = $('#pageContainer').width();    
        $('#pageContainer').html('<div class="fb-page" data-href="https://www.facebook.com/facebook" data-width="' + container_width + '" data-height="250" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" data-show-posts="true"><div class="fb-xfbml-parse-ignore"><blockquote cite="https://www.facebook.com/facebook"><a href="https://www.facebook.com/facebook">Facebook</a></blockquote></div></div>');
        FB.XFBML.parse();    
    });

    $scope.changeNav = function(current){
      var selectedScrolltop = $('#' + current).offset().top - 70;
      $("html, body").animate({ scrollTop: selectedScrolltop, easing: 'easein' }, 400);
    };

}]);