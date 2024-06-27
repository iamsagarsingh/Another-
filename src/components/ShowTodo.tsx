import { useState } from "react";
import { TodoType, useTodo } from "../context/TodoContext"
import { RxPencil2,RxTrash } from "react-icons/rx";
import { MdDone } from "react-icons/md";

export function ShowTodo({id,todoDesc,todoColor}:TodoType){    
    const {dispatch} = useTodo()
    const [edit,setEdit] = useState<boolean>(false)
    const [newTodo,setNewTodo] = useState<string>(todoDesc)

    const handleUpdate = (id:number) => {
        setEdit(false)
        dispatch({type:"updateTodo",payload:{id,todoDesc:newTodo,todoColor}})
    }

    return <div className='p-2 mx-1 my-2 rounded-md flex flex-row justify-between items-center' style={{backgroundColor:todoColor,color:(todoColor==='#FFF5E1' || todoColor === '#BBE9FF')?'black':'white'}}>
        <p className="w-full mr-2">{edit? <input type="text" className="text-black font-bold p-1 rounded w-full bg-slate-100 hover:outline-none outline-none opacity-50" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}/>:todoDesc}</p>
        <div className="flex flex-row gap-2">
            {
                edit ? <MdDone className="hover:cursor-pointer hover:text-slate-700" onClick={()=>handleUpdate(id)}  /> :<RxPencil2 className="hover:cursor-pointer hover:text-slate-700" onClick={()=>setEdit(true)}/>
            }
            <RxTrash className="hover:cursor-pointer hover:text-slate-700" onClick={()=>{dispatch({type:"removeTodo",payload:id})}}/>
        </div>
    </div>
}