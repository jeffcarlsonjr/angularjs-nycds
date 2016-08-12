angular.module('MyApp.Home')

.controller("HomeController", function($state, ServiceEventGet){
	var self = this;

	self.goToEvent = function(eventId) {
		
		$state.go('event', {id: eventId})
	}

	// self.setZip = function(){
	// 	ServiceEventGet.getZips(self.zipcode)
	// 	.then(function onSuccess(response){
			
	// 		self.lat = response['results'][0]['geometry']['location']['lat'];
	// 		self.long = response['results'][0]['geometry']['location']['lng'];

				
	// 	}, function error(error){
	// 		console.log(error)
	// 	});

	// 	//self.zipcode = '';

	// }

	if (navigator.geolocation) navigator.geolocation.getCurrentPosition(onPositionUpdate);
 
		function onPositionUpdate(position) {
		    self.lat = position.coords.latitude;
		    self.lng = position.coords.longitude;
		    self.latLng = String(self.lat+','+self.lng)

		    //get the zip from GeoLocate
		    ServiceEventGet.getZips(self.latLng)
			.then(function onSuccess(response){
				console.log(response)
				self.zipcode = response['results'][0]['address_components'][8]['long_name']
			}, function error(error){
				console.log(error)
			});

			//pull the events from the location
			ServiceEventGet.getEvents(self.lat,self.lng)
			.then(function onSuccess(response){
				self.events = response;
				self.zip = response[0][5];
			}, function onError(error){
				console.log(error);

			});

			ServiceEventGet.lastWeek()
			.then(function onSuccess(response){
				self.lastWeekEvent = response;
			},function onError(error){
				console.log(error)
			});
		
	}
	
})

