angular.module('MyApp.Home')


.service('ServiceEventGet', function($resource){

	var self = this;


	var myLatLongObject = $resource('http://maps.googleapis.com/maps/api/geocode/json',{},
	{
		getLatLong: {}
	})

	var myEventObject = $resource('/ajax/functions/showAllEvents.php?lat=:lat&long=:long',{
		
	}, 
	{
		getAllEvents: {
			method: 'GET',
			isArray: true
		}
	});

	var lastWeekEventObject = $resource('/ajax/functions/showLastWeeks.php',{

	},
	{
		getLastWeek: {
			method: 'GET',
			isArray: true
		}
	});

	self.getEvents = function(lat,long){
		return myEventObject.getAllEvents({
			lat: lat,
			long: long
		}).$promise

	};

	self.getZips = function(latlng){
		return myLatLongObject.getLatLong({
			latlng: latlng
		}).$promise
	
	};

	self.lastWeek = function(){
		return lastWeekEventObject.getLastWeek({}).$promise
	}


})