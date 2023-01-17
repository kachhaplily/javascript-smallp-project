

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        console.log("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    let mapobj={}

mapobj['Latitude']=position.coords.latitude,
mapobj['Longitude']=position.coords.longitude

  console.log(mapobj);
}
getLocation()