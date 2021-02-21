var speakWordH = "Hello";
(function(window){
	var helloSpeaker = { 
		speak: function(name){
			console.log(speakWordH + " " + name);
	   }
	};
	window.helloSpeaker = helloSpeaker;
})(window);