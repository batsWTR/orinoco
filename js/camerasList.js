

// wait until DOM is loaded
document.addEventListener('DOMContentLoaded', () =>{
    const cameraPath = 'http://localhost:3000/api/cameras';
    const mainContent = document.getElementById('content');
    
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
    
                /* options are not important in index page
                let lenses = document.createElement('span');
                lenses.textContent =  reponse[i]['lenses'];
                card.appendChild(lenses);  */
    
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
});





