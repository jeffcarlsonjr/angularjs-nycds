angular.module('MyApp.Event')


.controller("EventController", function($state,$stateParams, ServiceShowEvent,ServiceEventGet){
	var self = this;

	self.eventId = $stateParams.id;
	//self.locZip = $stateParams.zip;

	ServiceShowEvent.getEventById(self.eventId)
	.then(function onSuccess(response){
		self.eventList = response;
	}, function onError(error){
		console.log(error)
	});

    self.goToMap = function(addr,zip,locZip) {

        $state.go('map', {addr: addr,zip: zip,loc: locZip})
    }

    if (navigator.geolocation) navigator.geolocation.getCurrentPosition(onPositionUpdate);
    function onPositionUpdate(position) {
		    self.lat = position.coords.latitude;
		    self.lng = position.coords.longitude;
		    self.latLng = String(self.lat+','+self.lng);

		    ServiceEventGet.getZips(self.latLng)
			.then(function onSuccess(response){
				console.log(response)
				self.locZip = response['results'][0]['address_components'][8]['long_name']
			}, function error(error){
				console.log(error)
			});
		}
})



