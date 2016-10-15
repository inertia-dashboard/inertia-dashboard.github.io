// var request = new XMLHttpRequest();
// var mylat = 0;
// var mylong = 0;
// var me = new google.maps.LatLng(mylat, mylong);

// function initialize(){
//         console.log("init starting");
//         getMyLocation();    
// }


// function getMyLocation(){

//     console.log("starting getmyloc");
//     if (navigator.geolocation) {
//          navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//         x.innerHTML = "Geolocation is not supported by this browser.";
//     }
// }

// function showPosition(position){
//         console.log("got position");
//         getWeather(position.coords.latitude, position.coords.longitude);
// }


// var getWeather = function(mylat, mylong) {
//     gettingData = true;
//     var requestString = "http://api.openweathermap.org/data/2.5/weather?lat="
//                         + mylat + "&lon=" + mylong  
//                         + "&APPID=68857f90d32a5dd13ead22ecc79f8af8";
//     request = new XMLHttpRequest();
//     request.onload = proccessResults;
//     request.open("get", requestString, true);
//     request.send();

//         console.log("lat is " + mylat);
//         console.log("long is " + mylong);
// };

// var proccessResults = function() {
//     console.log(this);
//     var results = JSON.parse(this.responseText);
//     var temperature = results.main.temp; /* units are in kelvin lol */
//     temperature = (Math.floor(1.8 * (temperature - 273) +32)); 
//     console.log("about to do switch");
//     switch (temperature) {
//         case (temperature < 0):
//             weatherText = "it's " + temperature + " degrees outside. you should move.";
//             break;
//         case (temperature <= 30 && temperature > 0):
//             weatherText = "it's " + temperature + " degrees outside. you should probably just stay inside";
//             break;
//         case (temperature > 30 && temperature <= 40):
//             weatherText = "it's " + temperature + " degrees outside wear a big jacket or something";
//             break;
//         case (temperature > 40 && temperature <= 50):
//             weatherText = "it's " + temperature + " degrees outside wear a jacket or something";
//             break;
//         case (temperature > 50 && temperature <= 60):
//             weatherText = "it's " + temperature + " degrees outside wear a light jacket or sweatshirt or something";
//             break;
//         case (temperature > 60 && temperature <= 70):
//             weatherText = "it's " + temperature + " degrees outside wear like jeans and a t shirt or something like that";
//             break;
//         case (temperature > 70 && temperature <= 80):
//             weatherText = "it's " + temperature + " degrees outside wear a t shirt and pants or shorts or something. who am i to say?";
//             break;
//         case (temperature > 80 && temperature <= 90):
//             weatherText = "it's " + temperature + " degrees outside wear shorts or something";
//             break;
//         case (temperature > 90 && temperature <= 100):
//             weatherText = "it's " + temperature + " degrees outside so you should probably stay inside";
//             break;
//         case (temperature > 100):
//             weatherText = "it's " + temperature + " degrees outside. you should move.";     
//             break;                    
//         default: 
//             weatherText = "i don't know what it is like outside, look out a window or something.";
//     }
//     console.log("end of switch");
//     var element = document.getElementById("temperature");
//     element.innerHTML = temperature;

//   };