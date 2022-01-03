(function (window) {	
	var names = ["Yaakov", "John", "len", "Jason", "Paul", "Frank", "jarry", "Paula", "Laura", "Jim"];
	for (var i = 0; i < names.length ; i++) {
		var firstletter = names[i].charAt(0);
		var name = names[i];

		if (firstletter == "j" || firstletter == "J") {
			byeSpeaker.speak(names[i]);
		} else {
			helloSpeaker.speak(names[i]);
		}
	}

	window.name = name;

}) (window);
