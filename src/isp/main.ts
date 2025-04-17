import { Messaging } from "./classes/services/messaging";
import { Order } from "./classes/order";
import { Persistency } from "./classes/services/persistency";
import { Product } from "./classes/product";
import { ShoppingCart } from "./classes/shopping-cart";
import { FiftyPercentDiscount } from "./classes/discount";
import { IndividualCustomer } from "./classes/customer";

const fiftyPercentDiscount = new FiftyPercentDiscount();
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const individualCustomer = new IndividualCustomer('Pedro', 'ricardo', '000-000-000-00');
// const enterpriseCustomer = new EnterpriseCustomer('Pedro', '000-000-000-00');
const order = new Order(shoppingCart, messaging, persistency, individualCustomer);


shoppingCart.addItem(new Product('camiseta', 49.90));
shoppingCart.addItem(new Product('lapis', 5.90))

console.log(shoppingCart.items)
console.log(shoppingCart.totalWithDicount());
order.checkout()
console.log(order.orderStatus);
