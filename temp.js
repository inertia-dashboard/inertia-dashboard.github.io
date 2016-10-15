var request = new XMLHttpRequest();
var mylat = 0;
var mylong = 0;
var me = new google.maps.LatLng(mylat, mylong);

function initialize() {
        console.log("init starting");
        getMyLocation();    
}


function getMyLocation(){

    console.log("starting getmyloc");
    if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position){
        console.log("got position");
        getWeather(position.coords.latitude, position.coords.longitude);
}


var getWeather = function(mylat, mylong) {
    gettingData = true;
    var requestString = "http://api.openweathermap.org/data/2.5/weather?lat="
                        + mylat + "&lon=" + mylong  
                        + "&APPID=68857f90d32a5dd13ead22ecc79f8af8";
    request = new XMLHttpRequest();
    request.onload = proccessResults;
    request.open("get", requestString, true);
    request.send();

        console.log("lat is " + mylat);
        console.log("long is " + mylong);
};

var proccessResults = function() {
    console.log(this);
    var results = JSON.parse(this.responseText);
    var temperature = results.main.temp; /* units are in kelvin lol */
    temperature = (Math.floor(1.8 * (temperature - 273) +32)); 
    var element = document.getElementById("temperature");
    element.innerHTML = temperature;

  };