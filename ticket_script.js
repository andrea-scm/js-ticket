var dati, frase,prezzo,sconto;
dati = [];
frase = '';

for (n = 1; n >= 0; n-- ){
  if(n == 1){
    frase = 'inserisci km';
  }else{
    frase = 'inserisci età';
  }
  dati[n] = prompt(frase);
  console.log(dati);
}

prezzo = dati[1] * 0.21;

if (dati[0] < 18){
  sconto = (prezzo*20)/100;
  prezzo = prezzo - sconto;
}else if(dati[0] >59){
  sconto = (prezzo*60)/100;
  prezzo = prezzo - sconto;
}else{
  prezzo = prezzo;
}

document.getElementById('età').innerHTML = dati[0];
document.getElementById('km').innerHTML = dati[1];
document.getElementById('prezzo').innerHTML = prezzo.toFixed(2) + '€';
