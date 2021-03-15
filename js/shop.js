
/*
 affichage du panier, si vide, pas de formulaire.



 Ecoute du bouton et Envoi de la commande



*/


document.addEventListener('DOMContentLoaded', () =>{
    // get list of items
    shopList = panierSave.getAll();



    table = document.querySelector('table');
    body = document.createElement('tbody');
    formulaire = document.querySelector("#formulaire");
    btnCommander = document.querySelector("#commander");


    affichePanier();

});




// affichage de la page
function affichePanier(){

    let total = 0;

    // Display form or not...
    if (panierSave.count() === 0){
        formulaire.style.display = 'none';
    }else{
        formulaire.style.display = 'block';
    }

    // essai iteration sur les items dans le panier
    try{
        for (let item of shopList){
            let row = document.createElement('tr');
            row.innerHTML = '<td>' + item.name + '</td><td class="text-right">' + parseInt(item.price) / 100 + '</td><td><i class="far fa-trash-alt"></i></td>';
            body.appendChild(row);
            total += item.price;
        }
        //total de la commande
        let row = document.createElement('tr');
        row.innerHTML = '<td class="text-right">Total:</td><td class="text-right">' + total / 100 + '</td>';
        body.appendChild(row);
        
        // ecoute du bouton commander
        btnCommander.addEventListener('click',envoiCommande);


    }catch{
        body.innerHTML = "<h4 class='h4 text-center mt-4'>Votre panier est vide, depechez-vous de le remplir</h4>";
    }

    table.appendChild(body);
}





// envoi de la commande
function envoiCommande(){
    console.log('envoi de la commande');
    btnCommander.style.backgroundColor = 'red';

    console.log(formulaire.elements.city.validity.valid);
    if (formulaire.elements.email.validity.valid && formulaire.elements.firstName.validity.valid && formulaire.elements.lastName.validity.valid && formulaire.elements.address.validity.valid && formulaire.elements.city.validity.valid){
        let contact = {
            firstName : formulaire.elements.firstName.value,
            lastName : formulaire.elements.lastName.value,
            address : formulaire.elements.address.value,
            city : formulaire.elements.city.value,
            email : formulaire.elements.email.value,
            product_id : panierSave.getAllId()
        };

        panierSave.clear();
        console.log(contact);
    }
}