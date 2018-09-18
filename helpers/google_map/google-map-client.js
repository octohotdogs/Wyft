var getGoogleMaps = (elementId, LatLng, cb) => {
	var map = new google.maps.Map(document.getElementById(elementId), {
    zoom: 12,
    center: LatLng
	});
	cb(map);
}

var setMapMarker = (map, LatLng, title, cb) => {
  var guest_icon = 'https://maps.google.com/mapfiles/kml/shapes/library_maps.png';
  var wifi_icon = 'https://maps.google.com/mapfiles/kml/pal3/icon23.png';
  var icons = {
    Guest: guest_icon,
    Host: wifi_icon
  };
  var icon = icons[title];

  var marker = new google.maps.Marker({
  	position: LatLng,
  	map: map,
    icon: icon,
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