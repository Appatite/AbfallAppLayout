/**
 * @author micha
 */



/*window.addEventListener('resize', function(event){
  var height = window.innerHeight;
  //alert(height);
    var wrapper = document.getElementById("wrapper");
  wrapper.style.height = height + "px";
});




window.onload = function () {
var height = window.innerHeight;
  //alert(height);
    var wrapper = document.getElementById("wrapper");
  wrapper.style.height = height + "px";

}*/

function navReset(element){
	element.setAttribute("class", "displayblock");
}

function disclaimerFunction(){
	
	var disclaimer= document.getElementById("disclaimer");
	var nav = document.getElementById("nav");
	var navdisplay = nav.getAttribute("class");

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
}

/*function linkeinsOben(){
	
	/*var wrapperStart = document.getElementById("wrapperStart");
	wrapperStart.style.top = "-300px";*/
	
	/*var linkeinsoben = document.getElementById("linkeins");
	linkeinsoben.style
}*/



function endApp(){
	navigator.app.exitApp();
}
