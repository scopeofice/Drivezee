import React, { useState } from "react";

const PaymentComponent = () => {
  const [orderId, setOrderId] = useState("");
  const [amount, setAmount] = useState("");
  const [customerId, setCustomerId] = useState("");

 const initiatePayment = async () => {
   // Perform validation checks here

   // Construct the payment gateway URL
   const paymentGatewayUrl = `http://localhost/PaytmKit/?amt=${amount}&cid=${customerId}`;

   // Redirect to the payment gateway URL
   window.location.href = paymentGatewayUrl;
 };


  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Pay with Paytm</h1>
      <input
        type="text"
        placeholder="Order ID"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 mb-2"
      />
      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 mb-2"
      />
      <input
        type="text"
        placeholder="Customer ID"
        value={customerId}
        onChange={(e) => setCustomerId(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 mb-2"
      />
      <button
        onClick={initiatePayment}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Pay Now
      </button>
    </div>
  );
};

export default PaymentComponent;
