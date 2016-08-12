angular.module('MyApp.Map')

.controller("MapController", function($stateParams,ServiceMap,Address,ServiceEventGet){
	var self = this;
	self.showSubway = true;
	self.showWalking = true;
	self.event = $stateParams.addr+'+'+$stateParams.zip;
	self.location = $stateParams.loc;
	self.address = new Address();

	ServiceMap.eventLatLng(self.event)
	.then(function onSuccess(response){
		
		self.eventAdd = new Address(response['results'][0]['geometry']['location']['lat'],response['results'][0]['geometry']['location']['lng']);
		self.evLat = response['results'][0]['geometry']['location']['lat'];
		self.evLng = response['results'][0]['geometry']['location']['lng'];
		self.evLoc = String(self.evLat +', '+self.evLng);
		ServiceMap.locationLatLng(self.location)
		.then(function onSuccess(response){

			self.location = new Address(response['results'][0]['geometry']['location']['lat'],response['results'][0]['geometry']['location']['lng'])
			self.address = [self.location,self.eventAdd];
			for (i = 0; i < self.address.length; i++){
				ServiceMap.createMarker(self.address[i]);
			}
			self.lat = response['results'][0]['geometry']['location']['lat'];
			self.lng = response['results'][0]['geometry']['location']['lng'];
			self.loc = String(self.lat +', '+ self.lng);

			//self.latLngInDegr = [[self.lat, self.lng],[ self.evLat, self.evLng]];
			//self.center = ServiceMap.getLatLngCenter(self.latLngInDegr);

				ServiceMap.travelDirections(self.loc, self.evLoc,'transit')
				.then(function onSuccess(response){ 
					self.subway = response['routes'][0]['legs'][0]['steps'];
				},function error(error){
					console.log(error)
				});

				ServiceMap.travelDirections(self.loc, self.evLoc,'walking')
				.then(function onSuccess(response){ 
					self.walk = response['routes'][0]['legs'][0]['steps'];
				},function error(error){
					console.log(error)
				})


		}, function error(error){
			console.log(error);
		});

		}, function error(error){
			console.log(error);
	});




	
 })