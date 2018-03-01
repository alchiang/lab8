function initMap() {
	// add your code here
  const ucsd_coords = {lat:32.878809, lng:-117.235901};

  const map = new google.maps.Map(document.getElementById('map'), {
    center: ucsd_coords,
    zoom: 15
  });

  var marker = new google.maps.Marker({
    position: ucsd_coords,
    map: map,
    title:"Student Services Center"
  });
}
