//chiedere quanti chilometri dovrà percorrere;
var distanza = prompt("Quanti chilometri vuoi percorrere?");
console.log( distanza );

//chiedere quanti anni ha;
var eta = prompt("Quanti anni hai?");
console.log( eta );

//calcolo prezzo toltale del biglietto e visualizzazione;
if (eta<18) {
    //calcolo del prezzo del biglietto in base ai chilometri per minorenni;
    var molt = 0.21 * distanza;
    var molt = molt * 20;
    var divisione = molt / 100;
    console.log( "tariffa ridotta per minorenni: " + divisione);
}
else if (eta>65) {
    //calcolo del prezzo del biglietto in base ai chilometri per anziani;
    var molt = 0.21 * distanza;
    var molt = molt * 40;
    var divisione = molt / 100;
    console.log( "tariffa ridotta: " + divisione );
}
else {
    //calcolo del prezzo del biglietto in base ai chilometri tariffa piena;
    var molt = 0.21 * distanza;
    console.log( "tariffa intera: " + molt);
}
