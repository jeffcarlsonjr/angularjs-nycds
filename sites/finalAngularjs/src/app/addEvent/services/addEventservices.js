angular.module('MyApp.AddEvent')

.service('AddEventService', function($resource){


	var self = this;

	var addEventObject = $resource('/ajax/functions/addEvent.php',{
		eventName: '@eventName', 
		venueName: '@venueName',
		eventStart: '@eventStart',
		eventVenuePhone: '@eventVenuePhone',
		eventWebsite: '@eventWebsite',
		eventAddress: '@eventAddress',
		eventCity: '@eventCity',
		eventState: '@eventState',
		eventZip: '@eventZip',
		eventDesc: '@eventDesc'
	},
	{
		addEvent: {
			method: 'POST'
		}
	});


	self.addNewEvent = function(eventName,venueName,eventStart,eventVenuePhone,eventWebsite,eventAddress,eventCity,eventState,eventZip,eventDesc){
		return addEventObject.addEvent({
			eventName: eventName, 
			venueName: venueName,
			eventStart: eventStart,
			eventVenuePhone: eventVenuePhone,
			eventWebsite: eventWebsite,
			eventAddress: eventAddress,
			eventCity: eventCity,
			eventState: eventState,
			eventZip: eventZip,
			eventDesc: eventDesc
		}).$promise
	};

})

//$resource('/api/entries/:id', { id: '@_id' }, {