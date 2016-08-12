angular.module('MyApp.Map')

.value('LAT_LGN',{
	lat : 40.78770529929453,
	lng : -73.95439240866368
})

.service('ServiceMap',function($resource,LAT_LGN){
	var self = this;
	var  showEventLatLng = $resource('https://maps.googleapis.com/maps/api/geocode/json',{},
	{
		getLatLong: {}
	});

	var getDirections = $resource('/maps/api/directions/json',{},
	{
		getDestinationArrival: {}
		
	});


	self.travelDirections = function(loc,evLoc,type){
		
		//var depart = depart.replace('lat:','');
		return getDirections.getDestinationArrival({
			mode: type,
			origin: loc,
			destination: evLoc
		}).$promise
	}

	self.locationLatLng = function(zip){
		return showEventLatLng.getLatLong({
			address: zip
		}).$promise
	}

	self.eventLatLng = function(addr){
		return showEventLatLng.getLatLong({
			address: addr
		}).$promise
	}


	self.mapOptions = {
	      zoom: 12,
	      center: new google.maps.LatLng(LAT_LGN.lat,LAT_LGN.lng),
	      mapTypeId: google.maps.MapTypeId.ROADMAP
	  }

	  
	  self.map = new google.maps.Map(document.getElementById('map'), self.mapOptions);

	  self.markers = [];
              
      self.infoWindow = new google.maps.InfoWindow();
      
      self.createMarker = function (info){

	      self.marker = new google.maps.Marker({
	          map: self.map,
	          position: new google.maps.LatLng(info.lat, info.lng),
	         
	      });

          google.maps.event.addListener(self.marker, 'click', function(){
              
              infoWindow.open(self.map, self.marker);
          });
         
          self.markers.push(self.marker);

          
      }

    // get the center of the 2 points
    self.rad2degr = function (rad) { return rad * 180 / Math.PI; }
	self.degr2rad = function (degr) { return degr * Math.PI / 180; }
	self.getLatLngCenter = function (latLngInDegr) {
	    var LATIDX = 0;
	    var LNGIDX = 1;
	    var sumX = 0;
	    var sumY = 0;
	    var sumZ = 0;

	    for (var i=0; i<latLngInDegr.length; i++) {
	        var lat = self.degr2rad(latLngInDegr[i][LATIDX]);
	        var lng = self.degr2rad(latLngInDegr[i][LNGIDX]);
	        // sum of cartesian coordinates
	        sumX += Math.cos(lat) * Math.cos(lng);
	        sumY += Math.cos(lat) * Math.sin(lng);
	        sumZ += Math.sin(lat);
	    }

	    var avgX = sumX / latLngInDegr.length;
	    var avgY = sumY / latLngInDegr.length;
	    var avgZ = sumZ / latLngInDegr.length;

	    // convert average x, y, z coordinate to latitude and longtitude
	    var lng = Math.atan2(avgY, avgX);
	    var hyp = Math.sqrt(avgX * avgX + avgY * avgY);
	    var lat = Math.atan2(avgZ, hyp);

	    return ([self.rad2degr(lat), self.rad2degr(lng)]);
	}

})