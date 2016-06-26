var app = angular.module('MyApp', []);

app.controller('MyController', function(){
	var self = this;

	self.showHideFolder = true;


	self.file1 = ['Files.1','File1.2','File1.3']
	self.file2 = ['File2.1','File2.2','File2.3']
	self.file3 = ['File3.1','File3.2','File3.3']

	self.openFiles = function(){
		self.showHideFolder = !self.showHideFolder
	}

	self.leaveBlank = function(){
		self.files.name ='';
		self.files.file ='';
	}

	self.submitFileName = function(files){
		self.showHideFolder = false;
		if(self.files.file === 'f1')
		{
			self.file1.push(self.files.name);
			self.leaveBlank();
			
		}
		if(self.files.file === 'f2')
		{
			self.file2.push(self.files.name);
			self.leaveBlank();

		}
		if(self.files.file === 'f3')
		{
			self.file3.push(self.files.name);
			self.leaveBlank();
		}
	}
});

app.controller('ToDoController', function(){
	self = this;
	self.newToDo = [];
	self.int = 0;
	
	self.addToDo = function(){
		self.int++;
		self.newToDo.push({name: self.toDo.name, description: self.toDo.description, priority: self.toDo.priority, int: self.int})
		self.toDo.name  = '';
		self.toDo.description = '';
	}



})