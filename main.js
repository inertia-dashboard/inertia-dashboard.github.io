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
}

function getImage(){
        var i = Math.random() * 8;
        console.log(i);
        //background image = imageArray[i];
        var background = new Image();
        background = imageArray[i];
        console.log(background);
        document.body.style.backgroundImage = background;
}

var quoteArray = new Array();
quoteArray[0] = "Things aren't looking good today";
function getQuote(){

}