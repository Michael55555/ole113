window.onload = function(){
	$("#bar, #error1, #error2,#back, #top,#homet,#blogt, #codet").hide();
	var back = document.getElementById("back");
	back.addEventListener("click", function(){
	$("#back, #error1,#error2").hide();
	$("#desktop,#mobile,#footer,#q").show();
});
	var mobile = document.getElementById("mobile");
	var desktop = document.getElementById("desktop");
	var footer = document.getElementById("footer");
	var bar = document.getElementById("bar");
	mobile.addEventListener("click", 
function(){
	mobile.render();
	if(window.innerWidth > 800){
		$("#bar, #top, #homet").hide();
		$("#error2,#back").show();
		document.body.style.backgroundColor = "#212121";
	}
});
	desktop.addEventListener("click", function(){
	desktop.render();
		if(window.innerWidth < 800){
		$("#bar,#top, #homet").hide();
		$("#error1,#back").show();
        document.body.style.backgroundColor = "#212121";
	}
});
	var codes = document.getElementById("codes");
	var home = document.getElementById("home");
	var blog = document.getElementById("blog");
	var top = document.getElementById("top");
	codes.addEventListener("click", function(){
	top.innerHTML = "CODES";
	home.style.color = "white";
	codes.style.color = "#999999";
	blog.style.color = "white";
	$("#codet").show();
	$("#homet, #blogt").hide();
});
	home.addEventListener("click", function(){
	top.innerHTML = "HOME";
	home.style.color = "#999999";
	codes.style.color = "white";
	blog.style.color = "white";
	$("#homet").show();
	$("#blogt, #codet").hide();
});
	blog.addEventListener("click", function(){
	top.innerHTML = "BLOG";
	home.style.color = "white";
	codes.style.color = "white";
	blog.style.color = "#999999";
	$("#blogt").show();
	$("#homet, #codet").hide();
});
	var height = window.innerHeight - 58;
	function Mobile(){
		this.render = function(){
		$("#mobile,#desktop,#q, #footer").hide();
		$("#bar,#top").show();
		document.body.style.backgroundColor = "#f2f2f2";
		/* Browser detection from Adam Khoury on youtube*/
		var ba = ["Chrome", "Firefox", "Safari", "Opera", "MSIE", "Trident", "Edge"];
		var b, ua = navigator.userAgent;
		for(var i = 0; i < ba.length; i++){
			if(ua.indexOf(ba[i]) > -1){
				b = ba[i];
				break;
				}
			}
			if(b == "MSIE" || b == "Trident" || b == "Edge"){
				b = "Internet Explorer";
			}
			if(b == "Chrome"){
				bar.style.top = window.innerHeight - 70 + "px";
			}
			if(b != "Chrome"){
				bar.style.top = height + "px";
			}
		$("#homet").show();
		home.style.color = "#999999";
		document.getElementById("profile_pic").style.marginTop = "-5%";
		};
	}
	function Desktop(){
		this.render = function(){
			document.body.style.backgroundColor = "#f2f2f2";
			$("#mobile,#desktop,#q, #footer").hide();
			$("#bar,#top, #homet").show();
			document.getElementById("profile_pic").style.marginTop = "-1.8%";
			document.getElementById("htitle").style.marginTop = "-45%";
			if(window.innerWidth >= 1280){
				document.getElementById("profile_pic").style.marginTop = "-0.9%";
				document.getElementById("htitle").style.fontSize = "50px";
			}
		};
	}
	if(window.innerWidth > 800){
		mobile.style.top = "-300px";
		desktop.style.top = "-300px";
		footer.style.top = "-450px";
		footer.style.top = "-600px";
		bar.style.top = height + 5 + "px";
	}
var mobile = new Mobile();
var desktop = new Desktop();
};