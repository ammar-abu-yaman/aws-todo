import { Todo } from "./todo.types";

export interface TodoItemProps {
    todo: Todo;
    modifyTodo: (todo: Todo) => void;
    removeTodo: (id: number) => void;
}

export function TodoItem({todo, modifyTodo, removeTodo}: TodoItemProps) {
    return (<div>
        <input type="text" value={todo.message} onChange={(evt) => modifyTodo({...todo, message: evt.target.value})}/>
        <input type="checkbox" defaultChecked={todo.isDone} onChange={evt => modifyTodo({...todo, isDone: evt.target.checked})}/>
        <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </div>)
}