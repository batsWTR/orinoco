

let cameraPath = 'http://localhost:3000/api/cameras';
let mainContent = document.getElementById('content');

function getCameras(){
    let requete = new XMLHttpRequest();
    requete.open('GET', cameraPath);
    requete.responseType = 'json';
    requete.send(null);
    requete.onload = function(){
        let reponse = requete.response;
        console.log(reponse);
    }

}



getCameras();

