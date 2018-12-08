//TopNav

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//Fabric Image Slider
var images = [
    './images/gallery/Picture1.jpg',
    './images/gallery/Picture2.jpg',
    './images/gallery/Picture3.jpg',
    './images/gallery/Picture4.jpg',
    './images/gallery/Picture5.jpg',
    './images/gallery/Picture6.jpg',
    './images/gallery/Picture7.jpg',
    './images/gallery/Picture8.jpg',
    './images/gallery/Picture9.jpg',
    './images/gallery/Picture10.jpg',
    './images/gallery/Picture11.jpg',
    './images/gallery/Picture12.jpg',
    './images/gallery/Picture13.jpg',
    './images/gallery/Picture14.jpg',
    './images/gallery/Picture15.jpg',
    './images/gallery/Picture16.jpg',
    './images/gallery/Picture17.jpg',
    './images/gallery/Picture18.jpg',
    './images/gallery/Picture19.jpg',
    './images/gallery/Picture20.jpg',
    './images/gallery/Picture21.jpg',
    './images/gallery/Picture22.jpg',
    './images/gallery/Picture24.jpg',
    './images/gallery/Picture25.jpg',
    './images/gallery/Picture26.jpg',
    './images/gallery/Picture27.jpg',
    './images/gallery/Picture28.jpg',
    './images/gallery/Picture29.jpg',
    './images/gallery/Picture30.jpg',
    './images/gallery/Picture31.jpg',
    './images/gallery/Picture32.jpg',
    './images/gallery/Picture33.jpg',
    './images/gallery/Picture34.jpg',
    './images/gallery/Picture35.jpg',
    './images/gallery/Picture36.jpg',   
];

var num = 0;

function next(){
	var fabrics = document.getElementById("fabrics");
	num++;

	if (num>= images.length){
		num = 0;
	}

	fabrics.src = images[num];
}


function prev(){
	var fabrics = document.getElementById("fabrics");
	num--;
	if (num < 0) {
		num = images.length-1;
	}
	fabrics.src = images[num];
}