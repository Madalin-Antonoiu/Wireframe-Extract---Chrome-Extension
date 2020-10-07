// IPSUM
;(function() {

	"use strict";

	/**
	 * LoremIpsum constructor
	 *
	 * @type {Function}
	 */
	window.LoremIpsum = function() {
		// pass
	}

	/**
	 * LoremIpsum prototype
	 *
	 * @type {Object}
	 */
	window.LoremIpsum.prototype = {

		/**
		 * Possible words
		 *
		 * @type {Array}
		 */
		_words: [ "a", "ac", "accumsan", "ad", "adipiscing", "aenean", "aenean", "aliquam", "aliquam", "aliquet", "amet", "ante", "aptent", "arcu", "at", "auctor", "augue", "bibendum", "blandit", "class", "commodo", "condimentum", "congue", "consectetur", "consequat", "conubia", "convallis", "cras", "cubilia", "curabitur", "curabitur", "curae", "cursus", "dapibus", "diam", "dictum", "dictumst", "dolor", "donec", "donec", "dui", "duis", "egestas", "eget", "eleifend", "elementum", "elit", "enim", "erat", "eros", "est", "et", "etiam", "etiam", "eu", "euismod", "facilisis", "fames", "faucibus", "felis", "fermentum", "feugiat", "fringilla", "fusce", "gravida", "habitant", "habitasse", "hac", "hendrerit", "himenaeos", "iaculis", "id", "imperdiet", "in", "inceptos", "integer", "interdum", "ipsum", "justo", "lacinia", "lacus", "laoreet", "lectus", "leo", "libero", "ligula", "litora", "lobortis", "lorem", "luctus", "maecenas", "magna", "malesuada", "massa", "mattis", "mauris", "metus", "mi", "molestie", "mollis", "morbi", "nam", "nec", "neque", "netus", "nibh", "nisi", "nisl", "non", "nostra", "nulla", "nullam", "nunc", "odio", "orci", "ornare", "pellentesque", "per", "pharetra", "phasellus", "placerat", "platea", "porta", "porttitor", "posuere", "potenti", "praesent", "pretium", "primis", "proin", "pulvinar", "purus", "quam", "quis", "quisque", "quisque", "rhoncus", "risus", "rutrum", "sagittis", "sapien", "scelerisque", "sed", "sem", "semper", "senectus", "sit", "sociosqu", "sodales", "sollicitudin", "suscipit", "suspendisse", "taciti", "tellus", "tempor", "tempus", "tincidunt", "torquent", "tortor", "tristique", "turpis", "ullamcorper", "ultrices", "ultricies", "urna", "ut", "ut", "varius", "vehicula", "vel", "velit", "venenatis", "vestibulum", "vitae", "vivamus", "viverra", "volutpat", "vulputate" ],

		/**
		 * Get random number
		 *
		 * @param  {Number} x
		 * @param  {Number} y
		 * @return {Number}
		 */
		_random: function(x, y) {
			var rnd = (Math.random() * 2 - 1) + (Math.random() * 2 - 1) + (Math.random() * 2 - 1);
			return Math.round(Math.abs(rnd) * x + y);
		},

		/**
		 * Get random number between min and max
		 *
		 * @param  {Number} min (optional) lower result limit
		 * @param  {Number} max (optional) upper result limit
		 * @return {Number}     random number
		 */
		_count: function(min, max) {
			var result;
			if (min && max) result = Math.floor(Math.random() * (max - min + 1) + min);
			else if (min) result = min;
			else if (max) result = max;
			else result = this._random(8, 2);

			return result;
		},

		/**
		 * Get random words
		 *
		 * @param  {Number} min (optional) minimal words count
		 * @param  {Number} max (optional) maximal words count
		 * @return {Object}     array of random words
		 */
		words: function(min, max) {
			var result = [];
			var count = this._count(min, max);

			// get random words
			while (result.length < count) {
				var pos = Math.floor(Math.random() * this._words.length);
				var rnd = this._words[pos];

				// do not allow same word twice in a row
				if (result.length && result[result.length - 1] === rnd) {
					continue;
				}

				result.push(rnd);
			}

			return result;
		},

		/**
		 * Generate sentence
		 *
		 * @param  {Number} min (optional) minimal words count
		 * @param  {Number} max (optional) maximal words count
		 * @return {String}     sentence
		 */
		sentence: function(min, max) {
			var words = this.words(min, max);

			// add comma(s) to sentence
			var index = this._random(6, 2);
			while (index < words.length - 2) {
				words[index] += ",";
				index += this._random(6, 2);
			}

			// append puctation on end
			var punct = "...!?"
			words[words.length - 1] += punct.charAt(Math.floor(Math.random() * punct.length));

			// uppercase first letter
			words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);

			return words.join(" ");
		},

		/**
		 * Generate paragraph
		 *
		 * @param  {Number} min (optional) minimal words count
		 * @param  {Number} max (optional) maximal words count
		 * @return {String}     paragraph
		 */
		paragraph: function(min, max) {
			if (!min && !max) {
				min = 20;
				max = 60;
			}

			var result = "";
			var count = this._count(min, max);

			// append sentences until limit is reached
			while (result.slice(0, -1).split(" ").length < count) {
				result += this.sentence() + " ";
			}
			result = result.slice(0, -1)

			// remove words
			if (result.split(" ").length > count) {
				var punct = result.slice(-1);
				result = result.split(" ").slice(0, count).join(" ");
				result = result.replace(/,$/, "");
				result += punct;
			}

			return result;
		}

	}

})();
var ipsum = new LoremIpsum();

//Test
console.log("IPSUMIZER: ON", ipsum.sentence(12));

var ps = document.querySelectorAll("p");
var divs = document.querySelectorAll("div");
var spans = document.querySelectorAll("span");

var h1s = document.querySelectorAll("h1");
var h2s = document.querySelectorAll("h2");
var h3s = document.querySelectorAll("h3");
var h4s = document.querySelectorAll("h4");
var h5s = document.querySelectorAll("h5");

var as = document.querySelectorAll("a");




ps.forEach( p => { 
	// p.style.backgroundColor = "#606060"; 
	// p.style.color = "#606060"
	if(p.textContent !== ""){
		let count = p.textContent.split(' ').length;
		p.textContent = ipsum.sentence(count)
	}

})   
spans.forEach( span => { 
	// span.style.backgroundColor = "#606060"; 
	// span.style.color = "#606060"
	if(span.textContent !== ""){
		let count = span.textContent.split(' ').length;span.textContent = ipsum.sentence(count);
	}

})   
divs.forEach(div=>{ 

	if(div.firstChild.nodeName == "#text" && div.childElementCount == 1){
		div.style.background = "black"; 
		// div.style.color = "green"; 
		div.style.opacity == "0.6";
	}

	if(div.style.backgroundImage !== ""){
		div.style.backgroundImage = "url(https://www.wirify.com/client/images/placeholder.png)";
	}

	// BAD, it reads textContent from first div as whole page,...
	// if(div.firstChild.textContent !== ""){
	// 	let count = div.textContent.split(' ').length;
	// 	div.textContent = ipsum.sentence(count)
	// }

		// if(div.firstChild.nodeName == "#text" && div.childElementCount == 1){
		// 	let count = div.textContent.split(' ').length;
		// 	div.textContent = ipsum.sentence(count)
		// }

});


h1s.forEach(h1=>{ let count = h1.textContent.split(' ').length; h1.textContent = ipsum.sentence(count);})
h2s.forEach(h2=>{let count = h2.textContent.split(' ').length; h2.textContent = ipsum.sentence(count);})
h3s.forEach(h3=>{ let count = h3.textContent.split(' ').length; h3.textContent = ipsum.sentence(count);})
h4s.forEach(h4=>{ let count = h4.textContent.split(' ').length; h4.textContent = ipsum.sentence(count);})
h5s.forEach(h5=>{ let count = h5.textContent.split(' ').length; h5.textContent = ipsum.sentence(count);})
as.forEach(a=>{ let count = a.textContent.split(' ').length; a.textContent = ipsum.sentence(count);})













// let count = $0.textContent.split(' ').length;
// $0.textContent = ipsum.sentence(count)







// if(divs[0].firstChild.nodeName == "#text" && divs[0].childElementCount == 1){
// 	let count = divs[0].textContent.split(' ').length;
// 	divs[0].textContent = ipsum.sentence(count)
// }else{
// 	console.log("N/A")
// }


// var divs = document.querySelectorAll("div");
// divs.forEach(div=>{
// 	if(div.nodeType == 3 && div.firstChild.nodeType == 3){
// 		console.log(div)
// 	}
// })