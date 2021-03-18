




// script Orinoco pages presentation des produits caméras

const cameraPath = 'http://localhost:3000/api/cameras';

// RAZ previous panier
//localStorage.clear();




/* Attend le chargement de la page puis recupere la liste sur le serveur
    et lance la fonction make_card pour chaque produits


    */

    
document.addEventListener('DOMContentLoaded', () =>{
    const baliseMain = document.getElementById('content');

    // affiche nb item ds le panier
    affich_panier_count();

    
    fetch(cameraPath)
    .then(response => response.json())
    .then(function(response){
        for(item of response){
            baliseMain.appendChild(make_card(item));         
        }
    });
});


/*    Make a card for bootstrap
    take objet cmera (id,name,descriptions...)
    return a card of item to insert in html


*/

function make_card(obj){
    let id = obj['_id'];
    let card = document.createElement('div');
    card.classList.add('card', 'col-12', 'col-md-4', 'col-lg-3', 'm-2');
    card.innerHTML = "<img src='" + obj['imageUrl'] + "'/><h2>" + obj['name'] + "</h2>" + "<p>" + obj['description'] + "</p>" + "<span>" + parseInt(obj['price']) / 100 + " \u20ac" + "</span>";
    console.log(obj['_id']);   
    // add eventlistener and launch product page with corresponding id
    card.addEventListener('click', ()=>{
        window.open('produit.html?id=' + id, '_self');
    });
    return card;
}





