/*

Complete the rest of this code to create an online shopping cart.

The output of running your code should be:

    Your shopping cart has 3 items: Toilet Roll, Pasta, Eggs

    
*/

class ShoppingCart {
  // Add your code here
constructor() {
    this.items = [];
  }

  addItem(el) {
    this.items.push(el);
  }

  cartContains() {
    const shoppingBasket = this.items;
    console.log(`Your shopping cart has ${this.items.length} items: ${shoppingBasket}`)
    // Use console.log() to output everything contained in your cart
  }

}
  

let myCart = new ShoppingCart(); // Creates an empty shopping cart

myCart.addItem("Toilet Roll");
myCart.addItem("Pasta");
myCart.addItem("Eggs");

myCart.cartContains();
