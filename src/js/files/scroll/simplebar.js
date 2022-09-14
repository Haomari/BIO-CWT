// Подключение плагина из node_modules
import SimpleBar from 'simplebar';
// Подключение стилей из node_modules
import 'simplebar/dist/simplebar.css';

// Добавляем к блоку атрибут data-simplebar

// Также можно инициализировать следующим кодом, применяя настройки

/* if (document.getElementById('scroll').length) {
	document.getElementById('scroll').forEach(scrollBlock => {
		new SimpleBar(scrollBlock, {
			autoHide: false,
			forceVisible: true|'x'|'y' ,
			timeout: 1000,
			scrollbarMinSize: 1100,
		});
	});
} */

new SimpleBar(document.getElementById('scroll'), {
	autoHide: false,
	timeout: 1000,
	scrollbarMinSize: 100,
});