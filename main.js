var imageArray = new Array();
imageArray[0] = new Image();
imageArray[0].src = 'images/beautifulMountains.jpg';
imageArray[1] = new Image();
imageArray[1].src = 'images/beautifulBeach.jpg';
imageArray[2] = new Image();
imageArray[2].src = 'images/beautifulForestFilledWithTrees.jpg';
imageArray[3] = new Image();
imageArray[3].src = 'images/beautifulHillside.jpg';
imageArray[4] = new Image();
imageArray[4].src = 'images/beautifulMountainsWithRiver.jpg';
imageArray[5] = new Image();
imageArray[5].src = 'images/beautifulOceanView.jpg';
imageArray[6] = new Image();
imageArray[6].src = 'images/beautifulRollingHills.jpg';
imageArray[7] = new Image();
imageArray[7].src = 'images/beautifulTreeAndSunset.jpg';
imageArray[8] = new Image();
imageArray[8].src = 'images/beautifulYetStarkMountain.jpg';

function init(){
        getImage();
        getQuote();
        console.log("init starting");
        getMyLocation(); 
        //getTime();
}

function getImage(){
        var i = Math.floor(Math.random() * 9);
        var background = new Image();
        background = "url('" + imageArray[i].src + "')";
        document.body.style.backgroundImage = background;
}


var quoteArray = new Array();
quoteArray[0] = "things aren't looking good today.";
quoteArray[1] = "everybody you know is going to die.";
quoteArray[2] = "tech is a bubble.";
function getQuote(){
	var i = Math.floor(Math.random() * 3);
	var element = document.getElementById("quotebox");
	console.log(quoteArray[i]);
	element.innerHTML = quoteArray[i];
	//$("quotebox").prepend("<p>" + quoteArray[i] + "<p>");
}
var request = new XMLHttpRequest();
var mylat = 0;
var mylong = 0;
var me = new google.maps.LatLng(mylat, mylong);

function init() {
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
    var requestString = "https://api.openweathermap.org/data/2.5/weather?lat="
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
    temperature = (1.8 * (temperature - 273) +32); 

    console.log("temp right now is: " + temperature);

  };