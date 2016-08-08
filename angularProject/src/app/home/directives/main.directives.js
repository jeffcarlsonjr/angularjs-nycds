angular.module('MyApp.Home')



.directive('cfPastEvent', function() {
        return {
            templateUrl: 'app/home/partials/cf-past-event.html',
            restrict: 'E'
            
        }
    })

.directive('cfCurrentEvents', function() {
        return {
            templateUrl: 'app/home/partials/cf-current-events.html',
            restrict: 'E'
            
        }
    })
