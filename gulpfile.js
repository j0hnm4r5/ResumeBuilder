var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var fs = require("fs");
var path = require("path");
var YAML = require('yamljs');
var pug = require("pug");

var HTMLToPDF = require('html5-to-pdf');


gulp.task('build', function() {

	var resumeData = YAML.load("resume.yaml");

	var html = pug.renderFile("./resume.pug", resumeData);

	// create html file
	fs.writeFile("index.html", html, function(err) {
		if(err) return console.log(err);
		console.log("The HTML file was saved!");
	});

	// create pdf file
	var today = new Date();
	var htmlToPDF = new HTMLToPDF({
	  // inputBody: html,
	  inputPath: "./index.html",
	  outputPath: "./EXPORTS/JohnMars_Resume_" + today.getUTCFullYear() + today.getUTCMonth() + today.getUTCDate() + ".pdf",
	  pageSize: 'Letter',
	  templatePath: "./"
	});

	htmlToPDF.build(function(err) {
		console.log(err);
	});

});


gulp.task('dev', function() {

	browserSync.init({
		server: {
			baseDir: "./"
		}
	});

	gulp.watch([
		"blocks/**/*.pug",
		"resume.pug",
		"resume.yaml"
	], ['build']);

	gulp.watch([
		"**/*.html",
		"**/*.css"
	]).on('change', browserSync.reload);

});