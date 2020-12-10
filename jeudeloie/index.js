

// Pour afficher index du tableau:
let cases = document.querySelectorAll('td');

// chemin du plateau 
let chemin = [
    111,
    110,
    109,
    108,
    107,
    106,
    105,
    104,
    96,
    88,
    80,
    72,
    64,
    56,
    48,
    40,
    32,
    24,
    16,
    8,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    15,
    23,
    31,
    39,
    47,
    55,
    63,
    71,
    79,
    87,
    95,
    94,
    93,
    92,
    91,
    90,
    82,
    74,
    66,
    58,
    50,
    42,
    34,
    26,
    18,
    19,
    20,
    21,
    29,
    37,
    45,
    53,
    61,
    69,
    77

];



// Tab joueurs:
let joueurs = [
    {
        pseudo: 'Blidnight',
        position: 0,
        image : document.createElement("img")
    },
    {
        pseudo: 'Liftiz',
        position: 0,
        image : document.createElement("img")
    }
]


//Random du dé: 

var myPix = new Array("img/","img/un.png","img/deux.png","img/trois.png","img/quatre.png", "img/cinq.png","img/six.png");
 let des = document.getElementById('de');
let valeurdes = "Lancer le dé ";
let desAleatoire ; 
des.innerText = valeurdes;
des.onclick= () => {
desAleatoire = Math.floor(1+Math.random()*myPix.length);
document.querySelector('#imgDes').src = myPix[desAleatoire]


// Version sans images: =>
// let valeurdes = 0;
// let desAleatoire ; 
// des.innerText = valeurdes;
// des.onclick= () => {
// desAleatoire = Math.floor(Math.random()*6);
// des.innerText = desAleatoire;

}
// forEach = pour chaque élément

// Je cherche dans la tab chemin la position de la case dans la tableau si il n'y es pas je renvoie -1 et le rend invisible
function updateCases() {
cases.forEach((elementHTMLCase, positionDeElementCasedansletableau) =>{
   if(chemin.indexOf(positionDeElementCasedansletableau) == -1  ){
       elementHTMLCase.style.visibility='hidden';
   }

   //Afficher joueur dans le plateau
   joueurs.forEach((joueur, index ) =>{
       let pos = chemin[joueur.position];
       // Si la position correspond a la position du joueur, alors on écrit son pseudo
       if(pos == positionDeElementCasedansletableau){
        
     joueurs[0].image.src = "img/pion2.png";
   joueurs[0].image.style.height = '70px';
   joueurs[0].image.style.width = '55px';
 
   joueurs[1].image.src = "img/queen.png";
   joueurs[1].image.style.height = '72px';
   joueurs[1].image.style.width = '55px';

      elementHTMLCase.appendChild(joueur.image);
       }
       if ( joueur.index ==0){
           pos += desAleatoire; 
       }
   } )
})
}



// Random de carte 
let carte = document.getElementById('carte');
let cartes = [
    'Avance de X cases',
    'Recule de X cases'
];
 let cartesAction = [
     1,
     -1
 ]

// Tour des joueurs:
let tourInfo = document.querySelector("#tourInfo");
let tourDuJoueur = 0;
tourInfo.innerText = "Tour de : "+ joueurs[tourDuJoueur].pseudo;



carte.onclick = () => {
let carteAleatoire = Math.floor(Math.random() * cartes.length); 
carte.innerText = cartes[carteAleatoire].replace('X', desAleatoire);
// Tour des joueurs:
if (tourDuJoueur == 0) {
    tourDuJoueur = 1;
}
else {
    tourDuJoueur = 0
}
tourInfo.innerText = "Tour de : "+ joueurs[tourDuJoueur].pseudo;

// Déplacement des joueurs:

 if (joueurs[tourDuJoueur]){
   let joueur = joueurs[tourDuJoueur]
    let prochaineCase = joueur.position + cartesAction[carteAleatoire] * desAleatoire
     if (chemin[prochaineCase] != undefined){
      joueur.position = prochaineCase
   } else {
     if (prochaineCase < 0) {
           joueur.position = 0
       }
   }
   if(joueur.position === 20){
    let win = document.getElementById('win');
    win.innerText = "Vous avez gagné";
}
}

updateCases();

}









