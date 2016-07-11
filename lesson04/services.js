angular.module('MyServices', [])


.factory('Grades', function(Help_Grader,GLOBAL_AVERAGE,GLOBAL_GRADELETTER,GLOBAL_PASSFAIL){
	function Grades(assignment){
		this.assignment = [];
		this.grade = '';
		this.average = '100';
		this.letterGrade = 'A';
		this.pass = 'Pass';
	}

	Grades.prototype.addAss = function(name,grade){
		this.assignment.push({name: name, grade: grade})
	
	}

	Grades.prototype.gradeSum = function(assignment){
		this.average = Help_Grader.gradeSum(assignment);
	}

	Grades.prototype.gradeLetter = function(average){
		this.letterGrade = Help_Grader.gradeLetter(average)
	}

	Grades.prototype.passFail = function(grade){
		this.pass = Help_Grader.passFail(grade)
	}

	Grades.prototype.remove = function(index){
		this.assignment.splice(index,1);
		if(this.assignment.length === 0)
		{
			this.average = GLOBAL_AVERAGE; 
			this.letterGrade = GLOBAL_GRADELETTER;
			this.pass = GLOBAL_PASSFAIL;
		}
	}

	return Grades;
})



.value('GLOBAL_AVERAGE', 100)
.value('GLOBAL_GRADELETTER', 'A')
.value('GLOBAL_PASSFAIL','Pass')

.service('Help_Grader', function(){
	 var self = this;

	 self.gradeSum = function(assignment){
		var total = 0;
		var average = 0;
		for(var i = 0; i < assignment.length; i++)
		{
			total += parseInt(assignment[i].grade);
			average = total/assignment.length
		}

		return average;

	}



	self.gradeLetter = function(average)
	{
		var grade = '';
		if(average >= 90)
		{
			grade = 'A'
		}
		else if(average >= 80)
		{
			grade = 'B'
		}
		else if(average >= 70)
		{
			grade = 'C'
		}
		else if(average >= 60)
		{
			grade = 'D'
		}
		else if(average < 60)
		{
			grade = 'F'
		}

		return grade;
	}

	self.passFail = function(average)
	{
		var passFail = '';

		if(average > 60){
			passFail = 'Pass';
		}
		else {
			passFail = 'Fail';
		}

		return passFail;
	}


})

