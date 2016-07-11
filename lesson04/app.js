angular.module('MyApp', ['MyServices'])

.controller('GradeController', function(Grades,GLOBAL_AVERAGE,GLOBAL_GRADELETTER,GLOBAL_PASSFAIL){
	var self = this;

	//self.assignment = [];
	
	self.student = new Grades()

	self.addAssignment = function(){
		
		self.student.addAss(self.assign.name,self.assign.grade)
		self.student.gradeSum(self.student.assignment)
		self.student.gradeLetter(self.student.average)
		self.student.passFail(self.student.average)
		self.assign.name = '';
		self.assign.grade = '';

		
	}

	self.remove = function(index){
		self.student.remove(index)
		
		self.student.gradeSum(self.student.assignment)
		self.student.gradeLetter(self.student.average)
		self.student.passFail(self.student.average)

		if(self.student.assignment.length === 0)
		{
			self.student.average = GLOBAL_AVERAGE; 
			self.student.letterGrade = GLOBAL_GRADELETTER;
			self.student.pass = GLOBAL_PASSFAIL;
		}
	}



})

