/**
 * @author micha
 */



window.addEventListener('resize', function(event){
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

}

function menuFunction(idname){
	var inner = document.getElementById(idname);
	inner.setAttribute("class", "displaynone");
	var nav = document.getElementById("nav");
	nav.setAttribute("class", "displayblock");
}


function endApp(){
	navigator.app.exitApp();
}
