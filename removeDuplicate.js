var name = [3,4,6,7,5,6,3,80];
var uniqueName = [];
for(var i = 0; i<name.length; i++){
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if(index == -1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);


// 
var person =['mim', 'akib', 'saber', 'akib','mim','sakib'];
var uniquePerson = [];
for(var i = 0; i<person.length; i++){
    var personCount = person[i];
    var count = uniquePerson.indexOf(personCount);
    if(count == -1){
        uniquePerson.push(personCount);
    }
}
console.log(uniquePerson);

//using function

function arrayNew(name){
    var uniqName = [];
    for(var i = 0; i < name.length; i++){
        var element = name[i];
        var index = uniqName.indexOf(element);
        if(index == -1){
            uniqName.push(element);
        }
    }
    return uniqName;
}
var result = arrayNew([4,5,4,3,7,3,8,9,1,9]);
console.log(result);
