import { Messaging } from "./classes/services/messaging";
import { Order } from "./classes/order";
import { Persistency } from "./classes/services/persistency";
import { Product } from "./classes/product";
import { ShoppingCart } from "./classes/shopping-cart";
import { FiftyPercentDiscount } from "./classes/discount";

const fiftyPercentDiscount = new FiftyPercentDiscount();
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency()
const order = new Order(shoppingCart, messaging, persistency);


shoppingCart.addItem(new Product('camiseta', 49.90));
shoppingCart.addItem(new Product('lapis', 5.90))

console.log(shoppingCart.items)
console.log(shoppingCart.totalWithDicount());
order.checkout()
console.log(order.orderStatus);
