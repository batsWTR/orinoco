


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
        card.classList.add('card', 'col-12','col-md-10','col-lg-8', 'm-auto');
        card.innerHTML = "<img src='" + response['imageUrl'] + 
        "'/><h2>" + response['name'] + "</h2>" + 
        "<p>" + response['description'] + "</p>" + 
        "<select name='lenses' id='lenses'></select>" + 
        "<span>" + parseInt(response['price']) / 100 + " \u20ac" + "</span>" +
        "<button id='button' class='btn btn-primary col-12 m-auto' data-bs-toggle='modal' data-bs-target='#fenModal'>Ajouter au panier</button>";
        
        

        console.log(response['_id']);
        baliseMain.appendChild(card);


        //   select for lenses
        let elt = document.querySelector('#lenses');
        for( let index in response['lenses']){
            elt.options[index] = new Option(response['lenses'][index],response['lenses'][index] );
        }

        // eventlistener des boutons

        let button = document.querySelector('#button');
        button.addEventListener('click', function(){
            panierSave.add(response);
        });
        
        let btn_continuer = document.querySelector('#btn-continuer');
        btn_continuer.addEventListener('click', function(){
            window.open('index.html', '_self');
        });

        let btn_payer = document.querySelector('#btn-payer');
        btn_payer.addEventListener('click', function(){
            window.open('panier.html', '_self');
        });
    });
});




