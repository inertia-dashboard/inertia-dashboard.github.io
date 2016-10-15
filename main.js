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

function init() {
        getImage();
        getQuote();
        getLiveTime();
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







