
/*
 affichage du panier, si vide, pas de formulaire.



 Ecoute du bouton et Envoi de la commande



*/

const cameraPath = 'http://localhost:3000/api/cameras/order';


document.addEventListener('DOMContentLoaded', () =>{
    // get list of items
    shopList = panierSave.getAll();



    table = document.querySelector('table');
    body = document.createElement('tbody');
    formulaire = document.querySelector("#formulaire");
    btnCommander = document.querySelector("#commander");
    let remove = document.getElementsByClassName('supprimer');


    // affiche la page panier
    affichePanier();
    
    // ecoute du bouton commander
    btnCommander.addEventListener('click',envoiCommande);

    // ecouter les poubelles 
    
    for (let item of remove){
        item.addEventListener('click', enleverItem);
    }

});




// ----------------------------------------------------affichage de la page
function affichePanier(){

    
    let total = 0;

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
            row.innerHTML = '<td>' + item.name + '</td><td class="text-right">' + parseInt(item.price) / 100 + " \u20ac" + '</td><td><i my_attr=' + item._id + ' class="far fa-trash-alt supprimer"></i></td>';
            body.appendChild(row);
            total += item.price;
        }
        //total de la commande
        let row = document.createElement('tr');
        row.innerHTML = '<td class="text-right">Total:</td><td class="text-right">' + total / 100 +  " \u20ac" + '</td>';
        body.appendChild(row);

    }catch{
        body.innerHTML = "<tr><td colspan=3><h4 class='h4 text-center mt-4'>Votre panier est vide, depechez-vous de le remplir</h4></td></tr>";
    }


    table.appendChild(body);


}





//-------------------------------------------------------------------------- envoi de la commande
function envoiCommande(event){
    console.log('envoi de la commande');
    event.preventDefault();

    console.log(formulaire.elements.city.validity.valid);

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
        
        panierSave.clear();
        console.log(dataEnvoi);

        envoyer(dataEnvoi).then(reponse); 
    
    }

}



//----------------------------------------------------------------- effacement d'un item
function enleverItem(){
    let id = this.getAttribute("my_attr");
    console.log(id);
    panierSave.remove(id);
    location.reload();

}


async function envoyer(data){
    var requestOptions = {
        method: 'POST',
        headers: { "content-type" : "application/json" },
        body: JSON.stringify(data)
    };

    let resp = await fetch(cameraPath,requestOptions);
    return await resp.json();
}


function reponse(response){
    console.log(response['orderId']);

}