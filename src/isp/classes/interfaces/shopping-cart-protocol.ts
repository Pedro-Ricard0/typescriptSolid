import { CartItem } from "./cart-item"

export interface ShoppingCartProtocol {
  addItem(item: CartItem): void;
  removeItem(index: number): void;
  total(): number;
  isEmpty(): boolean;
  totalWithDicount( ): number;
  clear(): void;
}

