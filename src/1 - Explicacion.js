import { createContext, useContext } from 'react'


const ContextDefault = createContext('valor por defecto')
const Context2 = createContext('valor por defecto 2')

/*Provider: encargado de pasar el contexto */
const DefaultProvider = ({ children }) => {
  return(
    <ContextDefault.Provider value={'mi valor'} >
      { children }
    </ContextDefault.Provider>
  )
}

/*Componente que utiliza el contexto*/
const Contenido = () => {
  const ctx = useContext(ContextDefault)
  return (
    <div>Contenido1 - ctx: {ctx}</div>
  )
}

const Contenido2 = () => {
  const ctx = useContext(Context2)
  return (
    <div>Contenido2 - ctx: {ctx}</div>
  )
}

function App() {
  return (
    <div className="App">
      {/* Utiliza el provider para asignarle el valor */}
      <DefaultProvider>
        <Contenido/>
      </DefaultProvider>
      {/* Toma el valor del por defecto en la delaracion del mismo cuando no tienen un provider */}
      <Contenido/>
      <Contenido2/>
    </div>
  );
}

export default App;
