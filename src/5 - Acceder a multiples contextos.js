import { createContext, Component} from 'react'

const Contexto1 = createContext('1er Contexto')
const Contexto2 = createContext('2do Contexto')

const Provider = ({children}) => {    
    return (
        <>
            <Contexto1.Provider value="v@lor 1" >          
                <Contexto2.Provider value="v@lor 2" >          
                    {children}      
                </Contexto2.Provider>
            </Contexto1.Provider>
        </>
    )
}

class Componente extends Component {
    render(){
        return(
            <Contexto1.Consumer>
                {
                    valor1 => 
                    <Contexto2.Consumer>
                        {valor2 => <div>{`${valor1} - ${valor2}`}</div>}
                    </Contexto2.Consumer>
                }
            </Contexto1.Consumer>
        )
    }
}




const App = () => {
    return(
        <>  
            <Provider>
                <Componente/>                
            </Provider>                     
        </>
    )
}

export default App