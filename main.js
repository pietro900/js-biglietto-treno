//chiedere quanti chilometri dovrà percorrere;
var distanza = prompt("Quanti chilometri vuoi percorrere?");
console.log( distanza );
document.getElementById( "km" ) .innerHTML = distanza + " km";

//chiedere quanti anni ha;
var eta = prompt("Quanti anni hai?");
console.log( eta );
document.getElementById( "anni" ) .innerHTML = eta + " anni";

//calcolo prezzo toltale del biglietto e visualizzazione;
var molt = 0.21 * distanza;

if (eta<18) {
    //calcolo del prezzo del biglietto in base ai chilometri per minorenni;
    var molt2 = molt * 20;
    var divisione = molt2 / 100;
    var totale= molt - divisione;
    console.log( "tariffa ridotta per minorenni: " + divisione);
    document.getElementById( "demo" ) .innerHTML = totale.toFixed(2) + " euro";
}
else if (eta>65) {
    //calcolo del prezzo del biglietto in base ai chilometri per anziani;
    var molt2 = molt * 40;
    var divisione = molt2 / 100;
    var totale= molt - divisione;
    console.log( "tariffa ridotta: " + divisione );
    document.getElementById("demo").innerHTML = totale.toFixed(2) + " euro";
}
else {
    //calcolo del prezzo del biglietto in base ai chilometri tariffa piena;
    var molt = 0.21 * distanza;
    console.log( "tariffa intera: " + molt);
    document.getElementById("demo").innerHTML = moltiplicazione .toFixed(2) + " euro";
}
