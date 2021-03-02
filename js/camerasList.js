

let cameraPath = 'http://localhost:3000/api/cameras';
let mainContent = document.getElementById('content');

function getCameras(){
    let requete = new XMLHttpRequest();
    requete.open('GET', cameraPath);
    requete.responseType = 'json';
    requete.send(null);
    requete.onload = function(){
        let reponse = requete.response;
        for(let i = 0; i < reponse.length; i++){
           // let name = reponse[i]['name'];
            let id = reponse[i]['_id'];
            //let description = reponse[i]['description'];
            //let price = reponse[i]['price'];
            //let image = reponse[i]['imageUrl'];
            let lenses = reponse[i]['lenses'];

            // create card
            let card = document.createElement('div');
            card.classList.add('card');
            card.classList.add('col-12');
            card.classList.add('col-md-6');
            card.classList.add('col-lg-4');
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
            euros = euros / 1000;
            price.textContent = euros + ' \u20ac';
            card.appendChild(price);

            // add eventlistener
            card.addEventListener('click', function(event){
                console.log(name.textContent);
            });
        }
    }

}



getCameras();



