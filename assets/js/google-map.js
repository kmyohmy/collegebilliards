function initMap() {
  // The location of coords
  const coords = { lat: 32.75752213529076, lng: -117.08150954892733 };
  // The map, centered at coords
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: coords,
  });
  // The marker, positioned at coords
  const marker = new google.maps.Marker({
    position: coords,
    map: map,
  });
}
