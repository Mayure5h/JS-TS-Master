//Map over the keys of the object using Object.keys():

{Object.keys(yourObject).map(function(key) {
    return <div>Key: {key}, Value: {yourObject[key]}</div>;
})}

***********************************************************************
//Find array value based on key value 
    
var myArray = [
 {id:1, name:"bob"},
 {id:2, name:"dan"},
 {id:3, name:"barb"},
]

// grab the Array item which matchs the id "2"
var item = myArray.find(item => item.id === 2);

// print
console.log(item.name);
