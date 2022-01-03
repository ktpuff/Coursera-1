(function (window){
	var byeSpeaker = {};
	var speakWord = "Goodbye";
	byeSpeaker.speak = function (names) {
    console.log(speakWord + " " + names);
    }

    window.byeSpeaker = byeSpeaker;
    
})(window);

