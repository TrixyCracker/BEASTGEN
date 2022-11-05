let consonantsDict = {
	"b": 92, "c": 450, "d": 373,
	"f": 95, "g": 164, "h": 154,
	"l": 651, "m": 251, "n": 688,
	"p": 305, "q": 51, "r": 637,
	"s": 498, "t": 562, "v": 210,
	"z": 49
};

let strangerDict = {
	"j": 1, "k": 1, "w": 1,
	"x": 3, "y": 1
};

let vocalsDict = {
	"a": 1174, "e": 1179, "i": 1128,
	"o": 983, "u": 301
};

let combination_dictionary = {

	"b" : ["bb", "br"],
	"c" : ["cc", "cl", "cr"],
	"d" : ["dd", "dr"],
	"f" : ["ff", "fl", "fr"],
	"g" : ["gg", "gh", "gl", "gn", "gr"],
	"h" : ["hh"],
	"l" : ["ll", "ld", "lg", "lm", "ln", "lp", "lt", "lz"],
	"m" : ["mm", "mc"],
	"n" : ["nn", "nc", "nd", "nf", "ng", "ns", "nt"],
	"p" : ["pp"],
	"q" : ["qq"],
	"r" : ["rr", "rc", "rf", "rg", "rl", "rm", "rp", "rs", "rt", "rv"],
	"s" : ["ss"],
	"t" : ["tt"],
	"v" : ["vv"],
	"z" : ["zz"]

};

let doubleConsonant = [ "gn", "rc", "st", "cr", "fr", "sc", "sr" ];

let consonants = "";
let stranger = "";
let vocals = "";


function initGen() {

	let _list = document.getElementById("list");
	_list.innerHTML = "";


	for (let i = 0; i < 50; i++) {
		let _li = document.createElement("li");

		_li.appendChild(document.createTextNode(getBestemmia()));

		_list.appendChild(_li);
	}

}

function random_int(min, max)
{
	return Math.floor(Math.random() * (max - min) + min);
}

function getBestemmia() {
	const combination_probability = 15;

	let randnum;
	let randnum2;
	let randnum3;

	let word = "";

	let word_lenght = random_int(3, 12);
	if (word_lenght % 2 == 1) 
		word_lenght += 1;

	for (let i = 0; i < word_lenght; i = word.length)
	{

		if (i % 2 == 0) 
		{

			randnum = random_int(0, consonants.length);

			
			if (random_int(0, 100) < combination_probability && i > 1)
			{
				word_lenght += 2;

				randnum2 = random_int(0, combination_dictionary[consonants[randnum]].length);

				word += combination_dictionary[consonants[randnum]][randnum2];
				word += " ";
			}
			else
			{
				word += consonants[randnum];
			}
			
		}
		else
		{
			randnum = random_int(0, vocals.length);

			word += vocals[randnum];
		}

	}

	/*

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

	*/

	word = word.replace(/ /g, "");

	return "Dio " + word;
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