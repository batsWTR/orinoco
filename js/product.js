

// page for the selected camera


let cameraPath = 'http://localhost:3000/api/cameras';
let mainContent = document.getElementById('content');



function getProduct(){
    let requete = new XMLHttpRequest();
    requete.open('GET', cameraPath + '/' + window.name); // window.name = id of camera
    requete.responseType = 'json';
    requete.send(null);
    requete.onload = function(){
        let reponse = requete.response;
        console.log(reponse);

        // create card
        let card = document.createElement('div');
        card.classList.add('card');
        card.classList.add('col-12');
        card.classList.add('m-2');
        mainContent.appendChild(card);

        // add image
        let image = document.createElement('img');
        image.setAttribute('src', reponse['imageUrl']);
        card.appendChild(image);

        // add name
        let name = document.createElement('h2');
        name.textContent = reponse['name'];
        card.appendChild(name);

        // add description
        let description = document.createElement('p');
        description.textContent = reponse['description'];
        card.appendChild(description);

        // add lenses options 
        let lenses = document.createElement('div');

        let labelLenses = document.createElement('label');
        labelLenses.setAttribute('for', 'lentille');
        labelLenses.textContent = "Type d'objectif:  ";

        let selectLenses = document.createElement('select');
        selectLenses.setAttribute('id', 'lentille');

        for (let i = 0; i < reponse['lenses'].length; i++){
            let option = document.createElement('option');
            option.setAttribute('value', reponse['lenses'][i]);
            option.textContent = reponse['lenses'][i];
            selectLenses.appendChild(option);
        }

        lenses.appendChild(labelLenses);
        lenses.appendChild(selectLenses);
     

        card.appendChild(lenses);  

        // add price
        let price = document.createElement('span');
        let euros = parseInt(reponse['price']);
        euros = euros / 100;
        price.textContent = euros + ' \u20ac';
        card.appendChild(price);

        // add button
        let button = document.createElement('button');
        button.textContent = 'Ajouter au panier';
        button.style.backgroundColor = 'green';
        card.appendChild(button);
    }

}

getProduct();