
let film = document.querySelector('input[name="ceiling"]');
let bigBook = document.querySelector('input[name="walls"]');
let miniBook = document.querySelector('input[name="floor"]');

let inputs = document.querySelectorAll('input');

let totalPriceElement = document.querySelector('.calc-price-text'); // текст выбора
let totalPrice = document.querySelector('#total-price'); // итоговая цена

let div = document.createElement("div");

function calculate () {
    let total1 = 0;
    let total2 = 0;
    let total3 = 0;

    let text = '';

    if (film.checked) {
        total1 = parseFloat(film.value);
        text = film.name;
        
	}

	if (bigBook.checked) {
        total2 = parseFloat(bigBook.value);
        text = bigBook.name;

	}

	if (miniBook.checked) {
        total3 = parseFloat(miniBook.value);
        text = miniBook.name;

	}
    totalPriceElement.innerHTML = text
    totalPrice.innerText = total1 + total2 + total3;
}
   
	

    for (const input of inputs) {
        input.addEventListener('input', function () {
            calculate ()
        });
    }


