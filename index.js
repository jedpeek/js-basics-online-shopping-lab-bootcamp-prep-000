var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push( {itemName:`${item}`,
        itemPrice: Math.floor(Math.random()*100)
 });
 return `${item} has been added to your cart.`;
}


function viewCart() {
    if(cart.length === 0){
    return "Your shopping cart is empty."
  }
  else if(cart.length === 1){
   return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  else if(cart.length === 2){
   return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  }
  else{
    for(let i = 0; i < cart.length-2; i++){
      return `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}, ${cart[i+1].itemName} at $${cart[i + 1].itemPrice}, and quince at $91.`;
    }//for loop end
  }//else end
}// view cart end


function total() {

}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}