function reverseString(str){
    var reverse = "";
    for(var i = 0; i<str.length; i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
var statement = "Hello Align bhai.";
var forAlign = reverseString(statement);
console.log(forAlign);
var foodVlog = reverseString("ki korbo");
console.log(foodVlog)