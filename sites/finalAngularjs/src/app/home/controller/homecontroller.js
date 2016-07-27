angular.module('MyApp.Home')

.controller("HomeController", function($state, ServiceEventGet){
	var self = this;

	self.goToEvent = function(eventId,zip) {

		$state.go('event', {id: eventId, zip: zip})
	}

	self.setZip = function(){
		ServiceEventGet.getZips(self.zipcode)
		.then(function onSuccess(response){
			self.lat = response['results'][0]['geometry']['location']['lat'];
			self.long = response['results'][0]['geometry']['location']['lng'];

				ServiceEventGet.getEvents(self.lat,self.long)
				.then(function onSuccess(response){
					self.events = response;

				}, function onError(error){
					console.log(error);

				});
		}, function error(error){
			console.log(error)
		});

		self.zipcode = '';

	}

	console.log(self.zipcode)
})

