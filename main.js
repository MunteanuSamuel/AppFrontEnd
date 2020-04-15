//declarare variabile globale. array, x, y.
let tablou = [];
let x = document.getElementById("nrx").value;
let y = document.getElementById("nry").value;


//functie de selectare a numerelor de la x la y, introducerea lor in array global tablou.
function selecteazaNumere (x, y){
    x = document.getElementById("nrx").value;
    y = document.getElementById("nry").value;
    let numere = Number.parseInt(x);
    while (numere<=y) {
        tablou.push(numere);
        numere++;
    }
    return tablou;
}
//functie de afisare in ordine crescatoare a numerelor de la x la y, introducerea lor in DOM.
function afiseazaNumere (){
    x = document.getElementById("nrx").value;
    y = document.getElementById("nry").value;
    let numereAlese = selecteazaNumere(x, y);
    document.querySelector("#numere").innerHTML="Numerele de la " + x + " la " + y + " sunt: " + numereAlese;
    return numereAlese;
}


// functie de selectare a numerelor impare de la x la y.
function selecteazaImpare (a){
    let tablouImpare = [];
    for (let i=0; i<=a.length; i++){
        let rest = i%2;
        if (rest !== 0){
            tablouImpare.push(i);
        }
    }
    return tablouImpare;
}
// functie de afisare a numerelor impare
function afiseazaImpare (){
    x = document.getElementById("nrx").value;
    y = document.getElementById("nry").value;
    let impareAlese = selecteazaImpare(tablou);
    document.querySelector("#numereImpare").innerHTML = "Numerele impare de la " + x + " la " + y + " sunt: " + impareAlese;
}


//functie de calculat suma elementelor din array.
function calculeazaSuma (array) {
    let suma = 0;
    for (let i=0; i<=array.length; i++){
        suma = suma + i;
    }
    return suma;
}
//functie de afisare a sumei elementelor
function afiseazaSuma() {
    let suma = calculeazaSuma(tablou);
    document.querySelector("#suma").innerHTML = "suma elementelor de le " + x + " la " + y + " este: " + suma;
    return suma;
}


//functie de calcul a elementului maxim din array-ul tablou;
function calculeazaMax(asdf){
    let maxim = 0;
    let i = 0;
    while (i<=asdf.length){
        if (i>maxim){
            maxim = i;
        }
        i++;
    }
    return maxim;
}
//functie de afisare a numarului maxim;
function afiseazaMax (){
    let max = calculeazaMax(tablou);
    document.querySelector("#maxim").innerHTML = "Elementul maxim dintre numerele de la " + x + " la " + y + " este: " + max;
    return max;
}


//functie de afisare a referintei
function afiseazaRef (){
    let ref=document.getElementById("numar").value;
    document.getElementById("referinta").innerHTML = "Referinta aleasa este: " + ref;
}
//functie de calcu al numarului de repetitii al unui element introdus de utilizator.
function calculeazaRep (qwerty){
    let referinta = document.getElementById("numar").value;
    let counter = 0;
    for (let i = 0; i<=qwerty.length; i++){
        if (referinta == (qwerty[i])){
            counter++;
        }
        console.log(counter);
    }
    return counter;
}
// functie de afisare a numarului de repetitii
function afiseazaRep(){
    let numar = document.getElementById("numar").value;
    console.log(numar);
    let repetitii = calculeazaRep(tablou);
    document.getElementById("numarRep").innerHTML = "Numarul " + numar + " se repeta de " + repetitii + " ori.";
}