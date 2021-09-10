string number boolean object   tüüp type

// ctrl + K   ctrl + C  comment
//ctrl + K 

if else conditional
{

}

// Object on tüüp mis salvesta key-value paare.
// key: value 
let töötaja = {nimi: "Timo", palk: 10,}
let töötaja2 = {
  nimi: "Timo", 
  palk: 10,
  rahakott: 0,
  maksaPalka; function () {
      this.rahakott += this.palk
  },
  muuda: 5,
}

console.log(töötaja2.nimi)
console.log(töötaja2.rahakott)



töötaja2.palk += 5
töötaja2["palk"] += 5

// skoop scope
let rahakott = 10;
let tootehind = 5;
if(rahakott,>= tooteHind) {
  let rahakott = 30;
  let rahakott = rahakott - tooteHind
  rahakott += 10
}
console.log (rahakott)

function summa() {
    console.log(7+5)
}

summa()

let summa = function () {

}

typeof rahakott

typeof(summa)
'function'


// primative types:
// number string boolean object function undefined 
// user defined types:
// Math 




/*
  Katlal on kolm temoperatuurivahemikku
  0-20 on liiga külm
  21-40 on paras temperatuur
  41-60 on liiga kuum
  GitHubi: homework/checkTemp.js
*/
function checkTemp () {
      let temp = 5;

      if (temp < 0) {
          console.log("Liiga Külm")
      } else if (temp > 20 && temp <=40) {
          console.log("paras temperatuur")

      } else if (temp > 60) {
        console.log ("liiga kuum")
      }

  }
