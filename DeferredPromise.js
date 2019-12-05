function first(){
    var dfd = $.Deferred();
    setTimeout(function() {
        alert('First function called');
        dfd.resolve();
    }, 2000);
    return dfd.promise();
}

function second(){
    var dfd = $.Deferred();
    setTimeout(function() {
        alert('Second function called')
        dfd.resolve('Something');
    }, 2000);
    return dfd.promise();
}

function third(test){
    alert('Third function called with parameter: ' + test);
}

first().done(function(){
    second().done(function(par){
        third(par);
    })
})
