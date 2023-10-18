
let film = document.querySelector('input[name="ceiling"]');
let bigBook = document.querySelector('input[name="walls"]');
let miniBook = document.querySelector('input[name="floor"]');
let scanFoto = document.querySelector('input[name="scan"]');
let slideShow = document.querySelector('input[name="slide"]');
let fotoBook = document.querySelector('input[name="fotobook"]');
let interviewVideo = document.querySelector('input[name="interview"]');
let interviewText = document.querySelector('input[name="interview-text"]');

let inputs = document.querySelectorAll('input');

let blockCalc = document.querySelector(".calc-price")

let totalPriceElement = document.querySelector('.calc-price-text'); // текст выбора
let totalPrice = document.querySelector('#total-price'); // итоговая цена




function calculate () {
    let total1 = 0;
    let total2 = 0;
    let total3 = 0;
    let total4 = 0;
    let total5 = 0;
    let total6 = 0;
    let total7 = 0;
    let total8 = 0;


    if (film.checked) {
        total1 = parseFloat(film.value);
        str = film.name;
	}

	if (bigBook.checked) {
        total2 = parseFloat(bigBook.value);
        str = bigBook.name;
	}

	if (miniBook.checked) {
        total3 = parseFloat(miniBook.value);
        str = miniBook.name;
	}
	if (scanFoto.checked) {
        total4 = parseFloat(scanFoto.value);
        str = scanFoto.name;
	}
	if (slideShow.checked) {
        total5 = parseFloat(slideShow.value);
        str = slideShow.name;
	}
	if (fotoBook.checked) {
        total6 = parseFloat(fotoBook.value);
        str = fotoBook.name;
	}
	if (interviewVideo.checked) {
        total7 = parseFloat(interviewVideo.value);
        str = interviewVideo.name;
	}
	if (interviewText.checked) {
        total8 = parseFloat(interviewText.value);
        str = interviewText.name;
	}
    
    totalPrice.innerText = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8;
}
   
   



    for (const input of inputs) {
       input.addEventListener('change', nameLine);
    }

    function nameLine () {
        calculate ()
    }

    inputs.forEach((el) => {
      el.addEventListener('click', function () {
        blockCalc.style.display = 'block'
      })
    })











    // ___________________________________


//     const target = document.getElementById('target');
// const checkboxs = document.querySelectorAll('input[type="checkbox"]');

// for (var i = 0; i < checkboxs.length; i++) {
//   checkboxs[i].addEventListener('change', function() {
//     send()
//   }, false);
// }

// function send() {
//     let value = '';
//     for (var i = 0; i < checkboxs.length; i++) {
//       let el = checkboxs[i];
//       if (el.checked) {
//       value += ', ' + el.name;
//       }
//     }
//     target.value = value.replace(/^\, +/g, '');
//   }
  
//   send();