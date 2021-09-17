Array []
let tahaTeada = prompt ("Mis kuu")
let et = [10,12,15,13,15,11,22,31,17,21,10,19];
console.log(et)
console.log(et[tahaTeada-1])



let tahaTeada = prompt ("Mis kuu")
let et = [10,12,15,13,18,11,22,31,17,21,10,19];
let kuu = ["Jan", "Veb", "Mar", "Apr", "Mai", "Jun"];
console.log(kuu[0]+" tarbimine on "+et[tahaTeada-1]);








let tahaTeada = prompt ("Mis kuu")
let et = [1,2,3,4,5,6,7,8,9,10,11,12];
console.log(et)
console.log(et[tahaTeada]) 






// for
// while
for (let number = 1; number <=100; number ++) {
    console.log(number)
}

for (let x=1; x <=100; x++) {
    console.log(x)
}

let x=1;
while(x <= 100) {
    console.log(x);
    x++
}


let tööta=true;
while(tööta) {
    console.log(1);
    console.log(new Date().getMinutes())
    if(new Date().getMinutes() >= 27) {
        tööta = false;

    } 
    Sleep(10)
    }
