//BIGLIETTO PER IL TRENO

//DATI PER IL CALCOLO DEL PREVENTIVO

//DATI UTENTE
  //eta' del passeggero
  //prompt eta' del cliente con ritorno dati di tipo "number"
  let userAge = parseInt(prompt('Benvenuto/a, per il calcolo del preventivo inserisci qui di sotto l\'eta\'del passeggero')); //number
  // console.log(typeof userAge);
  console.log(userAge);
  
  //richiesta numero km da percorrere
    //prompt richiesta distanza espressa in km
  let tripDistance = parseFloat(prompt('Inserisci adesso la distanza del viaggio in KM')); //number
  console.log(Number(tripDistance));

//PREZZO BASE
  //prezzo totale per la distanza da percorrere calcolato in base alle info fornite dal cliente:
    // 1. 1km = 0.21€ ;
  let kmPrice = tripDistance * 0.21; 
  let kmRoundedPrice = Math.round(kmPrice*100)/100//number
  console.log(`Il prezzo basato sulla distanza per questo biglietto è di ${kmRoundedPrice} €`); //string
  // console.log(typeof kmPrice) 

//SCONTI DA APPLICARE  
  let discount ;
  let discountedPrice ;
    // 2. se eta' < 18 = 20% di sconto
    if (userAge < 18) {
      discount = kmPrice * 20 / 100; //number
      discountedPrice = Math.round(kmPrice * 100) / 100;// number
    }
    // 3. se eta' > di 65 = 40% di sconto
    else if (userAge > 65) {
      discount = kmPrice * 40 / 100; // number
      discountedPrice = Math.round(kmPrice * 100) / 100;// number
    }
  console.log(`In base all\'eta\' del passeggero verrà applicato uno sconto pari a ${discountedPrice} €`);


//OUTPUT
  //prezzo con max 2 decimali
  let finalPrice = Math.round((kmPrice - discount) * 100) / 100 ;

  console.log(`Il prezzo finale è pari a ${finalPrice} €`);
  
 