//test
//alert("Ciao")

const userName=prompt("Ciao! Scrivi il tuo Nome?"); //string
console.log(userName, typeof userName);

const userSurname=prompt("Ora scrivi il tuo Cognome?"); //string
console.log(userSurname, typeof userSurname);

const color=prompt("Qual'è il tuo colore preferito?"); //string
console.log(color, typeof color);

const number=Math.floor(Math.random() * 101); //number
console.log(number, typeof number);


//STAMPA MESSAGGIO
document.getElementById("title").innerHTML="Questa è la tua password";

//creazione messaggio
const resultMessage=`${userName}${userSurname}${color}`;
//STAMPA MESSAGGIO
document.getElementById("result").innerHTML=`${resultMessage}${number}` ;

