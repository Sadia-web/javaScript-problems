var numbers = [40,20,40,45,29];
var sum = 0;
for(var i = 0; i< numbers.length; i++){
    var element = numbers[i];
    sum = sum + element;
}
console.log("total of the numbers: ", sum);

//using function

function getArraySum(numbers){
    var sum = 0;
    for(var i = 0; i< numbers.length; i++){
    var element = numbers[i];
    sum = sum + element;
    }
    return sum;

}
var numbers = [40,20,40,45,29];
var result = getArraySum(numbers);
console.log("total of the numbers: ", result);
var total = getArraySum([40,40,20]);
console.log("total of the numbers: ", total);
