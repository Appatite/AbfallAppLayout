/**
 * @author micha
 */

function showCircle(element) {
	element.setAttribute("style","visibility:visible");
}

/*document.querySelector('odPortrait').addEventListener("animationiteration", endFunction());
document.querySelector('odLandscape').addEventListener("animationiteration", endFunction());
alert("Element gefangen");*/

/*document.querySelector('#odPortrait').addEventListener('animationstart', function(event) {
  alert("Hallo odPortrait");
});



var minql = window.matchMedia("(min-width: 600px)");

 if (minql.matches) {

     alert("matchMedia landscape");

 }
 
 var maxql = window.matchMedia("(max-width: 400px)");

 if (maxql.matches) {

     alert("matchMedia portrait");

 }*/


function getOrientationValuePortrait (mediaQueryList) {
    alert("orientation portrait: " + mediaQueryList.matches);
}

function getOrientationValueLandscape (mediaQueryList) {
    alert("orientation landscape: " + mediaQueryList.matches);
}
 
portraitOrientationCheck = window.matchMedia("(orientation: portrait)");
portraitOrientationCheck.addListener(adaptCircle());

landscapeOrientationCheck = window.matchMedia("(orientation: landscape)");
landscapeOrientationCheck.addListener(adaptCircle());


function endFunction(){

	var height = window.innerHeight;
	var width = window.innerWidth;
	//alert(width);


if(height>width){
var circleWidth = 0.8 * width;
var circleHeight = circleWidth;	
}

else {
	var circleWidth = 0.8 * height;
	var circleHeight = circleWidth;
	
}


var circletop = (height - circleHeight)/2;

 	
  circle.style.height = circleHeight + "px";
  circle.style.width = circleWidth + "px";
  circle.style.top = circletop + "px";
	//circle.setAttribute("class", "displaytable");
 
 
 
  
	circle.setAttribute("class", "displaytable");
	
		console.log("function animation end");
	alert("function animation end");
}

function adaptCircle(){

var height = window.innerHeight;
var width = window.innerWidth;

//alert(width);


if(height>width){
var circleWidth = 0.8 * width;
var circleHeight = circleWidth;	
}

else {
	var circleWidth = 0.8 * height;
	var circleHeight = circleWidth;
	
}


var circletop = (height - circleHeight)/2;

 	
  circle.style.height = circleHeight + "px";
  circle.style.width = circleWidth + "px";
  circle.style.top = circletop + "px";
  circle.setAttribute("class", "displaytable");
}



window.onload = function () {
var height = window.innerHeight;
var width = window.innerWidth;

//alert(width);


if(height>width){
var circleWidth = 0.8 * width;
var circleHeight = circleWidth;	
}

else {
	var circleWidth = 0.8 * height;
	var circleHeight = circleWidth;
	
}


var circletop = (height - circleHeight)/2;

 	
  circle.style.height = circleHeight + "px";
  circle.style.width = circleWidth + "px";
  circle.style.top = circletop + "px";
  circle.setAttribute("class", "displaytable");
  
 
 //console.log(circleWidth);
 
  

}

function navReset(element){
	element.setAttribute("class", "displayblock");
}

function disclaimerFunction(){
	
	var disclaimer= document.getElementById("disclaimer");
	var nav = document.getElementById("nav");
	var navdisplay = nav.getAttribute("class");
	//nav.circle.setAttribute("style","visibility:hidden");

	if(navdisplay == "displaynone") {
			disclaimer.setAttribute("class", "displayblock");
			
		}
		
		else if (navdisplay == "displayblock") {

		nav.setAttribute("class", "displaynone");
		
		window.setInterval("navReset(nav)", 50);

		
	}
	


}

function disclaimerHideFunction(){
	var nav = document.getElementById("nav");
	var navdisplay = nav.getAttribute("class");
	
	if(navdisplay == "displaynone") {
	
	var disclaimer= document.getElementById("disclaimer");
	disclaimer.setAttribute("class", "displaynone");
	var inner = document.getElementById("inner");
	inner.setAttribute("class", "displaynone");
	

	
	
	
	nav.setAttribute("class", "displayblock");
	
	var wrapperStart = document.getElementById("wrapperStart");
	wrapperStart.style.backgroundColor = "white";
	wrapperStart.style.marginTop= "80px";
	wrapperStart.style.position = "fixed";
	wrapperStart.style.overflow = "scroll";
	var menumitte = document.getElementById("menumitte");
	menumitte.setAttribute("style","visibility:visible");
		var linksleer = document.getElementById("linksleer");
	linksleer.setAttribute("style","visibility:visible");
	}
	
	
	
	
}


function menuFunction(idname){
	//alert(idname);
	var inner = document.getElementById(idname);
	var nav = document.getElementById("nav");
	inner.setAttribute("class", "displaynone");
	var navdisplay = nav.getAttribute("class");
	
	//nav.setAttribute("class", "displayblock");
	

	
	if (navdisplay == "displayblock") {

		nav.setAttribute("class", "displaynone");
		
		window.setInterval("navReset(nav)", 50);}
		
		else if (navdisplay == "displaynone"){
			nav.setAttribute("class", "displayblock");}
	
	var wrapperStart = document.getElementById("wrapperStart");
	wrapperStart.style.backgroundColor = "white";
	wrapperStart.style.marginTop= "80px";
	wrapperStart.style.position = "fixed";
	wrapperStart.style.overflow = "scroll";
		var menumitte = document.getElementById("menumitte");
	menumitte.setAttribute("style","visibility:visible");
		var linksleer = document.getElementById("linksleer");
	linksleer.setAttribute("style","visibility:visible");
}

/*function linkeinsOben(){
	
	/*var wrapperStart = document.getElementById("wrapperStart");
	wrapperStart.style.top = "-300px";*/
	
	/*var linkeinsoben = document.getElementById("linkeins");
	linkeinsoben.style
}*/

function showIcons(){
	alert("Keine Icons");
	var menumitte = document.getElementById("menumitte");
	//alert(menumitte);
	menumitte.setAttribute("style","visibility:visible");
	var linksleer = document.getElementById("linksleer");
	linksleer.setAttribute("style","visibility:visible");
}

//document.getElementById("myBtn").addEventListener("click", myFunction);





function endApp(){
	navigator.app.exitApp();
}
