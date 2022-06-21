import { createContext, Component, useState} from 'react'

/*
    Al utilizar Incrementar y Decrementar, el contexto se actualiza y reenderiza todo nuevamente
    Y no hay forma de optimizar esto 🙁
    Por lo tanto es recomendado para variables que no se estaran renderizando continuamente como:
     - idioma, constantes de idioma
     - usuario
*/

const Context = createContext()

const ContadorProvider = ({ children }) => {
    const [ contador, setContador ] = useState(0)

    const incrementar = () => setContador( contador + 1)
    const decrementar = () => setContador( contador - 1)

    return(
        <Context.Provider value={{contador, incrementar, decrementar}}>
            { children }
        </Context.Provider>
    )


}

const Incrementar = memo(() => {
    console.log('incrementar')
    const { incrementar } = useContext(Context)
    return(
        <button onClick={incrementar}> Incrementar </button>
    )
})

const Decrementar = meno(() => {
    console.log('incrementar')
    const { decrementar } = useContext(Context)
    return(
        <button onClick={decrementar}> Decrementar </button>
    )
})

const Label = () => {
    console.log('label')
    const { contador } = useContext(Context)
    return(
        <h1>{contador}</h1>
    )

}

const App = () => {
    return(
        <>
            <ContadorProvider>
                <Label></Label>
                <Incrementar></Incrementar>
                <Decrementar></Decrementar>            
            </ContadorProvider>  
        </>
    )
}

export default App