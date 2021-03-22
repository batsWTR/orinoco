




document.addEventListener('DOMContentLoaded', () =>{

    let params = new URLSearchParams(window.location.search);
    console.log('param envoyés: ' + window.location.search);
    console.log(params.get('id'));
    console.log(params.get('prix'));
    console.log(params.get('nom'));

    const baliseMain = document.getElementById('content');

    let confirmation = document.createElement('div');
    confirmation.innerHTML = "<p>Merci " + params.get('nom') + " pour votre achat de " + parseInt(params.get('prix')) / 100 + "\u20ac, " +
    "la référence de votre achat: " + params.get('id');

    baliseMain.appendChild(confirmation);
});