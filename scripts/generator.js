var consonantsDict = new Object();
var strangerDict = new Object();
var vocalsDict = new Object();

consonantsDict = {
	"b": 2, "c": 9, "d": 8,
	"f": 2, "g": 3, "h": 3,
	"l": 13, "m": 5, "n": 14,
	"p": 6, "q": 1, "r": 13,
	"s": 10, "t": 11, "v": 4,
	"z": 1
};

strangerDict = {
	"j": 1, "k": 1, "w": 1,
	"x": 3, "y": 1
};

vocalsDict = {
	"a": 12, "e": 12, "i": 11,
	"o": 10, "u": 3
};



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

	var memory = "";
	var word = "";

	var offset = Math.floor(Math.random() * 2);
	if (offset) word = " ";

	var r = 0;
	var wlength = Math.floor(Math.random() * 10) + 3;
	for (var temp = 0; temp < wlength; temp++) 
	{

		if (word.length % 2 == 0) 
		{

			r = Math.floor(Math.random() * 10);

			if (word.length > 2 && r == 5) {
				r = Math.floor(Math.random() * 3);

				switch(r) {

					case 0:
						word += "gn" + " ";
						memory = "";
						break;
					case 1: 
						word += memory + " ";
						memory = "";
						break;
					case 2:
						r = Math.floor(Math.random() * stranger.length);
						word += stranger.charAt(r);
						break;

				}

			}
			else {
				
				r = Math.floor(Math.random() * consonants.length);
				word += consonants.charAt(r);;
				memory = consonants.charAt(r);

			}		

		}
		else 
		{

			r = Math.floor(Math.random() * 200);
			if (r == 50 && word.length > 2) {

				word += memory + " ";
				memory = "";

			}
			else {

				r = Math.floor(Math.random() * vocals.length);
				word += vocals.charAt(r);
				memory = vocals.charAt(r);

			}

		}

	}

	word = word.replace(/\ /g, '');

	var bestemmia = "Dio " + word;

	return bestemmia;
}

function setupStrings() {


	for (var key in consonantsDict)
		for (var i = 0; i < consonantsDict[key]; i++)
			consonants += key;

	for (var key in strangerDict)
		for (var i = 0; i < strangerDict[key]; i++)
			stranger += key;

	for (var key in vocalsDict)
		for (var i = 0; i < vocalsDict[key]; i++)
			vocals += key;

}