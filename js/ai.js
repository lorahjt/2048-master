manage = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);


var a = document.getElementById("Ai-Button");

var AiIsOn = 0;

a.onclick = function() {
   AiIsOn = !AiIsOn;
   // console.log("Button");
   console.log(AiIsOn);
   return false;
}

randMove = function(){
	var Num = Math.floor(Math.random()*4);
	manage.move(Num);
	// console.log(Num);
}


setInterval(function() {
	if(AiIsOn){	
		randMove();
	}
}, 250);

AiOff = function(){AiIsOn = 0;};