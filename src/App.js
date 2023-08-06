import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sablon from './sayfalar/Sablon'
import Anasayfa from './sayfalar/Anasayfa'
import Ekibimiz from './sayfalar/Ekibimiz'
import Hakkimizda from './sayfalar/Hakkimizda'
import Iletisim from './sayfalar/Iletisim'
import Bulunamadi from './sayfalar/Bulunamadi'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sablon />}>
            <Route index element={<Anasayfa />} />
            <Route path="hakkimizda" element={<Hakkimizda />} />
            <Route path="ekibimiz" element={<Ekibimiz />} />
            <Route path="iletisim" element={<Iletisim />} />
            <Route path="Bulunamadi" element={<Bulunamadi />} />
          </Route>
        </Routes>
      </BrowserRouter> 
  );
}

export default App;