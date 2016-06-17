var myApp = angular.module('myApp',[]);

myApp.controller('MyController', function(){

	var self = this;

	self.changeColor = '';

	self.changeBlue = {
		background : 'blueBack',
		box1: 'orangeBack',
		box2: 'yellowBack'
	};

	self.changeGreen = {
		background : 'greenBack',
		box1: 'purpleBack',
		box2: 'orangeBack'
	};

	self.changeYellow = {
		background : 'yellowBack',
		box1: 'blueBack',
		box2: 'greenBack'
	};

	self.changeOrange = {
		background : 'orangeBack',
		box1: 'purpleBack',
		box2: 'blueBack'
	};

	self.changePurple = {
		background : 'purpleBack',
		box1: 'blueBack',
		box2: 'yellowBack'
	};


});