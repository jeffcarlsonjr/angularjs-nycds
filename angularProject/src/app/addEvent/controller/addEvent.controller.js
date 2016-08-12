angular.module('MyApp.AddEvent')

.controller('AddEventController', function($state,AddEventService){
	var self = this;

	self.addNewEvent = function(){

		if(self.addEvent.$valid)
		{

			AddEventService.addNewEvent(self.eventName, self.venueName,self.eventStart,self.eventVenuePhone,self.eventWebsite,self.eventAddress,self.eventCity,self.eventState,self.eventZip,self.eventDesc)
			.then(function onSuccess(){
				$state.go('home');
			},function onError(error){
				console.log(error)
			})
		}
	}


})