angular.module('MyApp.Map')

.service('ServiceMap',function($resource){
	var self = this;
	// var headers = {
	// 			'Access-Control-Allow-Origin' : '*',
	// 			'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
	// 			'Content-Type': 'application/json',
	// 			'Accept': 'application/json'
	// 		};
	// var myGoogleMap = $resource('http://maps.googleapis.com/maps/api/js?key=AIzaSyAPp39YYk0X0gw4ebgaoFTL9YeT8gcarSU',{}
	// 	,{
	// 		eventLocation: {
	// 			method: 'GET',
	// 			headers: headers
	// 		}
	// 	});

	// self.getLocation = function(lat,lng)
	// {
	// 	return myGoogleMap.eventLocation({
	// 		lat: lat,
	// 		lng: lng
	// 	}).$promise
	// }

})

.controller("MapController", function(){
	var self = this;
	self.lat = 56.162939;
	self.long = 10.203921;

	
		self.map = {
                center: {
                        latitude: self.lat,
                        longitude: self.long
                },
                zoom: 8
                };
	
	
})