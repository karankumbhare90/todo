import { useEffect, useState } from "react";
import { Todo } from "../types/todo";
// import { dummyData } from "../data/todos";

const useTodos = () => {
    const [todos, setTodos] = useState(() => {
        const savedTodos: Todo[] = JSON.parse(localStorage.getItem('todos') || "[]");
        return savedTodos.length > 0 ? savedTodos : [];
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])


    const setTodoCompleted = (id: number, completed: boolean) => {
        setTodos((preTodos) =>
            preTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
        );
    }

    const addTodo = (title: string) => {
        setTodos(prevTodo => [
            {
                id: Date.now(),
                title,
                completed: false
            },
            ...prevTodo
        ])

    }

    const deleteTodo = (id: number) => {
        setTodos(prevTodo => prevTodo.filter(todo => todo.id !== id));
    }

    const deleteAllComplete = () => {
        setTodos(prevTodo => prevTodo.filter(todo => !todo.completed))
    }

    return {
        todos,
        setTodoCompleted,
        addTodo,
        deleteTodo,
        deleteAllComplete
    }
}

export default useTodos