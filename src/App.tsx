import { AddTodo } from "./components/AddTodo"
import { ShowTodo } from "./components/ShowTodo"
import { useTodo } from "./context/TodoContext"
import "./App.css"

function App() {
  const {state} = useTodo()
  return (
    <div className="md:w-1/2 mx-auto">
      <AddTodo />
      <div>
          {
            state.todos.map(todo=>{
              return <ShowTodo key={todo.id} {...todo}/>
            })
          }
      </div>
    </div>
  )
}

export default App
