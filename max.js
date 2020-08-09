var business = 450;
var minister = 350;

if(business > minister){
    console.log("Business is bigger");
}
else{
    console.log("minister is bigger");
}

// 3 variable

var business = 450;
var minister = 950;
var sochib = 1050;

if(business > minister){
    if(business > sochib){
        console.log("Business is bigger");
    }
    else{
    console.log("sochib is bigger");
    }
}
else{
    if(minister > sochib){
    console.log("minister is bigger");
    }
    else{
    console.log("sochib is bigger");
    }
}
// max 

var business = 450;
var minister = 350;
var sochib = 1050;
var max = Math.max(business, minister,sochib);
console.log(max);

