// Variables
let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');

let monthInput = document.querySelector('#monthInput');
monthInput.addEventListener('input', getFactFetch);
let dateInput = document.querySelector('#dateInput');
dateInput.addEventListener('input', getFactFetch);

// Ajax method
// function getFactAjax() {
//     let date = dateInput.value;
//     let month = monthInput.value;

//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', 'http://numbersapi.com/' + month + '/' + date);

//     xhr.onload = function () {
//         if (this.status === 200 && month != '' && month <= 12 && date != '' && date <= 31) {
//             fact.style.display = 'block';
//             factText.innerText = this.responseText;
//         } else {
//             fact.style.display = 'block';
//             factText.innerText = 'Please enter value Month & Date, e.g. Month: 12 | Date: 31'
//         }
//     }

//     xhr.send();
// }

// Fetch API
function getFactFetch() {
    let date = dateInput.value;
    let month = monthInput.value;

    fetch('http://numbersapi.com/' + month + '/' + date)
        .then(response => response.text())
        .then(data => {
            if (month != '' && month <= 12 && date != '' && date <= 31) {
                fact.style.display = 'block';
                factText.innerText = data;
                console.log(data)
            } else {
                console.log('ifWrong')
            }
        })
        .catch(err => console.log(err));
}