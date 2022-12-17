import { GlobalStyle } from "./Assets/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Ranking from "./Pages/Ranking/Ranking";
import SingIn from "./Pages/Sing_in/Sing_in";

function App() {
  return (
    <>
      <BrowserRouter>

        <GlobalStyle />

        <Header/>
        <Routes>
          <Route path='/' element={<Ranking/>} />
          <Route path="/sing_in" element={<SingIn/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
