const path = require("path");
const pdf = require("html5-to-pdf");

const resume = require("./import/resume.json");

var today = new Date();
var filename =
	resume.bio.name.replace(/\s+/g, "") +
	"_Resume_" +
	today.getUTCFullYear() +
	today.getUTCMonth() +
	today.getUTCDate() +
	".pdf";

const fs = require('fs');
let include = fs.readdirSync(path.join(__dirname, "dist")).filter(file => {
	const splitArray = file.split(".");
	if (splitArray[splitArray.length - 1] === "css" ||
		splitArray[splitArray.length - 1] === "js") {
		return true;
	};
});
include = include.map((file) => `./dist/${file}`);

const run = async () => {
	const html5ToPDF = new pdf({
		inputPath: "./dist/index.html",
		outputPath: `./export/${filename}`,
		templatePath: "./dist",
		include,
		renderDelay: 500,
		pdf: {
			margin: {
				top: "60px",
				bottom: "60px",
				left: "60px",
				right: "60px",
			},
			scale: 0.70,
		}
	});

	await html5ToPDF.start();
	await html5ToPDF.build();
	await html5ToPDF.close();
	console.log("DONE");
}

try {
	run();
} catch (error) {
	console.error(error);
}
