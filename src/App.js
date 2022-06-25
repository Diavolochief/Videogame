import './App.js';
import { Routes, Route } from 'react-router';

//rutas
import Login from './Views/login';
import ListaVideoGames from './components/listaVideoGames'
import Edit from './Views/edit'
import Save from './Views/save'

function App() {
  return (
    <div>
      <Routes>

        <Route
          path='/'
          element={<Login />}
        />

        <Route
          path='/Lista'  element={<ListaVideoGames/>}
        />

        <Route
          path='/guardar'
          element={<Save />}
        />

        <Route
          path='/editar/:id'
          element={<Edit />}
        />

      </Routes>
    </div>
  );
}

export default App;
