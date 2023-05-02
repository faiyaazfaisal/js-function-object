function add(number1, number2){
    console.log(number1, number2);
    var sum = number1 + number2;
    return sum;
}

// add(80,20)
 var total = add(80,20);
 console.log('total', total);


//  more example
function bringSingara(money){
    var singaraPrice =10;
    var quantity = money / singaraPrice;
    return quantity;
}

var myTaka = 200;
var singaras = bringSingara(myTaka);
console.log('eating singaras:',singaras);