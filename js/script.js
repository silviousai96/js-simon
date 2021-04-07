// Un alert() espone 5 numeri generati casualmente. Da li parte un timer di 30 secondi. 
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente,tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, 
// il software dice quanti e quali dei numeri da indovinare sono stati individuati.



//(funzione per generare numeri casuali 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


// genero 5 numeri casuali e gli metto in un array
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

//uso la funzione setTimeout per chiedere dopo 30 sec. i 5 numeri all'utente attraverso un ciclo for

var timerSeconds = 30 * 1000;

setTimeout(function() {
    
    var arrayUtente = [];
    
    for( var i=0; i < 5; i++ ) {
        var numUtente;
        numUtente = parseInt( prompt("Inserisci numero visto: "));
        //vedo se il numero inserito dall'utente è nella lista di numeri generata dal computer, 
        //se è vero, gli aggiunge ai numeri dell'utente ricordati.
        if (arrayRandom.includes(numUtente) ) {
            arrayUtente.push(numUtente);
            
        }
            
    }
    //stampo all'utente con un alert quanti e quali numeri ha ricordato.
    alert("Hai indovinato " + arrayUtente.length + " numeri. I numeri sono: " + arrayUtente);
}, timerSeconds);





