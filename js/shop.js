

// display the content of local storage
document.addEventListener('DOMContentLoaded', () =>{
    // get list of items
    let shopList = panierSave.getAll();

    let total = 0;

    let table = document.querySelector('table');
    let body = document.createElement('tbody');
    let formulaire = document.querySelector("#formulaire");

    // Display form or not...
    if (panierSave.count() === 0){
        formulaire.style.display = 'none';
    }else{
        formulaire.style.display = 'block';
    }


    try{
        for (let item of shopList){
            let row = document.createElement('tr');
            row.innerHTML = '<td>' + item.name + '</td><td class="text-right">' + parseInt(item.price) / 100 + '</td>';
            body.appendChild(row);
            total += item.price;
        }
        //create button for command
        let row = document.createElement('tr');
        row.innerHTML = '<td class="text-right">Total:</td><td class="text-right">' + total / 100 + '</td>';
        body.appendChild(row);
    // if shoplist is not iterable => shoplist = empty
    }catch{
        body.innerHTML = "<h4 class='h4 text-center mt-4'>Votre panier est vide, depechez-vous de le remplir</h4>";
    }

    table.appendChild(body);


});