import React from 'react';
import RegisterLayout from "./interfaces/Layout/RegisterLayout";
import LoginLayout from "./interfaces/Layout/LoginLayout";
import NavBar from "./components/Navigation/NavBar";
import ServicesInterface from "./interfaces/Core/Users/ServicesInterface";
import CategoriesInterface from "./interfaces/Core/Users/CategoriesInterface";
import TransactionLayout from "./interfaces/Layout/TransactionLayout";

function App() {
  return (
    <div>
      <NavBar/>
      <TransactionLayout/>
    </div>
  );
}

export default App;
