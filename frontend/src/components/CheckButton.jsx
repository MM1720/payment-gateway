import React from "react";
import axios from "../services/api.js";

const CheckoutButton = ({ amount }) => {
  const handlePayment = async () => {
    try {
      const { data } = await axios.post("/api/create-order", { amount });
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: data.order.amount,
        currency: data.order.currency,
        order_id: data.order.id,
        name: "E-Commerce Store",
        description: "Test Transaction",
        handler: (response) => {
          axios
            .post("/api/verify-payment", {
              order_id: data.order.id,
              payment_id: response.razorpay_payment_id,
              signature: response.razorpay_signature,
            })
            .then(() => alert("Payment verified successfully!"))
            .catch(() => alert("Payment verification failed!"));
        },
        theme: { color: "#3399cc" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Error in payment:", error);
    }
  };

  return <button onClick={handlePayment}>Pay ₹{amount}</button>;
};

export default CheckoutButton;
