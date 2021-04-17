const arr = [];

const sec1 = document.querySelector('#sec-1');

const sec2 = document.querySelector('#sec-2');

const ulS1 = document.querySelector('ul');

const ulS2 = document.querySelector('#sec-2>ul');

const btnStart = document.querySelector('#btn-start');

const btnSwap = document.querySelector('#btn-swap');



function initialize() {

    sec1.style.display = 'block';

    sec2.style.display = 'none';

    btnSwap.style.display = 'none';

}

initialize();

btnStart.addEventListener('click', () => {

    initialize();

    for (let i = 0; i < 3; i++) arr[i] = prompt('Please enter a word');

    let ulTemplate = '';

    arr.forEach((w) => {

        ulTemplate += `<li>${w}</li>`;

    });

    ulS1.innerHTML = ulTemplate;

    btnSwap.style.display = 'block';

});

btnSwap.addEventListener('click', () => {

    sec1.style.display = 'none';

    sec2.style.display = 'block';

    var arr2 = arr.map(function(w) {

        return w.charAt(w.length - 1)+ w.substring(1, w.length - 1) + w.charAt(0);});
            

    

    let ulTemplate = '';

    arr2.forEach((w) => {

        ulTemplate += `<li>${w}</li>`;

    });

    ulS2.innerHTML = ulTemplate;

});



