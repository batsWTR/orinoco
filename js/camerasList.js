




// script Orinoco pages presentation des produits caméras

const cameraPath = 'http://localhost:3000/api/cameras';

// RAZ previous panier
localStorage.clear();



document.addEventListener('DOMContentLoaded', () =>{
    const baliseMain = document.getElementById('content');
    fetch(cameraPath)
    .then(response => response.json())
    .then(function(response){
        for(item of response){
            let id = item['_id'];
            let card = document.createElement('div');
            card.classList.add('card', 'col-12', 'col-md-4', 'col-lg-3', 'm-2');
            card.innerHTML = "<img src='" + item['imageUrl'] + "'/><h2>" + item['name'] + "</h2>" + "<p>" + item['description'] + "</p>" + "<span>" + parseInt(item['price']) / 100 + " \u20ac" + "</span>";
            console.log(item['_id']);
            baliseMain.appendChild(card);
            // add eventlistener and launch product page with corresponding id
            card.addEventListener('click', ()=>{
                window.open('produit.html?id=' + id, '_self');
            });
        }
    });
});








