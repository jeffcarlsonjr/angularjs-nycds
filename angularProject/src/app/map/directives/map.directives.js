angular.module('MyApp.Map')




.directive('cfTransitDirection' , function(){
	return{
		templateUrl: 'app/map/partials/cf-transit-direction.html',
		restrict: 'E'
	}
})

.directive('cfWalkingDirection' , function(){
	return{
		templateUrl: 'app/map/partials/cf-walking-direction.html',
		restrict: 'E'
	}
})