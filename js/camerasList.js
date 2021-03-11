




// script Orinoco pages presentation des produits caméras

const addressRequest = 'http://localhost:3000/api/cameras';



document.addEventListener('DOMContentLoaded', () =>{
    const baliseMain = document.getElementById('content');
    fetch(addressRequest)
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
                window.open('product.html?id=' + id, '_self');
            });
        }
    });
});


//panierSave.add();



/*/ wait until DOM is loaded
document.addEventListener('DOMContentLoaded', () =>{
    const cameraPath = 'http://localhost:3000/api/cameras';
    const mainContent = document.getElementById('content');

    // create local storage for panier as array
    //localStorage.setItem("panier", JSON.stringify([]));
    //console.log(localStorage.getItem("panier"));
    
    function getCameras(){
        let requete = new XMLHttpRequest();
        requete.open('GET', cameraPath);
        requete.responseType = 'json';
        requete.send(null);
        requete.onload = function(){
            let reponse = requete.response;
            for(let i = 0; i < reponse.length; i++){
                let id = reponse[i]['_id'];
    
                // create card
                let card = document.createElement('div');
                card.classList.add('card');
                card.classList.add('col-12');
                card.classList.add('col-md-4');
                card.classList.add('col-lg-3');
                card.classList.add('m-2');
                mainContent.appendChild(card);
    
                // add image
                let image = document.createElement('img');
                image.setAttribute('src', reponse[i]['imageUrl']);
                card.appendChild(image);
    
                // add name
                let name = document.createElement('h2');
                name.textContent = reponse[i]['name'];
                card.appendChild(name);
    
                // add description
                let description = document.createElement('p');
                description.textContent = reponse[i]['description'];
                card.appendChild(description);
    
    
                // add price
                let price = document.createElement('span');
                let euros = parseInt(reponse[i]['price']);
                euros = euros / 100;
                price.textContent = euros + ' \u20ac';
                card.appendChild(price);
    
                // add eventlistener and launch product page with corresponding id
                card.addEventListener('click', ()=>{
                    console.log(name.textContent);
                    window.open('product.html' + '?id=' + id, '_self');
                });
            }
        }
    
    }
    
    
    
    getCameras();
    //localStorage.clear();
    //panierSave.add();
    //console.log(localStorage.getItem('bats'));
});
*/




