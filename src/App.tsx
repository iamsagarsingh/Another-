import { AddTodo } from "./components/AddTodo"
import { ShowTodo } from "./components/ShowTodo"
import { useTodo } from "./context/TodoContext"

function App() {
  const {state} = useTodo()
  return (
    <div className="">
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
