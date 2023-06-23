import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import Registro from './components/pages/Registo';
import Inicio from './components/pages/Inicio';
import Detalle from './components/pages/Detalle';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Footer from './components/common/Footer'
import Menu from './components/common/Menu'
import Login from './components/pages/Login'
import { useState } from 'react';
import RutasProtegidas from './components/routes/RutasProtegidas';
import RutasAdministrador from './components/routes/RutasAdministrador';
import Error404 from './components/pages/Error404'

function App() {
  const usuario = JSON.parse(sessionStorage.getItem("usuario")) || {}
  const [usuarioLogueado,setUsuarioLogueado] = useState(usuario)

  return (
    <>
    <BrowserRouter>
    <Menu usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></Menu>
      <Routes>
      <Route exact path='/' element={<Inicio></Inicio>}></Route>
      <Route exact path='/login' element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}></Route>
      <Route exact path='/registro' element={<Registro></Registro>}></Route>
      <Route exact path='/detalle/:id' element={<Detalle></Detalle>}></Route>
      <Route path='/administrador/*' element={<RutasProtegidas>
        <RutasAdministrador></RutasAdministrador>
      </RutasProtegidas>}></Route>
      <Route path='*' element={<Error404></Error404>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}
export default App
