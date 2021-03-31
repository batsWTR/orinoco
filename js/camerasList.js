




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
    }).catch(console.warn);

});


/*    Fabrique une carte de présentation
    prends un objet caméra (id,name,descriptions...)
    retourne une carte à inserer dans le DOM


*/
function make_card(obj){
    let id = obj['_id'];
    let card = document.createElement('div');
    card.classList.add('card', 'col-12','my-3', 'col-md-6', 'col-lg-4', 'm-auto');
    card.innerHTML = "<img src='" + obj['imageUrl'] + "'/>" +
    "<div class='card-body'>" + 
    "<h2 class='card-title'>" + obj['name'] + "</h2>" +
    "<h4 class='card_subtitle'>Prix: " + parseInt(obj['price']) / 100 + "\u20ac" + " ttc</h4>" + 
    "<p class='card-text'>" + obj['description'] + "</p>" + 
    "</div";
  

    //  eventlistener ouvre la page produit avec l'id en parametre
    card.addEventListener('click', ()=>{
        window.open('produit.html?id=' + id, '_self');
    });
    return card;
}





