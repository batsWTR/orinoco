
/*
 affichage du panier, si vide, pas de formulaire.



 Ecoute du bouton et Envoi de la commande



*/


document.addEventListener('DOMContentLoaded', () =>{
    // get list of items
    let shopList = panierSave.getAll();

    let total = 0;

    let table = document.querySelector('table');
    let body = document.createElement('tbody');
    let formulaire = document.querySelector("#formulaire");
    let btnCommander = document.querySelector("#commander");

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
            row.innerHTML = '<td>' + item.name + '</td><td class="text-right">' + parseInt(item.price) / 100 + '</td>';
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
   

});


function envoiCommande(){
    console.log('envoi de la commande');
}
