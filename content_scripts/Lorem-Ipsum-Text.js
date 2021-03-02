/*
 * replaces any text content with Lorem ipsum ...
 * script is to be injected by bookmarklet
 * N. Landsteiner, mass:werk - media environments <http://www.masswerk.at>
 */
(function () {
	var loremipsum = [
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
		'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		'Nam facilisis enim.',
		'Pellentesque in elit et lacus euismod dignissim.',
		'Aliquam dolor pede, convallis eget, dictum a, blandit ac, urna.',
		'Pellentesque sed nunc ut justo volutpat egestas.',
		'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.',
		'In erat.',
		'Suspendisse potenti.',
		'Fusce faucibus nibi sed nisi.',
		'Phasellus faucibus, dui a cursus dapibus, mauris nulla euismod velit, a lobortis turpis arcu vel dui.',
		'Pellentesque fermentum ultrices pede.',
		'Donec auctor lectus eu arcu.',
		'Curabitur non orci eget est porta gravida.',
		'Aliquam pretium orci id nisi.',
		'Duis faucibus, mi non adipiscing venenatis, erat urna aliquet elit, eu fringilla lacus tellus quis erat.',
		'Nam tempus ornare lorem.',
		'Nullam feugiat.',
		'Praesent ut leo massa.',
		'Donec mattis, enim at pharetra cursus, arcu est sodales magna, in volutpat erat quam at risus.',
		'Maecenas metus magna, malesuada id sodales tempor, porta a elit.',
		'Vestibulum ornare varius vestibulum.',
		'Nam risus tortor, tempus in interdum id, varius non dolor.',
		'Maecenas sed enim a arcu molestie sollicitudin.',
		'Integer nulla eros, egestas sed gravida placerat, pellentesque ut arcu.',
		'Curabitur auctor vehicula neque aliquet fermentum.',
		'Nam in enim non odio volutpat mattis eget et diam.',
		'Vestibulum sit amet turpis tellus.',
		'In molestie mattis orci vitae sagittis.',
		'Fusce vel est non erat auctor molestie.',
		'Morbi aliquam, mauris a blandit convallis, nunc dui fermentum diam, et feugiat lorem tellus eget sem.',
		'Pellentesque tincidunt feugiat egestas.',
		'Suspendisse tincidunt blandit orci, nec convallis purus suscipit in.',
		'Sed a diam at quam congue sagittis id laoreet augue.',
		'Sed aliquet velit id tortor ultricies cursus ac at mi.',
		'Nullam a nibi vitae odio pellentesque porttitor vitae quis dui.',
		'Cras malesuada quam nec urna interdum in imperdiet neque luctus.',
		'Duis elit nulla, sagittis vitae sagittis nec, fringilla nec augue.',
		'Fusce mattis tortor ut massa ultrices venenatis.',
		'Praesent tincidunt ante purus, ut molestie lacus.',
		'Etiam rhoncus venenatis eros, in tempus urna tincidunt vel.',
		'Praesent sit amet massa vitae dui feugiat ultricies.',
		'Nulla imperdiet convallis sapien, et elementum ipsum semper vitae.',
		'Donec ultricies auctor enim in laoreet.',
		'Vestibulum vitae ipsum risus.',
		'Proin lorem felis, semper at rutrum at, dapibus ut arcu.',
		'Cras volutpat interdum venenatis.',
		'Integer pulvinar metus laoreet enim aliquam ut lobortis erat rutrum.',
		'Mauris dignissim sagittis metus, sed placerat ipsum cursus sit amet.',
		'Vivamus iaculis malesuada metus vel volutpat.',
		'Praesent pulvinar lacus vel dolor pellentesque sed consequat justo convallis.',
		'Integer vel sapien a libero aliquet porttitor a in felis.',
		'Nulla in ipsum quis felis lacinia vulputate.',
		'Phasellus eu nisi nec erat hendrerit mattis in at nunc.',
		'Nullam interdum tempus euismod.',
		'Vivamus eleifend iaculis dui a feugiat.',
		'Aenean sed diam diam.',
		'Nullam sed aliquet purus.',
		'Donec quis ultricies ligula.',
		'Donec sit amet nisi enim.',
		'Vestibulum neque nisi, venenatis sit amet fermentum ut, tempor at dolor.',
		'Morbi varius hendrerit nunc, nec varius neque pellentesque eu.',
		'Nulla nec urna in diam consectetur adipiscing nec in dui.',
		'Quisque accumsan quam quis erat porta nec feugiat ipsum varius.',
		'Suspendisse blandit diam dolor.',
		'Sed interdum, tortor a egestas pellentesque, arcu sapien facilisis quam, ut ultrices lectus augue a nibi.',
		'Etiam laoreet, massa eget ultrices ullamcorper, nisi odio luctus diam, sed vestibulum sem justo id nulla.',
		'Vestibulum tempor vestibulum dui, sed fermentum libero vehicula sit amet.',
		'Vestibulum vitae sem augue, et aliquet metus.',
		'Donec cursus purus eget libero elementum suscipit.',
		'Vivamus vehicula auctor tristique.',
		'Vestibulum lacinia urna in nisi blandit feugiat.',
		'Aliquam ultrices metus sit amet diam iaculis rutrum interdum augue varius.',
		'Sed non quam nisl.',
		'Etiam nec ligula vel neque adipiscing pulvinar ac ac dui.',
		'Sed vulputate tortor eget tellus rhoncus ac lobortis sem blandit.',
		'Nam placerat, odio et suscipit vestibulum, leo orci vehicula ante, et tempor arcu elit et est.',
		'Nulla facilisi.',
		'Integer sit amet elit ut metus aliquet lobortis posuere id lorem.',
		'Donec at leo enim, a blandit eros.',
		'Integer eleifend aliquam lacinia.',
		'Phasellus sapien tortor, volutpat in posuere eget, rutrum id nibi.',
		'Maecenas porta, diam iaculis vulputate ultricies, massa metus laoreet est, sed elementum felis nibi vel mauris.',
		'Vestibulum lobortis ipsum sed erat varius eget posuere dui consequat.',
		'Integer vel eros nisi.',
		'Phasellus non gravida sem.',
		'Morbi id mauris libero.',
		'Suspendisse consectetur, erat eget convallis pulvinar, nulla sem varius nisi, vel semper nibi leo id enim.'
	];
	var whitespaceAtFrontRe = /^[\s\xa0]+/;
	var whitespaceAtEndRe = /[\s\xa0]+$/;
	var punctationRe = /([:!?\.])$/;
	var punctationFrontRe = /^([:!?\.]\s+)/;
	var capatializedRe = /^[^\wÃ„Ã–ÃœÃ€Ã€ÃÃˆÃ‰Ã‡]*[A-ZÃ„Ã–ÃœÃ€Ã€ÃÃˆÃ‰Ã‡]/;
	var simpleExpressionRe = /^[\(\[]?.[:\.\)\]]?$/;
	var singleWordRe = /^\w*$/;
	var charAtFrontRe = /^[a-z]/i;
	var headlineRe = /^H[1-3]$/i;
	var lastTextHadPunctation = false;
	var foundMain = false;
	var idx = 0;

	var getLoremIpsum = function (n, isHeadline, singleWord) {
		if (!foundMain && isHeadline) {
			idx = 0;
			foundMain = true;
		}
		var t = loremipsum[idx];
		var l = t.length;
		while (l < n) {
			if (++idx >= loremipsum.length) idx = 0;
			t += ' ' + loremipsum[idx];
			l = t.length;
		}
		if (l > n) {
			var t1 = t.substring(0, n);
			var t2 = t.substring(n).replace(/\s.*$/, '');
			if (!singleWord && (t2.length < 3 || (singleWordRe.test(t1) && charAtFrontRe.test(t.charAt(n))))) {
				t = t1 + t2;
			}
			else {
				t = t1.replace(/,?\s\w*$/, '');
			}
			if (t.length > 3) t = t.replace(/\s\w$/, '');
		}
		t = t.replace(/\s+$/, '');
		if (++idx >= loremipsum.length) idx = 0;
		return t;
	};
	var getDocumentBody = function () {
		if (document.getElementsByTagName) {
			return document.getElementsByTagName('body').item(0);
		}
		else if (document.body) {
			return document.body;
		}
		else if ((document.all) && (document.all.tags)) {
			return document.all.tags('body')[0];
		}
		else {
			return null;
		}
	};
	var replaceText = function (el, isHeadline) {
		var t = el.nodeValue;
		if (!t) return;
		var n = t.length;
		t = t.replace(whitespaceAtFrontRe, '');
		var wsFront = (t.length != n);
		n = t.length;
		t = t.replace(whitespaceAtEndRe, '');
		var wsEnd = (t.length != n);
		n = t.length;
		if (n > 0 && !simpleExpressionRe.test(t)) {
			var tn = getLoremIpsum(n, isHeadline, singleWordRe.test(t));
			var matches = punctationRe.exec(t);
			if (matches) {
				tn = tn.replace(/[,\.]+$/, '').replace(/\s+$/, '') + matches[1];
			}
			else {
				tn = tn.replace(/,\s*$/, '');
			}
			var first = tn.charAt(0);
			var rest = tn.substring(1);
			tn = ((lastTextHadPunctation || capatializedRe.test(t)) ? first.toUpperCase() : first.toLowerCase()) + rest;
			matches = punctationFrontRe.exec(t);
			if (matches) tn = matches[1] + tn;
			lastTextHadPunctation = punctationRe.test(tn);
			if (wsFront) tn = ' ' + tn;
			if (wsEnd) tn += ' ';
			el.nodeValue = tn;
		}
	};
	var scanElement = function (el, isHeadline) {
		var n = el.firstChild;
		while (n) {
			var nt = n.nodeType;
			var ns = n.nextSibling;
			if (nt == 1) {
				var nn = n.nodeName;
				if (nn != 'SCRIPT' && nn != 'STYLE' && nn != 'EMBED') {
					scanElement(n, isHeadline || headlineRe.test(nn));
				}
			}
			else if (nt == 3) {
				replaceText(n, isHeadline);
			}
			n = ns;
		}
	};
	var b = getDocumentBody();
	if (b) {
		scanElement(b, false);
	}
}
)();