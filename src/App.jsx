import Home from './components/pages/Header'
import Sobre from './components/pages/Sobre'
import Duvidas from './components/pages/Duvidas'
import Perfil from './components/pages/Perfil'
import Notificacoes from './components/pages/Notificacoes'
import Contato from './components/pages/Contato'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/perfil" element={<Perfil/>} />
    <Route path="/notificacoes" element={<Notificacoes/>} />
    <Route path="/duvidas" element={<Duvidas/>} /> 
    <Route path="/sobre" element={<Sobre/>} />
    <Route path="/contato" element={<Contato/>} />
   </Routes>
   </BrowserRouter>
  )
}
//Dimitri aula 20
export default App
