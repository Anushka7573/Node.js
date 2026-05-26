const fs = require('fs');

// fs.readFile('index.txt', 'utf-8', (err, data)=>{
//         console.log(err, data);

// const a = fs.readFileSync('file.txt')
// console.log(a.toString())

// fs.writeFile("file.txt","This is file data",()=>{
//     console.log("written the file")

// });

a = fs.writeFileSync('file.txt', "This is file data2")
console.log(a)
console.log("Finished reading file")