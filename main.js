window.onload = function(){
	$(".div").hide();
	var tcolor = "default";
	var bar = document.getElementById("bar");
	var theme = document.getElementById("tcircle");
	var tcircle = document.getElementById("tcircle");
	var sinfo = document.getElementById("sinfo");
	var settings = document.getElementById("settings");
	var sback = document.getElementById("sback");
	var codes = document.getElementById("codes");
	var home = document.getElementById("home");
	var project = document.getElementById("project");
	var top = document.getElementById("top");
	var profile_pic = document.getElementById("profile_pic");
	var htitle_info = document.getElementById("htitle_info");
	var htitle = document.getElementById("htitle");
	var mfooter = document.getElementsByClassName("mfooter");
	var bard = document.getElementsByClassName("bard");
	var hmain_codes = document.getElementById("hmain_codes");
	var hmain_projects = document.getElementById("hmain_projects");
	var hmain_title = document.getElementById("hmain_title");
	var hmain_layout = document.getElementById("hmain_layout");
	var homet = document.getElementById("homet");
	var projectt = document.getElementById("projectt");
	var ctitle_game1 = document.getElementById("ctitle_game1");
	var ctitle_game = document.getElementById("ctitle_game");
	var ctitle = document.getElementById("ctitle");
	theme.addEventListener("click", function(){
		if(tcolor != "gray"){
			tcolor = "gray";
			document.body.style.backgroundColor = "white";
			tcircle.style.left = "30px";
			sinfo.style.color = "black";
			stitle.style.color = "black";
			sback.style.color = "black";
			tcircle.style.backgroundColor = "#212121";
			hmain_codes.style.borderBottom = "5px solid #56211F";
			hmain_layout.style.borderBottom = "5px solid #56211F";
			hmain_title.style.borderBottom = "5px solid #56211F";
			hmain_projects.style.borderBottom = "5px solid #56211F";
			$("#settings").attr("src", "settings_dark_theme.png");
			$("#hmain_codes_image").attr("src", "hmain_codes_image_dark_theme.png");
			homet.style.color = "white";
			projectt.style.color = "white";
			ctitle_game1.style.color = "white";
			ctitle_game.style.color = "white";
			ctitle.style.color = "white";
		}else{
			tcolor = "default";
			sinfo.style.color = "white";
			stitle.style.color = "white";
			sback.style.color = "white";
			tcircle.style.left = "11.5px";
			document.body.style.backgroundColor = "#212121";
			tcircle.style.backgroundColor = "white";
			hmain_codes.style.borderBottom = "5px solid #78482C";
			hmain_layout.style.borderBottom = "5px solid #78482C";
			hmain_title.style.borderBottom = "5px solid #78482C";
			hmain_projects.style.borderBottom = "5px solid #78482C";
			$("#settings").attr("src", "settings_light_theme.png");
			$("#hmain_codes_image").attr("src", "hmain_codes_image_light_theme.png");
			ctitle_game1.style.color = "black";
			ctitle_game.style.color = "black";
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
		$("#homet, #bar, #top, #projectt, #codet, #settings, .mfooter").hide();
		$("#settingst, #sback").show();
		document.body.style.backgroundColor = "#212121";
	});
	codes.addEventListener("click", function(){
		top.innerHTML = "CODES";
		$("#codet").show();
		$("#homet, #projectt").hide();
		if(tcolor == "gray"){
			home.style.color = "#212121";
			codes.style.color = "#808080";
			project.style.color = "#212121";
		}else{
			home.style.color = "white";
			codes.style.color = "white";
			project.style.color = "#999999";
		}
	});
	home.addEventListener("click", function(){
		top.innerHTML = "HOME";
		$("#homet").show();
		$("#projectt, #codet").hide();
		if(tcolor == "gray"){
			home.style.color = "#808080";
			codes.style.color = "#212121";
			project.style.color = "#212121";
		}else{
			home.style.color = "white";
			codes.style.color = "white";
			project.style.color = "#999999";
		}
	});
	project.addEventListener("click", function(){
		top.innerHTML = "PROJECTS";
		$("#projectt").show();
		$("#homet, #codet").hide();
		if(tcolor == "gray"){
			home.style.color = "#212121";
			codes.style.color = "#212121";
			project.style.color = "#808080";
		}else{
			home.style.color = "white";
			codes.style.color = "white";
			project.style.color = "#999999";
		}
	});
/* mobile render */
	function Mobile(){
	this.render = function(){
		$("#sback, #settingst").hide();
		$("#bar,#top, #settings, .mfooter").show();
		if(tcolor == "gray"){
			document.body.style.backgroundColor = "#212121";
			bar.style.backgroundColor = "#f2f2f2";
			top.style.backgroundColor = "#f2f2f2";
			top.style.color = "#212121";
			homet.style.color = "white";
			projectt.style.color = "white";	
			bard[0].style.color = "#212121";
			home.style.color = "#808080";
			project.style.color = "#212121";
		}else{	
			document.body.style.backgroundColor = "white";
			bar.style.backgroundColor = "#212121";
			top.style.backgroundColor = "#212121";
			top.style.color = "black";
			homet.style.color = "white";
			projectt.style.color = "white";
			bard[0].style.color = "white";
			home.style.color = "#999999";
			project.style.color = "white";
		}
		$("#homet").show();

		home.style.color = "#999999";
		profile_pic.style.marginTop = "-5%";
		mfooter[0].style.width = 83 + "%";
		htitle.style.fontSize = "20px";
		htitle_info.style.fontSize = "13px";
		htitle_info.style.marginTop = "19%";
		htitle.style.marginTop = "-65%";
		}
	}
	/* desktop render */
	function Desktop(){
		this.render = function(){
			if(tcolor == "gray"){
				document.body.style.backgroundColor = "#212121";
			bar.style.backgroundColor = "#f2f2f2";
			top.style.backgroundColor = "#f2f2f2";
			top.style.color = "#212121";
			homet.style.color = "white";
			projectt.style.color = "white";
			bard[0].style.color = "#212121";
			home.style.color = "#808080";
			project.style.color = "#212121";
			}else{	
				document.body.style.backgroundColor = "white";
			bar.style.backgroundColor = "#212121";
			top.style.backgroundColor = "#212121";
			top.style.color = "white";
			bar.style.color = "white";
			homet.style.color = "black";
			projectt.style.color = "black";
			bard[0].style.color = "white";
			home.style.color = "#999999";
			project.style.color = "white";
			}
			$("#sback,#settingst").hide();
			$("#bar,#top, #homet, #settings, .mfooter").show();
			profile_pic.style.marginTop = "-1.8%";
			htitle.style.marginTop = "-45%";
			mfooter[0].style.width = window.innerWidth;
			htitle.style.fontSize = "50px";
			htitle_info.style.fontSize = "25px";
			htitle_info.style.top = "300%";
		}
	}
	var desktop = new Desktop();
	var mobile = new Mobile();
	//More device size specification
	if(window.innerWidth < 800){

	}
	if(window.innerWidth > 800){
		desktop.render();
	}else{
		mobile.render();
	}


	/* ---------- Pong Game Code ---------- */


	/*
	var $pong = document.getElementById("pong");
	var c = $pong.getContext("2d");
	var score1 = 0;
	var score2 = 0;
	$pong.width = window.innerWidth - 5;
	$pong.height = window.innerHeight;
	var start = document.getElementById("start");
	var info = document.getElementById("info");
	var back = document.getElementById("infob");
	back.addEventListener("click", function(){
		$("#infob, #infoi, #info").hide();
		$("#Start").show();
	});
	start.addEventListener("click", function(){
		$("#pong").show();
		$("#Start, #info").hide();
	});
	info.addEventListener("click", function(){
		$("#infoi, #infob, #info").show();
		$("#Start").hide();
	});
	function Middle(){
		this.x = $pong.width / 2;
		this.y = 0;
		this.w = 2.5;
		this.h = $pong.height;
		this.score1 = 0;
		this.score2 = 0;
	}
	Middle.prototype.draw = function(){
		c.fillStyle = "white";
		c.fillRect(this.x, this.y, this.w, this.h);
	};
	function Paddle1(){ 
		this.x = $pong.width - 9;
		this.y = $pong.height / 2;
		this.w = 4;
		this.h = 45;
		this.render = function(){
			c.fillRect(this.x, this.y, this.w, this.h);
			c.fillStyle = "white";
		};
	}
	function Paddle2(){ 
		this.x = 5;
		this.y = $pong.height / 2;
		this.w = 4;
		this.h = 45;
		this.render = function(){
			c.fillRect(this.x, this.y, this.w, this.h);
			c.fillStyle = "white";
		};
	}
	function Ball(){
		this.x = $pong.width / 2;
		this.y = $pong.height / 2;
		this.w = 5;
		this.h = 5;
		this.dx = 3.5;
		this.dy = 3.5;
		this.radius = 7;
		this.render = function(){
			c.fillRect(this.x, this.y, this.w, this.h);
			c.fillStyle = "white";
		};
	}
	Ball.prototype.move = function(){
		if(this.x + this.radius > innerWidth){
			this.x = $pong.width / 2;
			this.y = $pong.height / 2;
			this.dx =- this.dx;
			score1++;
		}
		if(this.x - this.radius < -35){
			this.x = $pong.width / 2;
			this.y = $pong.height / 2;
			this.dx =- this.dx;
			score2++;
		}
		if(this.y + this.radius > $pong.height || this.y - this.radius < 0){
			this.dy =- this.dy;
		}
		if(ball.x + ball.w >= paddle1.x && ball.x <= paddle1.x + paddle1.w && ball.y >= paddle1.y && ball.y <= paddle1.y + paddle1.h){
			this.dx =- this.dx;
		}
		if(ball.x + ball.w >= paddle2.x && ball.x <= paddle2.x + paddle2.w && ball.y >= paddle2.y && ball.y <= paddle2.y + paddle2.h){
			this.dx =- this.dx;
		}
		this.x += this.dx;
		this.y += this.dy;
	};
	Ball.prototype.score = function(){
		c.font = "25px Roboto Mono, monospace";
		c.fillText(score1, $pong.width / 2 - 55, 30);
		c.fillText(score2, $pong.width / 2 + 35, 30);
	};
	var paddle1 = new Paddle1();
	var paddle2 = new Paddle2();
	var ball = new Ball();
	var middle = new Middle();
	function animate(){
		c.clearRect(0, 0, $pong.width, $pong.height);
		paddle1.render();
		paddle2.render();
		ball.render();
		ball.move();
		ball.score();
		middle.draw();
		requestAnimationFrame(animate);
	}
	animate();
	$pong.addEventListener("click", onDown);
	function onDown(event){
		this.x= event.pageX;
		this.y = event.pageY;
		if(this.x < $pong.width / 2){
			paddle2.y = this.y - 20;
		}
		if(this.x > $pong.width / 2){
			paddle1.y = this.y - 20;
		}
	}
	*/
}
