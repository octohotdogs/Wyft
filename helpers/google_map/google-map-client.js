var getGoogleMaps = (elementId, LatLng, cb) => {
	var map = new google.maps.Map(document.getElementById(elementId), {
    zoom: 8,
    center: LatLng
	});
	cb(map);
}

var setMapMarker = (map, LatLng, title, cb) => {
  var marker = new google.maps.Marker({
  	position: LatLng,
  	map: map,
  	title: title,
    wyft_session_id: LatLng['id'],
    street_address: LatLng['street_address']
  });

  marker.addListener('click', () => {
    if(cb !== undefined) {
      cb(marker);
    }    
  });
}

export { getGoogleMaps,  setMapMarker};