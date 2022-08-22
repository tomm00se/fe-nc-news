import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import ShowAllArticles from "./Components/ShowAllArticles";

function App() {
  return (
    <BrowserRouter>
      <div className="App"></div>
      <Header />
      <Routes>
        <Route path="/news" element={<ShowAllArticles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
