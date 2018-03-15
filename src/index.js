// ========= STYLES =========
import "normalize.css"; // normalize browser CSS
import "./style.scss"; // the stylesheet for this page

// ========= FONTAWESOME =========
import fontawesome from "@fortawesome/fontawesome";
import {
	faGlobe,
	faEnvelope,
	faPhone,
} from "@fortawesome/fontawesome-free-solid";
import brands from "@fortawesome/fontawesome-free-brands";
fontawesome.library.add(faGlobe, faEnvelope, faPhone, brands);

// ========= YAML =========
var yaml = require("../import/EXAMPLE.yaml");

// ========= BLOCKS =========
var awards = require("./blocks/awards.pug");
var bio = require("./blocks/bio.pug");
var education = require("./blocks/education.pug");
var publications = require("./blocks/publications.pug");
var skills = require("./blocks/skills.pug");
var teaching = require("./blocks/teaching.pug");
var work = require("./blocks/work.pug");

// ========= HTML CREATION =========
var container = document.getElementById("app"); // grabs the container element from the browser DOM

var html = "";

// page layout
html += bio(yaml);
html += education(yaml);
html += work(yaml);
html += '<div class="pagebreak"></div>'; // pagebreak for printing
html += teaching(yaml);
html += awards(yaml);
html += publications(yaml);
html += '<div class="pagebreak"></div>'; // pagebreak for printing
html += skills(yaml);

// set the HTML
container.innerHTML = html;
