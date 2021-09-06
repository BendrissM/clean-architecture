import { Cart } from "../domain/cart";
import { createOrder } from "../domain/order";
import { User } from "../domain/user";
import { usePayment } from "../services/paymentAdapter";
import {
  CartStorageService,
  NotificationService,
  OrdersStorageService,
  PaymentService,
} from "./ports";

export const useOrderProducts = () => {
  const payment: PaymentService = usePayment();
  const notifier = useNotifier();
  const orderStorage = useOrderStorage();
  const cartStorage = useCartStorage();

  // Ideally, we would pass a command as an argument,
  // which would encapsulate all input data.
  const orderProducts = async (user: User, cart: Cart) => {
    // Here we can validate the data before creating the order.

    const order = createOrder(user, cart);

    // The use case function doesn't call third-party services directly,
    // instead, it relies on the interfaces we declared earlier.
    const paid = await payment.tryPay(order.total);
    if (!paid) return notifier.notify("the payment wasn't successful");

    // Save the result and clear the cart
    const { orders } = orderStorage;
    orderStorage.updateOrders([...orders, order]);
    cartStorage.emptyCart();
  };

  return { orderProducts };
};
