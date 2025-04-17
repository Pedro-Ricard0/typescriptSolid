import { Discount } from "./discount";
import { CartItem } from "./interfaces/cart-item";
import { ShoppingCartProtocol } from "./interfaces/shopping-cart-protocol";

export class ShoppingCart implements ShoppingCartProtocol{

  private readonly _items: CartItem[] = [];

  constructor(private readonly discount: Discount){}

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

  isEmpty(): boolean{
    return this._items.length === 0;
  }

  totalWithDicount( ): number{
    return this.discount.calculate(this.total())
  }

  clear(): void{
    console.log('CARRINHO DE COMPRAS FOI LIMPO.')
    this._items.length = 0;
  }
}

