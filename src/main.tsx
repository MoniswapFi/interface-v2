import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/index.css";
import App from "./App.tsx";
import Header from "./components/header.tsx";
import Footer from "./components/footer.tsx";
import Trade from "./Trade.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow overflow-auto">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/trade" element={<Trade />} />
            <Route path="/dashboard" element={<App />} />
            <Route path="/liquidity" element={<App />} />
            <Route path="/more" element={<App />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  </StrictMode>,
);
