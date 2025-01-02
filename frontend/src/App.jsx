import React from "react";
import CheckoutButton from "./components/CheckButton.jsx";

const App = () => (
  <div>
    <h1>Welcome to E-Commerce Store</h1>
    <CheckoutButton amount={500} />
  </div>
);

export default App;
