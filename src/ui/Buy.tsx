import React, { useState, FormEvent } from "react";
import { useOrderProducts } from "../application/orderProducts";

const Buy = () => {
  const { orderProducts } = useOrderProducts();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    setLoading(true);
    e.preventDefault();

    // call use case function
    await orderProducts(user, cart);
    setLoading(false);
  };
  return (
    <section>
      <h2>checkout</h2>
      <form onSubmit={handleSubmit}>{/* ... */}</form>
    </section>
  );
};

export default Buy;
