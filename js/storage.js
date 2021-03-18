
/*

 classe panierSave, fonctions statiques pour le stockage des caméras


    + fonctions diverses

*/
class panierSave{
    //ajoute un objet dans panier ou crée panier et ajoute l'objet     TESTE
    static add(item){
        if (!localStorage.getItem('panier')){
            console.log('pas d enregistrements add :' + item.name);
            let firstTab =[];
            firstTab.push(item);
            localStorage.setItem('panier',JSON.stringify(firstTab));
            return;
        }
        let jsonPanier = JSON.parse(localStorage.getItem('panier'));
        jsonPanier.push(item);
        localStorage.setItem('panier', JSON.stringify(jsonPanier));
        console.log('add: ', item.name);
    }

    // retire le 1er objet avec id du panier, renvoi 0 si ok et -1 si nok    TESTE
    static remove(id){
        console.log('remove id');
        let tabItem = JSON.parse(localStorage.getItem('panier'));
        for(let index in tabItem){
            if (id === tabItem[index]['_id']){
                tabItem.splice(index,1);
                if (tabItem.length === 0){
                    localStorage.removeItem('panier');
                }
                else{
                    localStorage.setItem('panier', JSON.stringify(tabItem));
                }
                return 0;
            }
        }
        return -1
    }

    // retourne ne nombre d'items dans le panier     TESTE
    static count(){
        console.log('Count number of items')
        let count = 0;
        try{
            count = JSON.parse(localStorage.getItem('panier')).length;
        }catch{
            count = 0;
        }
        return count;
    }

    // retourne un tableau de produits ou 0
    static getAll(){
        console.log('get all id');
        return  JSON.parse(localStorage.getItem('panier'));
     
    }


    // retourne un tableau d'id ou 0 si aucun   TESTE
    static getAllId(){
        try{
            let tabItem = JSON.parse(localStorage.getItem('panier'));
            let tabId = [];
            for (let item of tabItem){
                tabId.push(item['_id']);
            }
            return tabId;

        }catch{
            return 0;
        }
    }

    // efface le panier    TESTE
    static clear(){
        console.log('effacement de local storage');
        localStorage.clear();
    }
}



let bats = {name:'bats', id: '64'};
//panierSave.clear();
//panierSave.add(bats);
//panierSave.getAll();
//panierSave.clear();
//panierSave.add({name:'olive', id: '32'});
//panierSave.add({name:'sim', id: '23'});
//panierSave.add(bats);
//panierSave.add({name:'martine', age: 32});
//panierSave.add({name:'raph', age: 23});
//console.log(panierSave.count());
//console.log(panierSave.getAll());
//console.log(panierSave.remove('64'));
//console.log(panierSave.getAll());


// affichage dans index et produit du nombre d'items dans le panier
function affich_panier_count(){
    let elem = document.querySelector('#item_count');

    if (panierSave.count() === 0){
        elem.textContent = '';
    }
    else{
        elem.textContent = panierSave.count();
    }
}