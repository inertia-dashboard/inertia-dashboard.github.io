var request = new XMLHttpRequest();
var mylat = 0;
var mylong = 0;
var me = new google.maps.LatLng(mylat, mylong);

var imageArray = new Array();
imageArray[0] = new Image();
imageArray[0].src = 'images/beautifulMountains.jpg';
imageArray[0].alt = "beautiful mountains by josh berl";
imageArray[1] = new Image();
imageArray[1].src = 'images/beautifulBeach.jpg';
imageArray[1].alt = "beautiful beach by josh berl";
imageArray[2] = new Image();
imageArray[2].src = 'images/beautifulForestFilledWithTrees.jpg';
imageArray[2].alt = "beautiful forest filled with trees by josh berl";
imageArray[3] = new Image();
imageArray[3].src = 'images/beautifulHillside.jpg';
imageArray[3].alt = "beautiful hillside by josh berl";
imageArray[4] = new Image();
imageArray[4].src = 'images/beautifulMountainsWithRiver.jpg';
imageArray[4].alt = "beautiful mountains with river by josh berl";
imageArray[5] = new Image();
imageArray[5].src = 'images/beautifulOceanView.jpg';
imageArray[5].alt = "beautiful ocean view by josh berl";
imageArray[6] = new Image();
imageArray[6].src = 'images/beautifulRollingHills.jpg';
imageArray[6].alt = "beautiful rolling hills by josh berl";
imageArray[7] = new Image();
imageArray[7].src = 'images/beautifulTreeAndSunset.jpg';
imageArray[7].alt = "beautiful tree and sunset by josh berl";
imageArray[8] = new Image();
imageArray[8].src = 'images/beautifulYetStarkMountain.jpg';
imageArray[8].alt = "beautiful yet stark mountain by josh berl";

function init() {
        getImage();
        getQuote();
        getLiveTime();
        initialize();
}

function getImage(){
        var i = Math.floor(Math.random() * 9);
        var background = new Image();
        background = imageArray[i];
        var imagename = background.alt;
        background = "url('" + imageArray[i].src + "')";
        document.body.style.backgroundImage = background;
        var e = document.getElementById("imagetitle");
        e.innerHTML = imagename;
}


var quoteArray = new Array();
quoteArray[0] = "things aren't looking good today.";
quoteArray[1] = "everybody you know is going to die.";
quoteArray[2] = "tech is a bubble.";
quoteArray[3] = "tons of people die for no reason, that's what makes death so terrifying";
quoteArray[4] = "death is inevitable";
quoteArray[5] = "fame is a vapor, the only certainty in life is oblivion";
quoteArray[6] = "some fish spend their whole lives swimming upstream only to be eaten by a bear";
quoteArray[7] = "you can't make toast back into bread";
quoteArray[8] = "i think we are just insects, we live a bit and then die and that is the lot. there is no mercy in things. there is not even a great beyond. there is nothing";
quoteArray[9] = "this is not going to work";
quoteArray[10] = "tons of people die for no reason, that's what makes life so terrifying";


function getQuote(){
	var i = Math.floor(Math.random() * 9);
	var element = document.getElementById("quotebox");
	console.log(quoteArray[i]);
	element.innerHTML = "\"" + quoteArray[i] + "\"";
}

function getLiveTime() {
	var today = new Date();
    var h = today.getHours();
    if ((h > 12) && (h < 25)) {
    	h = h - 12; // not in military time
    }
    var m = today.getMinutes();
    m = checkTime(m);
    var element2 = document.getElementById("time");
    element2.innerHTML = h + ":" + m;
    var t = setTimeout(getLiveTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}


function initialize(){
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
    var element = document.getElementById("temperaturebox");
    temperature = (Math.floor(1.8 * (temperature - 273) +32)); 
    temperature = parseInt(temperature);
    if (temperature < 0) weatherText = "it's " + temperature + " degrees outside. you should move.";
    else if (temperature >= 0 && temperature < 30) weatherText = "it's " + temperature + " degrees outside. you should probably just stay inside";
    else if (temperature >= 30 && temperature < 40) weatherText = "it's " + temperature + " degrees outside wear a big jacket or something";
    else if (temperature >= 40 && temperature < 50) weatherText = "it's " + temperature + " degrees outside wear a  jacket or something";
    else if (temperature >= 50 && temperature < 60) weatherText = "it's " + temperature + " degrees outside wear a light jacket or sweatshirt or something";
    else if (temperature >= 60 && temperature < 70) weatherText = "it's " + temperature + " degrees outside wear like jeans and a t shirt or something like that";
    else if (temperature >= 70 && temperature < 80) weatherText = "it's " + temperature + " degrees outside wear a t shirt and pants or shorts or something. who am i to say?";
    else if (temperature >= 80 && temperature < 90) weatherText = "it's " + temperature + " degrees outside wear shorts or something";
    else if (temperature >= 90 && temperature < 100) weatherText = "it's " + temperature + " degrees outside so you should probably stay inside";
    else if (temperature >= 100) weatherText = "it's " + temperature + " degrees outside. you should move.";
    else weatherText = "i don't know what it is like outside, look out a window or something.";
    element.innerHTML = weatherText;

};





