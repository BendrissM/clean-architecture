import { Cart } from "../domain/cart";
import { Order } from "../domain/order";
import { User } from "../domain/user";

export interface PaymentService {
  tryPay(amount: PriceCents): Promise<boolean>;
}

export interface NotificationService {
  notify(message: string): void;
}

export interface OrdersStorageService {
  orders: Order[];
  updateOrders(orders: Order[]): void;
}

export interface UserStorageService {
  user?: User;
  updateUser(user: User): void;
}

export interface CartStorageService {
  cart: Cart;
  updateCart(cart: Cart): void;
  emptyCart(): void;
}
