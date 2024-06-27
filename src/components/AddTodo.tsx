import { useState } from "react";
import { useTodo } from "../context/TodoContext";

export function AddTodo() {
  const [todo, SetTodo] = useState<string>("");
  const [color, setColor] = useState<string>("#FFF5E1");

  const { dispatch } = useTodo();

  const handleColorChange = (newColor: string) => {
    if (newColor === color) {
      setColor("#FFF5E1");
    } else {
      setColor(newColor);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      id: Date.now(),
      todoDesc: todo,
      todoColor: color,
    };
    dispatch({ type: "addTodos", payload: data });
    setColor("#FFF5E1");
    SetTodo("");
  };
  return (
    <div className="p-2 bg-slate-200 m-1 rounded-lg">
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <label className="text-md text-gray-600">What's in your mind:</label>
        <textarea
          className="opacity-50 bg-slate-50 h-20 resize-none focus:outline-none p-2"
          placeholder="Todo here..."
          value={todo}
          onChange={(e) => SetTodo(e.target.value)}
        />
        <p className="text-sm text-gray-400">Select colors</p>
        <div className="flex flex-row gap-2">
          <button
            style={{
              opacity: color === "#E78895" ? ".4" : "",
              border: color === "#E78895" ? "2px solid black" : "",
            }}
            className="w-6 h-6 bg-red-500 rounded"
            type="button"
            onClick={() => handleColorChange("#E78895")}
          ></button>
          <button
            style={{
              opacity: color === "#BBE9FF" ? ".4" : "",
              border: color === "#BBE9FF" ? "2px solid black" : "",
            }}
            className="w-6 h-6 bg-blue-500 rounded focus:outline-none"
            type="button"
            onClick={() => handleColorChange("#BBE9FF")}
          ></button>
          <button
            style={{
              opacity: color === "#FFA27F" ? ".4" : "",
              border: color === "#FFA27F" ? "2px solid black" : "",
            }}
            className="w-6 h-6 bg-orange-500 rounded"
            type="button"
            onClick={() => handleColorChange("#FFA27F")}
          ></button>
          <button
            style={{
              opacity: color === "gray" ? ".4" : "",
              border: color === "gray" ? "2px solid black" : "",
            }}
            className="w-6 h-6 bg-gray-500 rounded"
            type="button"
            onClick={() => handleColorChange("gray")}
          ></button>
        </div>
        <button
          className="bg-slate-300 rounded w-32 p-1 hover:bg-slate-400"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
