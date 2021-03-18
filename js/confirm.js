




document.addEventListener('DOMContentLoaded', () =>{

    let params = new URLSearchParams(window.location.search);
    console.log('param envoyés: ' + window.location.search);
    console.log(params.get('id'));
    console.log(params.get('prix'));
    console.log(params.get('nom'));

});