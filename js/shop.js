
/*
 affichage du panier, si vide, pas de formulaire.



 Ecoute du bouton et Envoi de la commande



*/

const cameraPath = 'http://localhost:3000/api/cameras/order';
let prix_total = 0;


document.addEventListener('DOMContentLoaded', () =>{
    



    table = document.querySelector('table');
    
    formulaire = document.querySelector("#formulaire");
    btnCommander = document.querySelector("#commander");
    let remove = document.getElementsByClassName('supprimer');


    // affiche la page panier
    table.appendChild(affichePanier());
    
    // ecoute du bouton commander
    btnCommander.addEventListener('click',envoiCommande);

    // ecouter les poubelles 
    
    for (let item of remove){
        item.addEventListener('click', enleverItem);
    }

});




// ----------------------------------------------------affichage de la page
function affichePanier(){

    // get list of items
    const shopList = panierSave.getAll();

    let body = document.createElement('tbody');

    // affiche le panier si il n est pas vide
    if (panierSave.count() === 0){
        formulaire.style.display = 'none';
    }else{
        formulaire.style.display = 'block';
    }


    // essai iteration sur les items dans le panier, si erreur => le panier est vide
    try{
        for (let item of shopList){
            let row = document.createElement('tr');
            row.innerHTML = '<td>' + item.name + '</td><td class="text-center">' + parseInt(item.price) / 100 + " \u20ac" + '</td><td class="text-center"><i my_attr=' + item._id + ' class="far fa-trash-alt supprimer"></i></td>';
            body.appendChild(row);
            prix_total += item.price;
        }
        //total de la commande
        let row = document.createElement('tr');
        row.innerHTML = '<td class="text-end fw-bold">Total:</td><td class="text-center text-success">' + prix_total / 100 +  " \u20ac" + '</td>';
        body.appendChild(row);

    }catch{
        body.innerHTML = "<tr><td colspan='3'><h4 class='h4 text-center mt-4'>Votre panier est vide, depechez-vous de le remplir !</h4></td></tr>";
    }


    return body;
}





//-------------------------------------------------------------------------- envoi de la commande
function envoiCommande(event){
    console.log('envoi de la commande');
    event.preventDefault();


    // si le formulaire est valide...
    if (formulaire.elements.email.validity.valid && formulaire.elements.firstName.validity.valid && formulaire.elements.lastName.validity.valid && formulaire.elements.address.validity.valid && formulaire.elements.city.validity.valid){
        let contact = {
            firstName : formulaire.elements.firstName.value,
            lastName : formulaire.elements.lastName.value,
            address : formulaire.elements.address.value,
            city : formulaire.elements.city.value,
            email : formulaire.elements.email.value,
        };
        let dataEnvoi = {
            contact : contact,
            products: panierSave.getAllId()
        }

        console.log('Le formulaire est valide');
        // envoi des données au serveur
        envoyer(dataEnvoi).then(reponse); 
    
    }
    else{
        console.log("Le formulaire n'est pas valide");
        btnCommander.style.backgroundColor = '#dc3545';
    }

}



//----------------------------------------------------------------- effacement d'un item
function enleverItem(){
    let id = this.getAttribute("my_attr");
    panierSave.remove(id);
    location.reload();

}

// ---------------------------------------- fonction d'envoi des données
async function envoyer(data){
    var requestOptions = {
        method: 'POST',
        headers: { "content-type" : "application/json" },
        body: JSON.stringify(data)
    };

    let resp = await fetch(cameraPath,requestOptions);
    return await resp.json();
}

//-----------------------------------  fonction lancée lors de la réponse du serveur
// recuperation orderid et prix total
// suppression du panier
// envoi des données à la page confirmation
function reponse(response){

    panierSave.clear();

    window.open('confirmation.html?id=' + response['orderId'] + '&prix=' + prix_total + '&nom=' + response['contact']['lastName'], '_self' );

}