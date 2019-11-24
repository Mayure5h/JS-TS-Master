//call and errorCallback in JavaScript

let userLeft = false;
let userWatchingCatMeme = false;

function watchTutorialCallback(callback, errorCallback){
    if(userLeft){
        errorCallback({
            name: 'user left',
            message: ':('            
        })
    } else if(userWatchingCatMeme){
        errorCallback({
            name: 'user watching cat meme',
            message: ':('
        })
    } else(
        callback('Everything is fine!')
    )
}

function callback(message){
    console.log('Success: ' + message);
}

function errorCallback(error){
    console.log(error.name + ' ' + error.message);
}

watchTutorialCallback(callback, errorCallback);