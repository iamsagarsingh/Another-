import { useEffect, useReducer } from "react";
import { ActionType, DefaultTypes } from "../context/TodoContext";

export function useLocalStorage(key:string,reducer:React.Reducer<DefaultTypes,ActionType>,initialState:DefaultTypes){
    const [state,dispatch] = useReducer(reducer,initialState,(initial)=>{
        const jsonData = localStorage.getItem(key)
        if(jsonData !== null) return JSON.parse(jsonData)
        else return initial
    })

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(state))
    },[state])

    return [state,dispatch] as const

}