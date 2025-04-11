import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";

const root = document.querySelector("#root") as Element;
if (!root.innerHTML) ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<h1>About</h1>} />
      <Route path="/shop" element={<h1>Shop</h1>} />
    </Routes>
  </BrowserRouter>
)
