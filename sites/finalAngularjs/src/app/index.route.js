(function() {
  'use strict';

  angular
    .module('template')
    
    .config(function($stateProvider, $urlRouterProvider){

      $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/home/partials/home.html',
        controller: 'HomeController as ctrl'
      })
     .state('event', {
        url: '/event/:id',
        templateUrl: 'app/event/partials/event.html',
        controller: 'EventController as ctrl'
      })
     .state('map', {
        url: '/map',
        templateUrl: 'app/map/partials/map.html',
        controller: 'MapController as ctrl'
      })
      // .state('contacts', {
      //   url: '/contacts',
      //   template:
      // })

      $urlRouterProvider.otherwise('/')

    })

  

})();
