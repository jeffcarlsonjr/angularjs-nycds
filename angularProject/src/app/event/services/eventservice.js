angular.module('MyApp.Event')

.service('ServiceShowEvent', function($resource){

	var self = this;

	var myShowEventObject = $resource('/ajax/functions/show.php')

	self.getEventById = function(eventId){
		return myShowEventObject.get({
			id: eventId
		}).$promise
	}

})