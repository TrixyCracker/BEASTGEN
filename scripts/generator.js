var consonantsDict = new Object();
var strangerDict = new Object();
var vocalsDict = new Object();

consonantsDict = { "b" : 2, "c": 9, "d" : 8, 
                    "f" : 2, "g": 3, "h" : 3, 
                    "l" : 13, "m": 5, "n" : 14, 
                    "p" : 6, "q": 1, "r" : 13, 
                    "s" : 10, "t": 11, "v" : 4, 
                    "z" : 1 };

strangerDict = { "j" : 1, "k": 1, "w" : 1,
                "x" : 3, "y": 1};

vocalsDict = { "a" : 12, "e": 12, "i" : 11, 
				"o" : 10, "u": 3 };
				


var consonants = "";
var stranger = "";
var vocals = "";


function initGen() {

	var _list = document.getElementById("list");
	_list.innerHTML = "";


		for (var i = 0; i < 25; i++) {
			var _li = document.createElement("li");

			_li.appendChild(document.createTextNode(getBestemmia()));

			_list.appendChild(_li);
		}



}

function getBestemmia() {
	var doubleVocalValue = 20;
	var doubleComboConsonantValue = 15;
	var doubleConsonantValue = 10;
	var strangerConsonantValue = 10;	

	var memory = "";
	var word = "";

	var r = 0;
	var wlength = Math.floor(Math.random() * 10) + 3;
	for(var temp = 0; temp < wlength; temp++) {

		r = Math.floor(Math.random() * doubleComboConsonantValue); 
		if (r == Math.round(doubleComboConsonantValue) && word.length > 2 && word.length % 2 == 0) {

			word += "gn" + " ";
			memory = "";
			continue;

		}

		r = Math.floor(Math.random() * doubleConsonantValue); 
		if (r == Math.round(doubleConsonantValue) && word.length > 2 && word.length % 2 == 0) {

			word += memory + " ";
			memory = "";
			continue;

		}

		r = Math.floor(Math.random() * doubleVocalValue); 
		if (r == Math.round(doubleVocalValue) && word.length > 3 && word.length % 2 == 1) {

			word += memory + " ";
			memory = "";
			continue;

		}

		r = Math.floor(Math.random() * strangerConsonantValue); 
		if (r == Math.round(strangerConsonantValue) && word.length > 2 && word.length % 2 == 0) {

			r = Math.floor(Math.random() * stranger.length); 
			word += stranger.charAt(r);
			continue;

		}

		if (word.length % 2 == 0) {

			r = Math.floor(Math.random() * consonants.length); 
			word += consonants.charAt(r);;
			memory = consonants.charAt(r);

		}
		else {

			r = Math.floor(Math.random() * vocals.length);  
			word += vocals.charAt(r);
			memory = vocals.charAt(r);

		}


	}

	word = word.replace(/\ /g, '');

	var bastemmia = "Dio " + word;

	return bastemmia;
}

function setupStrings() {


	for(var key in consonantsDict) 
		for(var i = 0; i < consonantsDict[key]; i++)
			consonants += key;

	for(var key in strangerDict) 
		for(var i = 0; i < strangerDict[key]; i++)
			stranger += key;

	for(var key in vocalsDict) 
		for(var i = 0; i < vocalsDict[key]; i++)
			vocals += key;

}