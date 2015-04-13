/**
 * @author micha
 */

//document.getElementsByName("body").addEventListener("onload", colorFunction());



function colorFunction()
{
	//alert("Keine Icons");
	var menumitte = document.getElementById("menumittek");
	//alert(menumitte);
	menumitte.setAttribute("style","visibility:visible");
	var linksleer = document.getElementById("linksleerk");
	linksleer.setAttribute("style","visibility:visible");
	
}

function navReset(element){
	element.setAttribute("class", "displayblock");
	headerMenu.setAttribute("class", "displayblock");
		var menumitte = document.getElementById("menumitte");
	//alert(menumitte);
	menumitte.setAttribute("style","visibility:visible");
	var linksleer = document.getElementById("linksleer");
	linksleer.setAttribute("style","visibility:visible");
		balkenRechts.setAttribute("class", "displaynone");
	balkenLinks.setAttribute("class", "displaynone");
}

function menuFunction(idname){
	//alert(idname);
	var inner = document.getElementById(idname);
	var nav = document.getElementById("nav");
	var headerMenu = document.getElementById("headerMenu");
	var headerKundigung = document.getElementById("headerKundigung");
	var balkenRechts = document.getElementById("balkenRechts");
	var balkenLinks = document.getElementById("balkenLinks");
	inner.setAttribute("class", "displaynone");
	var navdisplay = nav.getAttribute("class");
	
	
	

	
	if (navdisplay == "displayblock") {

		nav.setAttribute("class", "displaynone");
		
		window.setInterval("navReset(nav)", 50);}
		
		else if (navdisplay == "displaynone"){
			nav.setAttribute("class", "displayblock");
			headerKundigung.setAttribute("class", "displaynone");
			headerMenu.setAttribute("class", "displayblock");
			
			}
	
	var wrapperStart = document.getElementById("wrapperStart");
	wrapperStart.style.backgroundColor = "white";
	wrapperStart.style.marginTop= "80px";
	wrapperStart.style.position = "fixed";
	wrapperStart.style.overflow = "scroll";
		var menumitte = document.getElementById("menumitte");
	menumitte.setAttribute("style","visibility:visible");
		var linksleer = document.getElementById("linksleer");
	linksleer.setAttribute("style","visibility:visible");
	balkenRechts.setAttribute("class", "displaynone");
	balkenLinks.setAttribute("class", "displaynone");
	/*var header = document.getElementById("header");
	header.setAttribute("class", "white");*/
}

function endApp(){
	navigator.app.exitApp();
}
