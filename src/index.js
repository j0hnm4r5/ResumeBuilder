// ========= STYLES =========
import "normalize.css"; // normalize browser CSS

// ========= FONTAWESOME =========
// Icon options: https://fontawesome.com/icons?d=gallery&s=brands,regular,solid&m=free
import fontawesome from "@fortawesome/fontawesome";
import { faGlobe, faEnvelope, faPhone, faHome } from "@fortawesome/fontawesome-free-solid";
import brands from "@fortawesome/fontawesome-free-brands";
fontawesome.library.add(faGlobe, faEnvelope, faPhone, faHome, brands);