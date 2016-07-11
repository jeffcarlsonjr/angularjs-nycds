angular.module('MyServices', [])

.factory('User', function(){
	
	function User(name,age,level,songs){
		this.name = name,
		this.age = age,
		this.level = level,
		this.songs = songs
	}
	
	return User
})

.factory('Music', function(Helper_Music){
	
	function Music(type, songs){
		this.type = type,
		this.songs = songs
		
	}
	
	Music.prototype.rockMusic = function(title, music){
		this.popName = Helper_Music.rockMusic(title,music);
		return this.popName;
	}
	
	
	return Music
	
})

.service('Helper_Music',function(){

	var self = this

	self.rockMusic = function(title,music){
	if(title !== undefined){
		
			self.values = title;
			self.popName = [];

			angular.forEach(self.values, function(value,key){
				self.nameSong = music.songs[key].name
				self.popName.push({name:self.nameSong})
			})

			return self.popName;
		
		}
	}
})