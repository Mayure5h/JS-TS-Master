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

//*********************************************************************

//Cascading/depending promises using normal function

let cleanTheRoom = function(){
    return new Promise(function (resolve, reject) {
        setTimeout(function(){ 
            resolve('Cleaned the room!');
        }, 3000); 
    });
};

let removeGarbage = function(message){
    return new Promise(function (resolve, reject) {
        resolve( message + 'Removed the garbage!');
    });
};

let wonIceCream = function(message){
    return new Promise(function (resolve, reject) {
        resolve(message + 'Won the Ice Cream!');
    });
};

cleanTheRoom().then( function(result) {
    return removeGarbage(result);
}).then(function(result) {
    return wonIceCream(result);
}).then(function(result) {
    console.log(result);
})


//*********************************************************************

//Cascading/depending promises using arrow function

let cleanTheRoom = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            resolve('Cleaned the room!');
        }, 3000);        
    });
};

let removeGarbage = (message) => {
    return new Promise((resolve, reject) => {
        resolve( message + 'Removed the garbage!');
    });
};

let wonIceCream = (message) => {
    return new Promise((resolve, reject) => {
        resolve(message + 'Won the Ice Cream!');
    });
};

cleanTheRoom().then((result) => {
    return removeGarbage(result);
}).then((result) => {
    return wonIceCream(result);
}).then((result) => {
    console.log(result);
})