angular.module('MyApp.Event')


.controller("EventController", function($state,$stateParams, ServiceShowEvent,ServiceEventGet){
	var self = this;

	self.eventId = $stateParams.id;
	self.locZip = $stateParams.zip;

	ServiceShowEvent.getEventById(self.eventId)
	.then(function onSuccess(response){
		self.eventList = response;
	}, function onError(error){
		console.log(error)
	});

    self.goToMap = function(addr,zip,locZip) {

        $state.go('map', {addr: addr,zip: zip,loc: locZip})
    }



})



