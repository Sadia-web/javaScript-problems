//finding length
var speech = "I am a good person. I don't snore at night";
console.log(speech.length);

// finding index

var speech = "I am a good person. I don't snore at night";
console.log(speech[3]);

//
var count = 0;
var speech = "I am a good person. I don't snore at night.";
for(var i = 0; i<speech.length; i++){
    var char = speech[i];
    if(char == " "){
        count++;

    }
}
count++;

console.log(count);

// 2 ta space dile

var count = 0;
var speech = "I am  a good person. I don't snore at night.";
for(var i = 0; i<speech.length; i++){
    var char = speech[i];
    if(char == " " && speech[i-1] != " "){
        count++;

    }
}
count++;

console.log(count);