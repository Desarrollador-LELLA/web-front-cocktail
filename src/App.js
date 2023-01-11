import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/pages/layout/Layout';
import Home from './components/pages/home/Home';

function App() {
  return (
    <Routes>
      {/* LANDING DESPUES DE ESTE COMENTARIO */}

      {/* RUTAS ANIDADAS DENTRO DE RUTA ---> '/productos' */}
      <Route path='/productos' element={<Layout />} >
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
