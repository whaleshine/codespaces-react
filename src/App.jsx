<<<<<<< HEAD
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
=======
import React, { useReducer, useState } from "react";
import { data } from "./data";

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH":
      return { ...state, search: action.payload };
    case "SORT":
      return { ...state, sortBy: action.payload };
    case "FILTER_STOCK":
      return { ...state, showInStockOnly: !state.showInStockOnly };
    case "FILTER_FAST":
      return { ...state, fastDeliveryOnly: !state.fastDeliveryOnly };
    case "CLEAR":
      return initialState;
    default:
      return state;
  }
};

const initialState = {
  search: "",
  sortBy: null,
  showInStockOnly: false,
  fastDeliveryOnly: false,
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [searchInput, setSearchInput] = useState("");

  const filteredData = () => {
    let filtered = [...data];

    // Search
    if (state.search.trim()) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(state.search.toLowerCase())
      );
    }

    // In-stock filter
    if (state.showInStockOnly) {
      filtered = filtered.filter((item) => item.inStock);
    }

    // Fast delivery filter
    if (state.fastDeliveryOnly) {
      filtered = filtered.filter((item) => item.fastDelivery);
    }

    // Sorting
    if (state.sortBy === "LOW_TO_HIGH") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (state.sortBy === "HIGH_TO_LOW") {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  };

  const finalData = filteredData();

  return (
    <div className="p-6 font-sans">
      <h1 className="text-2xl font-bold text-center mb-4">
        🛍️ Product Listing Page
      </h1>

      {/* Search Input */}
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="border border-gray-400 rounded-md p-2 w-64"
        />
        <button
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={() => dispatch({ type: "SEARCH", payload: searchInput })}
        >
          Search
        </button>
      </div>

      {/* Filters */}
      <fieldset className="border border-gray-400 p-4 rounded-md mb-6 max-w-3xl mx-auto">
        <legend className="font-semibold">Sort & Filter</legend>

        <div className="flex flex-wrap gap-6 mt-2 justify-center">
          {/* Sorting */}
          <div>
            <p className="font-medium mb-1">Sort by Price:</p>
            <label className="block">
              <input
                type="radio"
                name="sort"
                checked={state.sortBy === "LOW_TO_HIGH"}
                onChange={() =>
                  dispatch({ type: "SORT", payload: "LOW_TO_HIGH" })
                }
              />{" "}
              Low to High
            </label>
            <label className="block">
              <input
                type="radio"
                name="sort"
                checked={state.sortBy === "HIGH_TO_LOW"}
                onChange={() =>
                  dispatch({ type: "SORT", payload: "HIGH_TO_LOW" })
                }
              />{" "}
              High to Low
            </label>
            <label style={{ cursor: "pointer" }}>
              <input
                type="radio"
                name="sort"
                checked={state.sortBy === ""}
                onChange={() => dispatch({ type: "SORT", payload: "" })}
                style={{ marginRight: "0.5rem" }}
              />
              None
            </label>
          </div>

          {/* Filters */}
          <div>
            <p className="font-medium mb-1">Filters:</p>
            <label className="block">
              <input
                type="checkbox"
                checked={state.showInStockOnly}
                onChange={() => dispatch({ type: "FILTER_STOCK" })}
              />{" "}
              In Stock Only
            </label>
            <label className="block">
              <input
                type="checkbox"
                checked={state.fastDeliveryOnly}
                onChange={() => dispatch({ type: "FILTER_FAST" })}
              />{" "}
              Fast Delivery Only
            </label>
          </div>
        </div>
        <div>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-md mt-4 flex mx-auto"
            onClick={() => dispatch({ type: "CLEAR" })}
          >
            Clear Filters
          </button>
        </div>
      </fieldset>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {finalData.map(({ id, name, image, price, inStock, fastDelivery }) => (
          <div
            key={id}
            className="border border-gray-300 rounded-md p-3 text-center"
          >
            <img
              src={image}
              alt={name}
              className="w-full h-40 object-cover rounded-md mb-2"
            />
            <h3 className="font-semibold text-lg">{name}</h3>
            <p>💰 Rs. {price}</p>
            <p className="text-sm">
              {inStock ? "✅ In Stock" : "❌ Out of Stock"}
            </p>
            <p className="text-sm">
              {fastDelivery ? "⚡ Fast Delivery" : "⏳ 3 Days Minimum"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
>>>>>>> 414979d (feat: initialize React project with Vite and Tailwind CSS)
