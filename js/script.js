// Un alert() espone 5 numeri generati casualmente. Da li parte un timer di 30 secondi. 
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente,tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, 
// il software dice quanti e quali dei numeri da indovinare sono stati individuati.



//(funzione per generare numeri casuali 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


//1. genero 5 numeri casuali e gli metto in un array
var arrayRandom = [];

  while( arrayRandom.length < 5 ) {
    var numCasuale;
    numCasuale = getRndInteger(1, 100);
    if ( arrayRandom.includes(numCasuale) == false ) {
         arrayRandom.push(numCasuale);
    }        
 }
//alert con i 5 numeri casuali da ricordare
alert(arrayRandom);

//2. 
