import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Cook from "./pages/cook/Cook";

import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="background">
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cook" element={<Cook />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
