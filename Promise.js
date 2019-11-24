//Reference: https://www.youtube.com/watch?v=DHvZLI7Db8E

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

//*****************************************************************

//Another example similar to callback 

let userLeft = false;
let userWatchingCatMeme = false; 

function watchTutorialCallback(){
    return new Promise((resolve, reject) => {
        if(userLeft){
            reject({
                name: 'user left',
                message: ':('            
            })
        } else if(userWatchingCatMeme){
            reject({
                name: 'user watching cat meme',
                message: ':('
            })
        } else{
            resolve('Everything is fine!')
        }
    })
}

watchTutorialCallback().then((message) => {
    console.log('Success: ' + message);
}).then((message) => {                      //We can call multiple then
    console.log('Success: ' + message); 
}).catch((error) => {
    console.log(error.name + ' ' + error.message);
})
