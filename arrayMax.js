var marks = [45, 81, 40, 56, 90, 20,43];
var max = marks[0];
for(var i = 0; i< marks.length; i++){
    var element = marks[i];
    if(element > max){
        max = element;
    }
}
console.log("Highest value is: ", max);