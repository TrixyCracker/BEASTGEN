let consonantsDict = {
	"b": 2, "c": 9, "d": 8,
	"f": 2, "g": 3, "h": 3,
	"l": 13, "m": 5, "n": 14,
	"p": 6, "q": 1, "r": 13,
	"s": 10, "t": 11, "v": 4,
	"z": 1
};

let strangerDict = {
	"j": 1, "k": 1, "w": 1,
	"x": 3, "y": 1
};

let vocalsDict = {
	"a": 12, "e": 12, "i": 11,
	"o": 10, "u": 3
};

let doubleConsonant = [ "gn", "rc", "st", "cr", "fr", "sc", "sr" ];

let consonants = "";
let stranger = "";
let vocals = "";


function initGen() {

	let _list = document.getElementById("list");
	_list.innerHTML = "";


	for (let i = 0; i < 30; i++) {
		let _li = document.createElement("li");

		_li.appendChild(document.createTextNode(getBestemmia()));

		_list.appendChild(_li);
	}

}

function getBestemmia() {
	let a = 50; //doubleComboConsonantValue
	let b = 50; //doubleConsonantValue
	let c = 50; //strangerValue

	let a1 = 10; //doubleVocalValue

	let word = "";

	let offset = Math.floor(Math.random() * 2);
	if (offset) word = " ";

	let r = 0;
	let wlength = Math.floor(Math.random() * 10) + 3;
	for (let temp = 0; temp < wlength; temp = word.replace(/\ /g, '').length) 
	{

		if (word.length % 2 == 0) 
		{	

			r = Math.floor(Math.random() * (a + b + c + 1000));

			if (word.length > 2 && r < (a+b+c)) {

				if (r < a) {

					r = Math.floor(Math.random() * doubleConsonant.length);
					word += doubleConsonant[r] + " ";

				}
				else if (a <= r < (a + b)) {

					r = Math.floor(Math.random() * consonants.length);
					word += consonants.charAt(r) + consonants.charAt(r) + " ";

				}
				else if ((a + b) <= r < (a + b + c)) {

					r = Math.floor(Math.random() * stranger.length);
					word += stranger.charAt(r);

				}

			}
			else {

				r = Math.floor(Math.random() * consonants.length);
				word += consonants.charAt(r);

			}

		}
		else 
		{

			r = Math.floor(Math.random() * (a1 + 1000));

			if (word.length > 2 && r < a1) {

				r = Math.floor(Math.random() * vocals.length);
				word += vocals.charAt(r) + vocals.charAt(r) + " ";

			}
			else {

				r = Math.floor(Math.random() * vocals.length);
				word += vocals.charAt(r);

			}

		}

	}

	word = word.replace(/ /g, '');

	let bestemmia = "Dio " + word;

	return bestemmia;
}

function setup() {

	//Setup delle stringe P.S. non mettere codice prima di queste
	for (let key in consonantsDict)
		for (let i = 0; i < consonantsDict[key]; i++)
			consonants += key;

	for (let key in strangerDict)
		for (let i = 0; i < strangerDict[key]; i++)
			stranger += key;

	for (let key in vocalsDict)
		for (let i = 0; i < vocalsDict[key]; i++)
			vocals += key;

	//Aggiunta della bestemmia al sottotitolo
	let _title = document.getElementById("title");
	_title.appendChild(document.createTextNode("Tra il dire e il fare c'è di mezzo il " + getBestemmia()))

}