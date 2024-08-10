import { useState } from "react"

interface AddTodoFormProps {
    onSubmit: (title: string) => void;
}

const AddTodoForm = ({ onSubmit }: AddTodoFormProps) => {

    const [input, setInput] = useState('');

    const hadleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        onSubmit(input);
        setInput("");
    }

    return (
        <form action="" className="flex" onSubmit={hadleSubmit}>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="What's need to be done ?"
                className="grow border border-gray-400 rounded-s-[5px] p-2 focus:outline-none"
            />

            <button type="submit" className="w-16 rounded-e-[5px] bg-slate-900 text-white cursor-pointer hover:bg-slate-800">
                Add
            </button>
        </form>
    )
}

export default AddTodoForm