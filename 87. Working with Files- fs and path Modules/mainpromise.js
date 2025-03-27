import fs from "fs/promises"


let a = await fs.readFile("aryan.txt")
 
let b = await fs.writeFile("aryan.txt",
    "/n/n/n/nthis is amazing promise")

console.log(a.toString(), b)
