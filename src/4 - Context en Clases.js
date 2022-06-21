import { Component, createContext} from 'react'

const Context = createContext('miValor')

const Provider = ({ children }) => {
    return(
        <Context.Provider value={'otro valor'}>
            { children }
        </Context.Provider>
    )


}


class Componente extends Component{
/*
    Existen dos maneras de declarar el contexto en una funcion
    1 - Declarando una propiedad static dentro de la clase
    2 - Declarando por fuera
*/
    //1 - 
    //static contextType = Context

    render(){
        console.log(this.context);
        return(
            <div>Hola mundo</div>
        )
    }
}
//2 - 
Componente.contextType = Context

const App = () => {
    return(
        <>
            <Provider>
                <Componente/>
                {/* 3ra forma de llamarlo*/}
                <Context.Consumer>
                    { valor => <div>{valor}</div>}
                </Context.Consumer>


            </Provider>  
        </>
    )
}

export default App