import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./pages/home/home";
import Openings from "./pages/openings/openings";
import OpeningsProducts from "./pages/openings/openingsProducts";
import Equipment from "./pages/equipment/equipment";
import EquipmentProducts from "./pages/equipment/equipmentProducts";
import Endings from "./pages/endings/endings";
import EndingsProducts from "./pages/endings/endingsProducts";

const queryClient = new QueryClient()

function App() {

  return <QueryClientProvider client={queryClient}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aberturas" element={<Openings />} />
        <Route path="/aberturas/:name/productos" element={<OpeningsProducts />} />
        <Route path="equipamiento" element={<Equipment />} />
        <Route path="/equipamiento/:name/productos" element={<EquipmentProducts />} />
        <Route path="terminaciones" element={<Endings />} />
        <Route path="/terminaciones/:name/productos" element={<EndingsProducts />} />
      </Routes>
    </Router>
  </QueryClientProvider>
}

export default App
