import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sablon from "./sayfalar/Sablon"

import Anasayfa from "./sayfalar/Anasayfa"
import Toplama from "./sayfalar/Toplama"
import MaliyetHesapla from "./sayfalar/MaliyetHesapla"
import Nopage from "./sayfalar/Nopage"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sablon />}>
            <Route index element={<Anasayfa />} />
            <Route path="Toplama" element={<Toplama />} />
            <Route path="MaliyetHesapla" element={<MaliyetHesapla />} />
            <Route path="*" element={<Nopage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;