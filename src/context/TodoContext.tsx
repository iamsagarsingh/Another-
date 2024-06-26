import { ReactNode, createContext, useContext } from "react";

const todoContext = createContext({})

interface todoChildren{
    children: ReactNode
}

export const TodoContextProvider = ({children}:todoChildren) => {
    return <todoContext.Provider value={{}}>
        {children}
    </todoContext.Provider>
}

export const useTodo = ()=>{
    return useContext(todoContext)
}