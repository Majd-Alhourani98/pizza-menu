import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

// -----------------------------
// 🍕 Pizza Data
// -----------------------------
// Static array containing the menu data. Each pizza object holds name, ingredients,
// price, image path, and soldOut status.
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

// -----------------------------
// 🌟 App Component
// -----------------------------
// The root component that renders the main structure of the app.
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// -----------------------------
// 🏷️ Header Component
// -----------------------------
// Displays the brand title.
function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

// -----------------------------
// 🍽️ Menu Component
// -----------------------------
// Renders the list of pizzas or a fallback message if none exist.
function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        // ✅ CHANGE: Added a descriptive paragraph introducing the menu
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          {/* ✅ Unchanged: Dynamically render Pizza components */}
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizza={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        // Fallback message if no pizzas exist
        <p>We're still working on our menu. Please come back later.</p>
      )}
    </main>
  );
}

// -----------------------------
// 🍕 Pizza Component
// -----------------------------
// Displays individual pizza details (name, ingredients, price/sold-out label)
function Pizza({ pizza }) {
  // Using template literal for conditional className
  return (
    <li className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        {/* ✅ Conditional rendering: show "SOLD OUT" instead of price */}
        <span>{pizza.soldOut ? "SOLD OUT" : pizza.price}</span>
      </div>
    </li>
  );
}

// -----------------------------
// 🕓 Footer Component
// -----------------------------
// Determines if the restaurant is open and displays the corresponding message.
function Footer() {
  const hour = new Date().getHours();
  const openHour = 16;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        // ✅ Show Order component if open
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        // Otherwise show closed message
        <p>
          We're closed now 😴 — come back between {openHour}:00 and {closeHour}
          :00.
        </p>
      )}
    </footer>
  );
}

// -----------------------------
// 🛒 Order Component
// -----------------------------
// Displays the order button and business hours when open.
function Order({ openHour, closeHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}.00 until {closeHour}.00
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// -----------------------------
// ⚙️ React DOM Rendering
// -----------------------------
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
