


const cameraPath = 'http://localhost:3000/api/cameras';

document.addEventListener('DOMContentLoaded', () =>{
    const baliseMain = document.getElementById('content');

    // récupère l'id passé en parametre à la fenetre
    let param = new URLSearchParams(window.location.search);
    const id = param.get('id');

    // affiche nb item ds le panier
    affich_panier_count();

    // requete AJAX
    fetch(cameraPath + '/' + id)
    .then(response => response.json())
    .then(function(response){
   
        
        // creation de la carte
        baliseMain.appendChild(product_card(response));


        //  ajout selection lentilles
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



// prend 1 objet camera en entrée et retourne une carte à inserer dans le DOM

function product_card(obj){
    let card = document.createElement('div');
    card.classList.add('card', 'col-12','col-md-10','col-lg-8', 'm-auto');
    card.innerHTML = "<img src='" + obj['imageUrl'] + "' />" + 
    "<div class='card-body'>" +
    "<h2 class='card-title'>" + obj['name'] + "</h2>" + 
    "<h4 class=card-subtitle'>Prix: " + parseInt(obj['price']) / 100 + "\u20ac" + " ttc</h4>" +
    "<p class='fs-4 card-text'>" + obj['description'] + "</p>" + 
    "<label for='lenses'>Objectif:</label>" +
    "<select name='lenses' id='lenses'></select>" + 
    "<button id='button' class='btn btn-primary col-12 mt-4' data-bs-toggle='modal' data-bs-target='#fenModal'>Ajouter au panier</button>" +
    "</div";

    return card;
}

