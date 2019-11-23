//Below function is a basic promise function syntax

let p = new Promise((resolve, reject) => {
    let n = 1 + 1;
    if(n == 2){
        resolve("Success")
    } else{
        reject("Rejected")        
    }
})

p.then((message) => {
    console.log("This is in the then " + message)
}).catch((message) => {
    console.log("This is in the catch " + message)
})