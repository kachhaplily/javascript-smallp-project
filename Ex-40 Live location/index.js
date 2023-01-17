function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        console.log("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    let mapobj={}

mapobj['lat']=position.coords.latitude,
mapobj['lng']=position.coords.longitude

  console.log(mapobj);
  initMap(mapobj)
}
getLocation()
// Initialize and add the map
function initMap(mapobj) {
    // The location of Uluru
    const uluru = mapobj;
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 30,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

window.initMap = initMap;