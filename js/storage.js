


// class for panier storage
class panierSave{
    //add object in local storage
    static add(id, name){
        if (!localStorage.getItem('panier')){
            console.log('pas d enregistrements');
            //creer le panier
            return;
        }
        // affiche local
        console.log(localStorage.getItem('panier'));
    }
    // remove object with corresponding id
    static remove(id){}
    // return the numner of items in panier
    static count(){}
    // get all id of panier
    static getAll(){}
}