var request = new XMLHttpRequest();
var mylat = 0;
var mylong = 0;
var me = new google.maps.LatLng(mylat, mylong);
var map;
var lat = 0;
var lng = 0;

function init() {
map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
getMyLocation();
}

function getMyLocation() {
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(function (position) {
mylat = position.coords.latitude;
mylong = position.coords.longitude;
renderMap();
});
} else {
alert("Geolocation is not supported by your web browser. What a shame!")
}
}


var getWeather = function(mylat, mylng) {
    gettingData = true;
    var requestString = "http://api.openweathermap.org/data/2.5/weather?lat="
                        + mylat + "&lon" + mylng + 
                        + "&APPID=" + 35f169196cfcbb2a78bc505ceb3634a5;
    request = new XMLHttpRequest();
    request.onload = proccessResults;
    request.open("get", requestString, true);
    request.send();
};

  var proccessResults = function() {
    console.log(this);
    var results = JSON.parse(this.responseText);
    var temperature = results.main.temp;
  };

