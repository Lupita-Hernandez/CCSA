import './App.css'
import { PrimeReactProvider } from "primereact/api"
import ListaArticulo from "./Components/ListaArticulo.tsx"
import CRUDArticulo from './Components/CRUDArticulo.tsx'
import { BrowserRouter, Route,Routes } from 'react-router-dom'


function App() {
  
  return (
    <PrimeReactProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/"element={<ListaArticulo/>}></Route>
            <Route path="/articulos"element={<CRUDArticulo/>}></Route>
          </Routes>
      </BrowserRouter>
    </PrimeReactProvider>  
  )
}

export default App
