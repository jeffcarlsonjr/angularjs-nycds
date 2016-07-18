(function() {
  'use strict';
  
  angular.module('template')

  .service("MainControllerDataService", function($resource){
    var self = this;

    var myResourceObject = $resource('http://maps.googleapis.com/maps/api/geocode/json', {
      
     },{
      getTheListOfAddress: {}
     });

    self.getAddresses = function(val){
      return myResourceObject.getTheListOfAddress({
        address: val
      })
      .$promise
    }
  })

  .controller('MainController', function(MainControllerDataService) {
     var self = this;

     self.getAddress = function(){
      self.list = []
        MainControllerDataService.getAddresses(self.address)
       .then(function onSuccess(response){

        for(var i = 0; i<response.results.length; i++)
        {
          self.list = response.results
        }
          return self.list
        })
        
     }

     
  })

})();