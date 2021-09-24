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

//enum


/*
  Katlal on kolm temoperatuurivahemikku
  0-20 on liiga külm          -1
  21-40 on paras temperatuur   0 
  41-60 on liiga kuum          1 
  GitHubi: homework/checkTemp.js
*/
function checkTemp (temp) {
      console.log("temp on "+temp)
      if (temp < 20) {
          console.log("Liiga Külm")
          return -1;
      } else if (temp <=40) {
        console.log("paras temperatuur")
          return 0;

      } else {
        console.log("liiga kuum")
          return 1;
       
      }

  }


let tulemus = checkTemp(5)

checkTemp(5)
checkTemp(15)
checkTemp(30)
checkTemp(45)
checkTemp(55)


function checkTemp() {
  let Temp = 5;
  temp = Math.random()*60 
}


  function summa(a,b ) {
      return a+b
  }
let Vastus = summa(2,7)

function kasKütta(temp) {
  return temp < 20
}

function kasJahutada(temp) {
    returntemp > 40
}




checkTemp
  checkTemp(temp) {
  
    
    
    
    if(temp<20){
    console.Log("Liiga Külm");
    return -1;
    }if(temp>40){
    console.Log("Liiga Kuum");
    return +1;
    }else if(temp>20 && temp <=40)
    console.Log("Väga Hea")
    return 0;
  
  }
  










  function checkTemp(temp) {

  if ( temp >= 21 && temp <= 40 ) {
    console.Log("Väga Hea")
    return 0;

  }  if ( temp > 0 && temp <= 20 ) {
    console.Log("Liiga Külm");
        return -1;
      

   }   else if ( temp > 40 && temp < 60)
   console.Log("Liiga Kuum");
   return 1;

  
  }




  function checkTemp(temp) {
    console.log(temp);
    if (temp <= 20) {
    console.log("liiga külm")
    return -1;
    } else if (temp <= 40) {
    console.log("piisav")
    return 0;
    } else {
    console.log("liiga kuum")
    return 1;
      }
    }