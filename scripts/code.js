function clickMoreOrLess(idBtn){
	var btn = document.getElementById(idBtn);
	if($(btn).text() == "More")
		btn.innerText = "Less";
	else if($(btn).text() == "Less")
		btn.innerText = "More";
}

window.onresize = changeFooter;
function changeFooter(){
	var div = document.getElementById("mainDiv");
	// alert(div.scrollHeight + " " + document.documentElement.clientHeight);
	if(div.scrollHeight <= document.documentElement.clientHeight){
		var foot = document.getElementById("footer");
		foot.classList.add("fixed-footer");
	}
	else{
		var foot = document.getElementById("footer");
		foot.classList.remove("fixed-footer");
	}
}