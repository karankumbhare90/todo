import { Todo } from "../types/todo"

interface TodoSummaryProps {
    todos: Todo[];
    deleteAllComplete: () => void;
}

const TodoSummary = ({ todos, deleteAllComplete }: TodoSummaryProps) => {
    const completedTodos = todos.filter(todo => todo.completed);

    return (
        <div className="text-center space-y-2">
            <p className="text-sm font-semibold">
                {completedTodos.length}/{todos.length} todo completed.
            </p>

            {completedTodos.length > 0 && (
                <button
                    onClick={deleteAllComplete}
                    className="text-red-500 hover:underline text-sm font-medium"
                >
                    Delete all completed
                </button>
            )}
        </div>
    )
}

export default TodoSummary