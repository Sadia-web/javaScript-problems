var num = 2.12345;
var result1 = Math.floor(num);
console.log(result1);

// ceil

var num = 2.12345;
var result2 = Math.ceil(num);
console.log(result2);

//round

var num = 2.12345;
var result3 = Math.round(num);
console.log(result3);

// random

var dice = Math.random();
console.log(dice);

// random * 10

var dice = Math.random() * 10;
console.log(dice);

// round random

var randomNum = Math.random() * 10;
var output = Math.round(randomNum);
console.log(output);

// for loop

for(var i = 0; i<10; i++){
    var randomNum = Math.random() * 10;
    var output = Math.round(randomNum);
    console.log(output);
}

