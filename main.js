window.onload = function(){
    $(".div").hide();
    var height = window.innerHeight - 60;
    var tcolor = "default";
    var hmain = document.getElementById("hmain");
	var bar = document.getElementById("bar");
	var theme = document.getElementById("tcircle");
	var tcircle = document.getElementById("tcircle");
	var sinfo = document.getElementById("sinfo");
	var settings = document.getElementById("settings");
	var sback = document.getElementById("sback");
	var codes = document.getElementById("codes");
	var home = document.getElementById("home");
	var blog = document.getElementById("project");
	var top = document.getElementById("top");
	var profile_pic = document.getElementById("profile_pic");
	var htitle = document.getElementById("htitle");
	var mfooter = document.getElementsByClassName("mfooter");
	theme.addEventListener("click", function(){
		if(tcolor != "gray"){
		    tcolor = "gray";
		    		tcircle.style.left = "30px";
			document.body.style.backgroundColor = "#f2f2f2";
		sinfo.style.color = "black";
		stitle.style.color = "black";
		sback.style.color = "black";
		tcircle.style.backgroundColor = "#212121";
		
		}else{
		    tcolor = "default";
		    sinfo.style.color = "white";
			stitle.style.color = "white";
			sback.style.color = "white";
		    tcircle.style.left = "11.5px";
			document.body.style.backgroundColor = "#212121";
			tcircle.style.backgroundColor = "white";
		}
    });
	sback.addEventListener("click", function(){
		if(window.innerWidth > 800){
			desktop.render();
		}else{
			mobile.render();
		}
    });
	settings.addEventListener("click", function(){
		$("#homet, #bar, #top, #projectt, #codet, #settings").hide();
		$("#settingst, #sback").show();
		document.body.style.backgroundColor = "#212121";
	});
	codes.addEventListener("click", function(){
		top.innerHTML = "CODES";
		home.style.color = "white";
		codes.style.color = "#999999";
		blog.style.color = "white";
		$("#codet").show();
		$("#homet, #projectt").hide();
    });
	home.addEventListener("click", function(){
		top.innerHTML = "HOME";
		home.style.color = "#999999";
		codes.style.color = "white";
		project.style.color = "white";
		$("#homet").show();
		$("#projectt, #codet").hide();
    });
	project.addEventListener("click", function(){
		top.innerHTML = "PROJECTS";
		home.style.color = "white";
		codes.style.color = "white";
		project.style.color = "#999999";
		$("#projectt").show();
		$("#homet, #codet").hide();
    });
/* mobile render */
    function Mobile(){
    this.render = function(){
        $("#sback, #settingst").hide();
        $("#bar,#top, #settings").show();
        if(tcolor == "gray"){
            document.body.style.backgroundColor = "#212121";
            bar.style.backgroundColor = "#f2f2f2";
            top.style.backgroundColor = "#f2f2f2";
            document.body.style.color = "white";
        }else{	document.body.style.backgroundColor = "#f2f2f2";
            bar.style.backgroundColor = "#212121";
            top.style.backgroundColor = "#212121";
            document.body.style.color = "black";
        }
        $("#homet").show();
        home.style.color = "#999999";
        profile_pic.style.marginTop = "-5%";
		bar.style.top = height + "px";
		mfooter[0].style.width = 83 + "%";
        }
    }
    /* desktop render */
    function Desktop(){
        this.render = function(){
            bar.style.top = height + 5 + "px";
            if(tcolor == "gray"){
                document.body.style.backgroundColor = "#212121";
            }else{	
                document.body.style.backgroundColor = "#f2f2f2";
            }
            $("#sback,#settingst").hide();
            $("#bar,#top, #homet, #settings").show();
            profile_pic.style.marginTop = "-1.8%";
            htitle.style.marginTop = "-45%";
			hmain.style.marginTop = 42 + "%";
			mfooter[0].style.width = 92.5 + "%";
        }
    }
    var desktop = new Desktop();
    var mobile = new Mobile();
    if(window.innerWidth > 800){
        desktop.render();
    }else{
        mobile.render();
    }
}
