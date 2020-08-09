// Problem 1

function feetToMile(feet){
    if(feet<0){
        return 'Distance can not be negative';
    }
    var mile = feet/5280;
    var output = mile.toFixed(2);
    return output;
}
var yourMile = feetToMile(150);
console.log("Your Answer is:", yourMile);

//  Problem 2

function woodCalculator(chair,table,bed){
    if(chair<0 || table<0 || bed<0){
        return 'Wrong Input'
    }
    var woodForChair = chair * 1;
    var woodForTable = table * 3;
    var woodForBed = bed * 5;
    var totalWood = woodForChair + woodForTable + woodForBed;
    return totalWood;
}
var check = woodCalculator(2,4,8);
console.log("Total amount of wood: ", check);


// Problem 3

function brickCalculator(floor){
    if(floor<1){
        return 'Wrong Input';
    }
    if(floor<=10){
        return floor * 15000;
    }
    if(floor<=20){
        return 10 * 15000 + (floor - 10)*12000;
    }
    return (10 * 15000) + (10 * 12000) + (floor - 20) * 10000;

}
var result = brickCalculator(21);
console.log(result);

// Problem 4

function tinyFriend(friendName){
    var targetFriend = friendName[0];
    for(var i = 0; i < friendName.length; i++){
        var checkFriend = friendName[i];
        if(checkFriend.length < targetFriend.length){
            targetFriend = checkFriend;    
        }
    }
    return targetFriend;
}
var checkFriend = tinyFriend(['sadia', 'mim','akib']);
console.log("["+ checkFriend+"]");
