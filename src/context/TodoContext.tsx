import { Dispatch, ReactNode, createContext, useContext, useReducer } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface TodoContextProps{
    state:DefaultTypes,
    dispatch: Dispatch<ActionType>
}

const todoContext = createContext({} as TodoContextProps)

export interface TodoType {
    id:number;
    todoDesc:string;
    todoColor:string
}

export interface DefaultTypes{
    todos: TodoType[]
}

export interface ActionType{
    type:string,
    payload:TodoType | string | number
}

interface TodoChildren{
    children: ReactNode
}

const reducer = (state:DefaultTypes,action:ActionType) : DefaultTypes => {
    if(action.type === 'addTodos'){
        if(typeof action.payload === 'object') return {...state,todos:[...state.todos,action.payload]}
    }
    else if(action.type === 'removeTodo'){
        if(typeof action.payload === 'number'){
        const newList:TodoType[] = state.todos.filter(todo=>{
            return todo.id!== action.payload
        })
        return {...state,todos:newList}
    }
    }
    else if(action.type === 'updateTodo'){
        if(typeof action.payload === 'object' && 'id' in action.payload && 'todoDesc' in action.payload && 'todoColor' in action.payload){
            const updatedTodo = action.payload
            const newList:TodoType[] = state.todos.map(todo => {        
                if(todo.id === updatedTodo.id){
                    return {...todo,...updatedTodo}
                }
                else{
                    return todo
                }
            })
            return {...state,todos:newList}
        }
        return {...state}
        
    }
    return {...state}
}

const defaultValue : DefaultTypes = {
    todos: []
}

export const TodoContextProvider = ({children}:TodoChildren) => {
    const [state,dispatch] = useLocalStorage('todo',reducer,defaultValue)
    return <todoContext.Provider value={{state,dispatch}}>
        {children}
    </todoContext.Provider>
}



export function useTodo(){
    const context =  useContext(todoContext)
    return context
}