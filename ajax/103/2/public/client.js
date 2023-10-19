let div = document.querySelector('div');
let button = document.querySelector('button');

button.addEventListener('click', function() {
	fetch('/handler/?idx=3').then(
		response => {
			return response.text();
		}
	).then(
		text => {
			div.innerHTML = text; // запишем ответ сервера
		}
	);
});