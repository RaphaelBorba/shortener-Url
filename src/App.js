import { GlobalStyle } from "./Assets/GlobalStyle";
import { BrowserRouter, Routes, Router } from "react-router-dom";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <BrowserRouter>

        <GlobalStyle />

        <Header/>
        <Routes>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
