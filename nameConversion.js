function conversion() {
	let input = document.querySelector("#text").value;
	let inputArray = input.split(" ");
	if (inputArray.length > 1) {
		camelCaseConvert(inputArray);
		pascalCaseConvert(inputArray);
		snakeCaseConvert(inputArray);
		screamingSnakeCaseConvert(inputArray);
		kebabCaseConvert(inputArray);
		screamingKebabCaseConvert(inputArray);
	} else {
		let el = document.createElement("h1");
		el.setAttribute("id", "errorMssg");
		el.textContent = `Please Use Space Separated Words To Get The Output`;
		document.querySelector(".cases_div").appendChild(el);
	}
}
function camelCaseConvert(inputArr) {
	let output = inputArr[0];
	for (let i = 1; i < inputArr.length; i = i + 1) {
		output =
			output +
			(inputArr[i].charAt(0).toUpperCase() +
				inputArr[i].slice(1).toLowerCase());
	}
	document.querySelector("#camel-case").textContent = output;
}
function pascalCaseConvert(inputArr) {
	let output = "";
	for (let i = 0; i < inputArr.length; i = i + 1) {
		output =
			output +
			(inputArr[i].charAt(0).toUpperCase() +
				inputArr[i].slice(1).toLowerCase());
	}
	document.querySelector("#pascal-case").textContent = output;
}
function snakeCaseConvert(inputArr) {
	let output = "";
	for (let i = 0; i < inputArr.length; i = i + 1) {
		output = output + inputArr[i].toLowerCase() + "_";
	}
	output = output.slice(0, output.length - 1);
	document.querySelector("#snake-case").textContent = output;
}
function screamingSnakeCaseConvert(inputArr) {
	let output = "";
	for (let i = 0; i < inputArr.length; i = i + 1) {
		output = output + inputArr[i].toLowerCase() + "_";
	}
	output = output.slice(0, output.length - 1);
	document.querySelector("#screaming-snake-case").textContent =
		output.toUpperCase();
}
function kebabCaseConvert(inputArr) {
	let output = "";
	for (let i = 0; i < inputArr.length; i = i + 1) {
		output = output + inputArr[i].toLowerCase() + "-";
	}
	output = output.slice(0, output.length - 1);
	document.querySelector("#kebab-case").textContent = output;
}
function screamingKebabCaseConvert(inputArr) {
	let output = "";
	for (let i = 0; i < inputArr.length; i = i + 1) {
		output = output + inputArr[i].toLowerCase() + "-";
	}
	output = output.slice(0, output.length - 1);
	document.querySelector("#screaming-kebab-case").textContent =
		output.toUpperCase();
}
