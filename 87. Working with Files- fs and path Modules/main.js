const fs = require("fs")

console.log("Start")
// fs. writeFileSync("aryan.txt", "Aryan is a great boy")

fs.writeFile("aryan2.txt", "Aryan is a good boy", ()=>{
    console.log("File is created")
    fs.readFile("aryan2.txt", "utf-8", (err, data)=>{
        console.log(error, data.toString())
    })
})

fs.appendFile("aryan.txt", "Harryrobo", (e, d)=>{
    console.log("File appended")
}) 
console.log("Ending");
