const maps = require('@google/maps')

var googleMapsClient = maps.createClient({
	key: 'AIzaSyD-kW6DNa2J32FueMbGZnWwvwcq8oSsKiI'
});

var getGeocode = function(address, cb) {
	googleMapsClient.geocode({
		address: address
	}, function(err, response) {
		cb(err, response);
	});
}

export {getGeocode};