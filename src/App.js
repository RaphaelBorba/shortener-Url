import { GlobalStyle } from "./Assets/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Ranking from "./Pages/Ranking/Ranking";

function App() {
  return (
    <>
      <BrowserRouter>

        <GlobalStyle />

        <Header/>
        <Routes>
          <Route path='/' element={<Ranking/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
