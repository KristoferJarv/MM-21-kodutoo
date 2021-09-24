CRUD
Create
Read
Update
Delete

// Array CRUD (list, massiiv, array)
// Create
[]
["test" ,2,3,null]
console.log([])
let list = []
let list = ["test" ,2,3,null]
let fruits = ["mango" , "banana" , "apple"]
// Read
let list = [0] "test"
let list = [1] 2
let list = [2] 3
let list = [3] 4
let list = [4] 5

list.length // mitu elementi lists on
// viimane element
list  // undefined
// eelviimane element
list    // null

// kuidas leida array sees element
// indexof kus positsioonil element arrays on
// -1 on et ei ole arrays
// includes = sisaldab

fruits.indexOf ("banana") // -1
fruits.indexOf("mango") // 2

fruits.includes("pear") // false
fruits.includes("apple") // true

list.filter(elem => elem > 0) // 2,3

//update

// esimene number on positsioon/index
// teine number on mitu ära kustutada
// kolmas, neljas, viies jne on mida juurde lisada
fruits.push("kiwi")
fruits[4] = "mango"
fruits.splice(2,0 "plum") // lisab kolmandaks elemendiks plum



// delete
fruits.pop()
fruits.splice(2,1, "plum") /// kustudab kolmanda elemendi ära



fruits [4-2]
'apple'
a = 2
2
fruits[2]
'apple'
