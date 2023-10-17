
let film = document.querySelector('input[name="ceiling"]');
let bigBook = document.querySelector('input[name="walls"]');
let miniBook = document.querySelector('input[name="floor"]');

let inputs = document.querySelectorAll('input');

let totalPriceElement = document.querySelector('.calc-price-text'); // текст выбора
let totalPrice = document.querySelector('#total-price'); // итоговая цена




function calculate () {
    let total1 = 0;
    let total2 = 0;
    let total3 = 0;


    if (film.checked) {
        total1 = parseFloat(film.value);
        str = film.name;
        if (!film.checked) { 
            totalPriceElement.removeChild(str);
         }
	}

	if (bigBook.checked) {
        total2 = parseFloat(bigBook.value);
        str = bigBook.name;
        
        if (!bigBook.checked) { 
            totalPriceElement.removeChild(str);
         }
	}

	if (miniBook.checked) {
        total3 = parseFloat(miniBook.value);
        str = miniBook.name;
        
        if (!miniBook.checked) { 
            totalPriceElement.removeChild(str);
         }
	}
    
    totalPrice.innerText = total1 + total2 + total3;
}
   
   



    for (const input of inputs) {
       input.addEventListener('change', nameLine);
    }

    function nameLine () {
        calculate ()
    }

    // ___________________________________


    const target = document.getElementById('target');
const checkboxs = document.querySelectorAll('input[type="checkbox"]');

for (var i = 0; i < checkboxs.length; i++) {
  checkboxs[i].addEventListener('change', function() {
    send()
  }, false);
}

function send() {
    let value = '';
    for (var i = 0; i < checkboxs.length; i++) {
      let el = checkboxs[i];
      if (el.checked) {
      value += ', ' + el.name;
      }
    }
    target.value = value.replace(/^\, +/g, '');
  }
  
  send();