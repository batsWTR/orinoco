


// class for panier storage
class panierSave{
    //add object in local storage
    static add(item){
        if (!localStorage.getItem('panier')){
            console.log('pas d enregistrements add :' + item.name);
            let firstTab =[];
            firstTab.push(item);
            localStorage.setItem('panier',JSON.stringify(firstTab));
            return;
        }
        // affiche local
        let jsonPanier = JSON.parse(localStorage.getItem('panier'));
        jsonPanier.push(item);
        localStorage.setItem('panier', JSON.stringify(jsonPanier));
        console.log('add: ', item.name);
    }
    // remove object with corresponding id
    static remove(id){
        console.log('remove');
    }
    // return the numner of items in panier
    static count(){
        return JSON.parse(localStorage.getItem('panier')).length;

    }
    // get all id of panier
    static getAll(){
       // console.log('get all');
        let tabItem = JSON.parse(localStorage.getItem('panier'));
        return tabItem;
    }
    // clear all local storage
    static clear(){
        console.log('clear');
        localStorage.clear();
    }
}



let bats = {name:'bats', age: 44};
panierSave.clear();
panierSave.add(bats);
//panierSave.getAll();
//panierSave.clear();
panierSave.add({name:'olive', age: 32});
panierSave.add({name:'sim', age: 23});
panierSave.add(bats);
panierSave.add({name:'martine', age: 32});
panierSave.add({name:'raph', age: 23});
console.log(panierSave.count());
console.log(panierSave.getAll());
