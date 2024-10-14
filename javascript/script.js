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
  let tripDistance = Number(parseFloat(prompt('Inserisci adesso la distanza del viaggio in KM')).toFixed(2)); //number
  // console.log(typeof tripDistance);
  console.log(tripDistance);

//PREZZO BASE
  //prezzo totale per la distanza da percorrere calcolato in base alle info fornite dal cliente:
    // 1. 1km = 0.21€ ;
  let kmPrice = parseFloat((tripDistance * 0.21).toFixed(2)); //number
  console.log(`Il prezzo basato sulla distanza per questo biglietto è di ${kmPrice} €`);
  // console.log(typeof kmPrice) //number
  // console.log(typeof kmPrice) 

//SCONTI DA APPLICARE  
  let discount ;
    // 2. se eta' < 18 = 20% di sconto
    if (userAge < 18) {
      discount = parseFloat((kmPrice * 20 / 100).toFixed(2)); //number
    }
    // 3. se eta' > di 65 = 40% di sconto
    else if (userAge > 65) {
      discount = parseFloat((kmPrice * 40 / 100).toFixed(2)) // number
    }
    else {
      discount = 0;
    }
  console.log(`In base all\'eta\' del passeggero verrà applicato uno sconto pari a ${discount} €`);
  // console.log(typeof discount) //number


//OUTPUT
  //prezzo con max 2 decimali
  let discountedPrice = parseFloat((kmPrice - discount).toFixed(2)) ; //number
  let noDiscountPrice = kmPrice; //number

  //console.log(typeof userAge, typeof tripDistance, typeof kmPrice, typeof discount, typeof discountedPrice, typeof noDiscountPrice) //all price and data result as a number

  console.log(`Il prezzo finale è pari a ${discountedPrice} €`);
  
 