//test
//alert("Ciao")


//raccolta dati
const userName=prompt("Ciao! Scrivi il tuo Nome?"); //string |null
console.log(userName, typeof userName);

const userSurname=prompt("Ora scrivi il tuo Cognome?"); //string |null
console.log(userSurname, typeof userSurname);

const color=prompt("Qual'è il tuo colore preferito?"); //string | null
console.log(color, typeof color);

const number=Math.floor(Math.random() * 101); //number
console.log(number, typeof number);


//esecuzione logica

//STAMPA MESSAGGIO
document.getElementById("title").innerHTML="Questa è la tua password";

//creazione messaggio
const resultMessage=`${userName}${userSurname}${color}`;
//STAMPA MESSAGGIO
document.getElementById("result").innerHTML=`${resultMessage}${number}` ;

