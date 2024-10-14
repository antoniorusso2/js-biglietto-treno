//BIGLIETTO PER IL TRENO

//DATI PER IL CALCOLO DEL PREVENTIVO
//eta' del passeggero
  //prompt eta' del cliente con ritorno dati di tipo "number"
  let userAge = parseInt(prompt('Benvenuto/a, per il calcolo del preventivo inserisci qui di sotto l\'eta\'del passeggero'));

  // console.log(typeof userAge);
  console.log(userAge);
  
  //richiesta numero km da percorrere
    //prompt richiesta distanza espressa in km
  let tripDistance = parseInt(prompt('Inserisci adesso la distanza del viaggio in KM'));
  console.log(tripDistance);
  
  //prezzo totale calcolato in base alle info fornite dal cliente:
    // 1. 1km = 0.21€ ;
    // 2. 20% di sconto se eta' < 18;
    // 3. 40% di sconto se eta' > 65;
  
  //OUTPUT
  //prezzo con max 2 decimali