




document.addEventListener('DOMContentLoaded', () =>{

    let params = new URLSearchParams(window.location.search);
    console.log('param envoyés: ' + window.location.search);
    console.log(params.get('id'));
    console.log(params.get('prix'));
    console.log(params.get('nom'));

    const baliseMain = document.getElementById('content');

    let confirmation = document.createElement('div');
    confirmation.classList.add('my-3', 'alert', 'alert-success');
    confirmation.setAttribute('role', 'alert');
    confirmation.innerHTML = "<p class='fs-3 text-center'>Merci " + params.get('nom') + " pour votre achat de " + parseInt(params.get('prix')) / 100 + "\u20ac, " +
    "la référence de votre transaction : " + "</p><h5 class='text-center'>" +  params.get('id') + "</h5>";

    baliseMain.appendChild(confirmation);
});