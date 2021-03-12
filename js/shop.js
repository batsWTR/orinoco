

// display the content of local storage
document.addEventListener('DOMContentLoaded', () =>{
    // get list of items
    let shopList = panierSave.getAll();

    let total = 0;

    let table = document.querySelector('table');
    let body = document.createElement('tbody');

    try{
        for (let item of shopList){
            let row = document.createElement('tr');
            row.innerHTML = '<td>' + item.name + '</td><td class="text-right">' + parseInt(item.price) / 100 + '</td>';
            body.appendChild(row);
            total += item.price;
        }
        //create button for command
        let row = document.createElement('tr');
        row.innerHTML = '<td colspan=2 class="text-right">' + total / 100 + '</td>';
        body.appendChild(row);
    // if shoplist is not iterable => shoplist = empty
    }catch{
        body.innerHTML = "<h4 class='h4 text-center mt-4'>Votre panier est vide</h4>";
    }




    table.appendChild(body);

});