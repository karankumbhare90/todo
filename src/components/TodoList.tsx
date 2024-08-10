import { Todo } from "../types/todo"
import TodoItem from "./TodoItem"

interface TodoListProps {
    todos: Todo[];
    onCompletedChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
}

const TodoList = ({ todos, onCompletedChange, onDelete }: TodoListProps) => {

    const todoSort = todos.sort((a, b) => {
        if (a.completed === b.completed) {
            return b.id - a.id;
        }

        return a.completed ? 1 : -1;
    })

    return (
        <>
            <div className="space-y-2">
                {todoSort?.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onCompletedChange={onCompletedChange}
                        onDelete={onDelete}
                    />
                ))}
            </div>

            {todos.length === 0 && (
                <p className="text-center text-sm text-gray-500 font-semibold">No Todo's yet. Add a new one above.</p>
            )}
        </>
    )
}

export default TodoList