var csaapp = angular.module('csa', []);

csaapp.controller('navCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.location = $location.url();
    $scope.upcomingEvents = [
      {
        title: "upcomingtest1",
        backgroundImage: "url(images/events/staytuned.png)",
        caption: "caption",
        link: "url(images/events/staytuned.png)"
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
        title: "FROZEN",
        backgroundImage: "url(images/events/frozen.jpg)",
        caption: "A Bomber Social Night",
        link: "https://www.facebook.com/events/385498668241792/"
      },
      {
        title: "Therapy Dogs",
        backgroundImage: "url(images/events/therapydogs.jpg)",
        caption: "Don't let midterms DOG you down!",
        link: "https://www.facebook.com/events/399074040259797/'"
      },
      {
        title: "Eat Your Heart Out",
        backgroundImage: "url(images/events/eatyourheartout.jpg)",
        caption: "a TEAM speed eating contest in the SLC!",
        link: "https://www.facebook.com/events/751966311553709/?sid_reminder=16437325173096448"
      },
      {
        title: "A Night in Gangnam",
        backgroundImage: "url(images/events/nightingangnam.jpg)",
        caption: "Dress up as your favourite KPOP star and sing your hearts out!",
        link: "https://www.facebook.com/events/636466503147193/"
      },
      {
        title: "Poker Night",
        backgroundImage: "url(images/events/pokernight2.jpg)",
        caption: "UWCSA and UW Poker Club returns with another edition of POKER NIGHT!",
        link: "https://www.facebook.com/events/338272603021423/"
      },
      {
        title: "Bomber Social V2",
        backgroundImage: "url(images/events/bombersocial2.jpg)",
        caption: "Mix and mingle with other fellow students and meet new friends!",
        link: "https://www.facebook.com/events/553674981433041/"
      },
      // {
      //   title: "Halloween Horror Escape",
      //   backgroundImage: "url(images/events/horrorescape.jpg)",
      //   caption: "Will you and your friends be able to survive through this cursed cabin?",
      //   link: "https://www.facebook.com/events/710855105666068/"
      // },
      // {
      //   title: "Friendly Bumps",
      //   backgroundImage: "url(images/events/friendlybumps.jpg)",
      //   caption: "play in bubbles? yes please!",
      //   link: "https://www.facebook.com/events/595295273926246/"
      // },
      // {
      //   title: "Orientation Day",
      //   backgroundImage: "url(images/events/orientation.jpg)",
      //   caption: "Come meet your members and execs!",
      //   link: "https://www.facebook.com/events/1470748533185355/?ref=4"
      // },
      // {
      //   title: "Halloween Horror Escape",
      //   backgroundImage: "url(images/events/horrorescape.jpg)",
      //   caption: "Will you and your friends be able to survive through this cursed cabin?",
      //   link: "https://www.facebook.com/events/710855105666068/"
      // },
      // {
      //   title: "Friendly Bumps",
      //   backgroundImage: "url(images/events/friendlybumps.jpg)",
      //   caption: "play in bubbles? yes please!",
      //   link: "https://www.facebook.com/events/595295273926246/"
      // },
      // {
      //   title: "Orientation Day",
      //   backgroundImage: "url(images/events/orientation.jpg)",
      //   caption: "Come meet your members and execs!",
      //   link: "https://www.facebook.com/events/1470748533185355/?ref=4"
      // }
    ]

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
    };

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

    // $scope.changeNav = function(current){
    //   $('.centeredlist').removeClass("active");
    //   switch(current){
    //     case 1:
    //       $('#homeitem').addClass("active");
    //       break;
    //     case 2:
    //       $('#aboutitem').addClass("active");
    //       break;        
    //     case 3:
    //       $('#eventsitem').addClass("active");
    //       break;        
    //     case 4:
    //       $('#joinitem').addClass("active");
    //       break;
    //     case 5:
    //       $('#contactitem').addClass("active");
    //       break;
    //     case 6:
    //       $('#execsitem').addClass("active");
    //       break;
    //     default:
    //       $('#aboutitem').addClass("active");
    //       break;
    //   }
    // }

}]);