import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import useTodos from "./hooks/useTodos";
import './App.css'

function App() {

  const { todos, addTodo, setTodoCompleted, deleteTodo, deleteAllComplete } = useTodos();

  return (
    <main className="py-10 h-screen space-y-5 overflow-y-auto">
      <h1 className="font-bold text-center text-3xl">Your ToDo's</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded p-5 space-y-6 max-h-[500px] overflow-scroll">
        <AddTodoForm
          onSubmit={addTodo}
        />
        <TodoList
          todos={todos}
          onCompletedChange={setTodoCompleted}
          onDelete={deleteTodo}
        />
      </div>
      <TodoSummary
        todos={todos}
        deleteAllComplete={deleteAllComplete}
      />
    </main>
  )
}

export default App
