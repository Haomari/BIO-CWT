// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

let href = location.href;
let hrefChek = (href.includes("home.html"))||(href.includes("gallery.html"))||(href.includes("prices.html"))||(href.includes("about-us.html"))||(href.includes("contact.html"));

// if(href.includes(".html")) {
// 	location = "404"
// }else if (!hrefChek) {
// 	location = "404"
// } 


/* if (window.innerWidth >= 767) {
	document.getElementsByClassName("main__image").removeAttribute("data-prlx-mouse");
} */