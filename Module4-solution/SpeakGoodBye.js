var speakWord = "Good Bye";
(function(window){
	var byeSpeaker = { 
			speak: function(name){
			console.log(speakWord + " " + name);
		}
	};
	window.byeSpeaker = byeSpeaker;
})(window);

