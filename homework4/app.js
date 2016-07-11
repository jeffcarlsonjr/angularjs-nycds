angular.module('myApp', ['MyServices'])

.controller('MusicController', function(User,Music){
	var self = this;
	self.musicObject = new Music();
	self.rock = new Music('Rock', [{name:'Rock 1'},{name:'Rock 2'},{name:'Rock 3'},{name:'Rock 4'},{name:'Rock 5'}]);
	self.pop = new Music('Pop', [{name:'Pop 1'},{name:'Pop 2'},{name:'Pop 3'},{name:'Pop 4'},{name:'Pop 5'},{name:'Pop 6'},{name:'Pop 7'}]);
	self.rap = new Music('Rap', [{name:'Rap 1'},{name:'Rap 2'},{name:'Rap 3'},{name:'Rap 4'},{name:'Rap 5'},{name:'Rap 6'},{name:'Rap 7'},{name:'Rap 8'},{name:'Rap 9'}]);
	
	self.show1 = true;
	self.show2 = true;
	self.show3 = true;
	
	self.showMusic = function(type){
		if(type === 'rock')
		{
			self.show1 = true;
			self.show2 = true;
			self.show3 = true;
		}
		else if(type === 'pop')
		{
			self.show1 = false;
			self.show2 = false;
			self.show3 = true;
		}
		else if(type === 'rap')
		{
			self.show1 = false;
			self.show2 = true;
			self.show3 = false;
		}
	}
	
	self.showRock = function(){
		self.allMusic = [self.musicObject.rockMusic(self.rock.songs.name,self.rock),self.musicObject.rockMusic(self.pop.songs.name,self.pop),self.musicObject.rockMusic(self.rap.songs.name,self.rap) ];
		self.users = new User(self.user.name,self.user.age,self.user.required,self.allMusic);
	console.log(self.users)
	}
	
})

