type CartItem = {
  name:string;
  price:number;
}
type OrderStatus = 'open' | 'closed';

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus:  OrderStatus = 'open';

  addItem(item: CartItem): void{
    this._items.push(item);
  }

  removeItem(index: number): void{
    this._items.splice(index, 1);
  }

  total(): number{
    return +this._items
    .reduce((total, next) =>  total + next.price,0)
    .toFixed(2);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus{
    return this._orderStatus;
  }

  checkOut(): void {
    if(this.isEmpty()){
      console.log('Seu carrinho esta vazio');
      return;
    }
    this._orderStatus = 'closed';
    this.sendMessage(`Seu pedido com total de ${this.total()} está foi recebido.`);
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean{
    return this._items.length === 0;
  }

  sendMessage(message:string): void {
    console.log('Mensagem envaida: ', message);
  }

  saveOrder(): void{
    console.log('Pedido salvo com sucesso');
  }

  clear(): void{
    console.log('CARRINHO DE COMPRAS FOI LIMPO.')
    this._items.length = 0;
  }
}

const shoppingCart = new ShoppingCartLegacy()
shoppingCart.addItem({name:'camiseta', price: 49.90});
shoppingCart.addItem({name:'lapis', price: 9.90})

console.log(shoppingCart.items)
console.log(shoppingCart.total());
shoppingCart.checkOut()
console.log(shoppingCart.orderStatus);
