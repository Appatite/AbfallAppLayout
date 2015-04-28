/**
 * @author micha
 */



function einstellFunction(){
	var anfang = document.getElementById("anzeigeView");
	//alert("inner");
	anfang.setAttribute("class", "displaynone");
	var strasseneinstellung = document.getElementById("strassenauswahlDiv");
	strasseneinstellung.setAttribute("class", "displayblock");
	var topbottomInner = document.getElementById("infoHead");
	topbottomInner.setAttribute("class", "displaynone");
	var topbottomStrasse = document.getElementById("infoHeadStrasse");
	topbottomStrasse.setAttribute("class", "displayblock");
}





function geheZuMuelauswahl(){
	var strasseneinstellung = document.getElementById("strassenauswahlDiv");
	strasseneinstellung.setAttribute("class", "displaynone");
	var tonnenauswahl = document.getElementById("checkBoxDiv");
	tonnenauswahl.setAttribute("class", "displayblock");
	 
	
}

function zurueckFunction(){
	var strasseneinstellung = document.getElementById("strassenauswahlDiv");
	strasseneinstellung.setAttribute("class", "displaynone");
	var tonnenauswahl = document.getElementById("checkBoxDiv");
	tonnenauswahl.setAttribute("class", "displaynone");
	var anfang = document.getElementById("anzeigeView");
	anfang.setAttribute("class", "displayblock");
	var topbottomInner = document.getElementById("infoHead");
	topbottomInner.setAttribute("class", "displayblock");
	var topbottomStrasse = document.getElementById("infoHeadStrasse");
	topbottomStrasse.setAttribute("class", "displaynone");
	
}
/*=========================================================================================================
 * Ab hier die alte js
 * 
 ==============================================================================================================*/


function endApp(){
	navigator.app.exitApp();
}
