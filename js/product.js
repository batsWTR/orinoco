


let cameraPath = 'http://localhost:3000/api/cameras';

document.addEventListener('DOMContentLoaded', () =>{
    const baliseMain = document.getElementById('content');
    // get id from product
    let param = new URLSearchParams(window.location.search);
    const id = param.get('id');
    cameraPath += '/' + id;
    fetch(cameraPath)
    .then(response => response.json())
    .then(function(response){
        //let id = response['_id'];
        let card = document.createElement('div');
        card.classList.add('card', 'col-6', 'm-auto');
        card.innerHTML = "<img src='" + response['imageUrl'] + 
        "'/><h2>" + response['name'] + "</h2>" + 
        "<p>" + response['description'] + "</p>" + 
        "<span>" + parseInt(response['price']) / 100 + " \u20ac" + "</span>" +
        "<a id='button' href='shop.html' class='btn btn-primary col-12 m-auto'>Ajouter au panier</a>";


        console.log(response['_id']);
        baliseMain.appendChild(card);

        let button = document.querySelector('#button');
        button.addEventListener('click', function(e){
            panierSave.add(response);
        });
        
    });
});




