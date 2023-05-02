var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen:25

}

// when you know the specific property name, use dot notation to get the property valu

var penCount = shoppingCart.pen;
console.log(penCount);

// alternative system: when you know the specific property name, use dot notation to get the property value
var penCount2 = shoppingCart['pen'];
console.log(penCount2);
// ///////////

var properties = Object.keys(shoppingCart);
console.log(properties);

// ////////
var propertyValues = Object.values(shoppingCart);
console.log(propertyValues);

// set property values
 shoppingCart.mouse = 15;
 console.log(shoppingCart);


//  2nd way to set property value
shoppingCart['mouse'] = 29;
console.log(shoppingCart);

// //
shoppingCart[propertyName] = 89;
console.log(shoppingCart);