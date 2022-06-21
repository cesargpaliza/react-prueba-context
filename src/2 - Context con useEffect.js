import { createContext, useContext, useState} from 'react'

const Contexto = createContext({ 
    valor: false,
    toggle: () => console.log('toggle default')
})

const ProviderT = ({children}) => {
    const [ valor, setValor] = useState(false)    
    const value = {
        valor,
        toogle: () => {setValor(!valor)}
    }

    return (
        <>
            <Contexto.Provider value={value} >          
                {children}      
            </Contexto.Provider>
        </>
    )
}

const Componente = () => {
    const { valor, toogle } = useContext(Contexto)

    console.log('valor',valor)
    return (
        <>
            <label>Valor: {valor.toString()}</label><br/><br/>
            <button onClick={toogle}> Change State </button>           
        </>
    )
}

const App = () => {
    return(
        <>  
            <ProviderT>
                <Componente/>                
            </ProviderT>                     
        </>
    )
}

export default App