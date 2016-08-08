angular.module('MyApp.Map')

.factory('Address',function(ServiceMap){
	
	function Address(lat,lng){
		this.lat = lat,
		this.lng = lng
	}

	Address.prototype.subway = function(loc,evLoc){

		ServiceMap.travelDirections(loc, evLoc,'transit')
		.then(function onSuccess(response){ 
			this.subway = response['routes'][0]['legs'][0]['steps'];
		},function error(error){
			console.log(error)
		});
	}

	Address.prototype.walk = function(loc,evLoc){
		ServiceMap.travelDirections(loc, evLoc,'walk')
		.then(function onSuccess(response){ 
			return this.walk = response['routes'][0]['legs'][0]['steps'];

		},function error(error){
			console.log(error)
		})
	}

	return Address
})