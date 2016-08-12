angular.module('MyApp.Home')

.filter('shortString', function () {
    return function (string) {
    	var length = 50;
		var trimmedString = string.substring(0, length);

		return trimmedString;
    }
});