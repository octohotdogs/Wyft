var getGoogleMaps = (elementId, LatLng, cb) => {
	var map = new google.maps.Map(document.getElementById(elementId), {
    zoom: 8,
    center: LatLng
	});
	cb(map);
}

var setMapMarker = (map, LatLng, title) => {
  var marker = new google.maps.Marker({
  	position: LatLng,
  	map: map,
  	title: title
  });
}

export { getGoogleMaps,  setMapMarker};