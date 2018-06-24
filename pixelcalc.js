function pcalc(calculation) {
	var split = calculation.split(" ");
	var error;
	if (!split[1] == "+" || !split[1] == "-" || !split[1] == "*" || !split[1] == "x" || !split[1] == "/") {
		error = "We only support px, % and vh for now.";
	} else if (!split[0].endsWith("px")) {
		error = "We only support px, % and vh for now.";
	} else if (!split[2].endsWith("px")) {
		error = "We only support px, % and vh for now.";
	} else {
		var first = split[0];
		var second = split[2];
		var firstn = "";
		var secondn = "";
		var firsts = "";
		var seconds = "";
		// First number
		for (var i = 0; i < first.length; i++) {
			if (!isNaN(first.split("")[i])) {
				firstn += first.split("")[i];
			}
		}
		// Second number
		firstn = Number(firstn);
		for (var i = 0; i < second.length; i++) {
			if (!isNaN(second.split("")[i])) {
				secondn += second.split("")[i];
			}
		}
		// First number type
		for (var i = 0; i < first.length; i++) {
			if (isNaN(first.split("")[i])) {
				firsts += first.split("")[i];
			}
		}
		// Second number type
		secondn = Number(secondn);
		for (var i = 0; i < second.length; i++) {
			if (isNaN(second.split("")[i])) {
				seconds += second.split("")[i];
			}
		}
		// Replace "x" with "*"
		if (split[1] == "x") {
			split[1] = "*";
		}
		// And now, finally, calculate the numbers!
		if (firsts == "px" || seconds == "px" || firsts == "%" || seconds == "%") {
			return eval(" " + firstn + " " + split[1] + " " + secondn + " ")
		} else {
			error = "Uh oh. We now have an error. And this time, I have no clue what it's caused by!";
		}
	}
	if (!error == undefined) {
		return error
	}
}
alert( pcalc("200% x 20%") );