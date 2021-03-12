


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
        let jsonPanier = JSON.parse(localStorage.getItem('panier'));
        jsonPanier.push(item);
        localStorage.setItem('panier', JSON.stringify(jsonPanier));
        console.log('add: ', item.name);
    }
    // remove first object with corresponding id
    static remove(id){
        console.log('remove id');
    }
    // return the numner of items in panier
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
    // get all id of panier or 0
    static getAll(){
        console.log('get all id');
        let tabItem = JSON.parse(localStorage.getItem('panier'));
        return tabItem;
    }
    // clear all local storage
    static clear(){
        console.log('clear all local storage');
        localStorage.clear();
    }
}


/*
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
*/
