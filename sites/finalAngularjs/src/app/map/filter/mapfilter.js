angular.module('MyApp.Map')

.filter('unsafe', function($sce) {

    return function(val) {

        return $sce.trustAsHtml(val);

    };
});