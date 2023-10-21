import { Todo } from "./todo.types";

export interface TodoItemProps {
    todo: Todo
}

export function TodoItem({todo: {isDone, message}}: TodoItemProps) {
    return (<div>
        <input type="text" value={message}/>
        <input type="checkbox" checked={isDone}/>
    </div>)
}