import { useState } from "react";

export function AddTodo() {
    const [todo,SetTodo] = useState<string>('');
    const [color,setColor] = useState<string>('');

    const handleColorChange = (color:string) => {
            setColor(color)
    }

  return (
    <div className="p-2 bg-slate-200 m-1 rounded-lg">
      <form className="flex flex-col gap-2">
        <label className="text-md text-gray-600">What's in your mind:</label>
        <textarea
          className="opacity-50 bg-slate-50 h-20 resize-none focus:outline-none p-2"
          placeholder="Todo here..."
        />
        <p className="text-sm text-gray-400">Select colors</p>
        <div className="flex flex-row gap-2">
          <button className="w-6 h-6 bg-red-500 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" type="button" onClick={()=>handleColorChange('red')}></button>
          <button className="w-6 h-6 bg-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" type="button" onClick={()=>handleColorChange('blue')}></button>
          <button className="w-6 h-6 bg-orange-500 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500" type="button" onClick={()=>handleColorChange('orange')}></button>
          <button className="w-6 h-6 bg-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" type="button" onClick={()=>handleColorChange('gray')}></button>
        </div>
        <button className="bg-slate-300 rounded w-32 p-1 hover:bg-slate-400" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
