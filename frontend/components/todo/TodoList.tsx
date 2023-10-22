import React from "react";
import { Todo } from "./todo.types";
import { TodoItem } from "./Todo";

const initialTodos: Todo[] = [
    { id: 0, isDone: true, message: "Create todo app" },
    { id: 1, isDone: false, message: "Upload it to AWS" },
    { id: 2, isDone: false, message: "Create Backend and connect it to frontend" }
]

type SetTodos = React.Dispatch<React.SetStateAction<Todo[]>>;

export function TodoList() {
    const [todos, setTodos] = React.useState<Todo[]>(initialTodos)
    return (<div className='todo-container'>
        <button data-testid='add-todo-btn' onClick={() => AddTodo(todos, setTodos)}>Add Todo</button>
        {todos.toSorted((a, b) => a.id - b.id).map(todo => <TodoItem 
            modifyTodo={newTodo => modifyTodo(newTodo, todos, setTodos)} 
            removeTodo={id => removeTodo(id, todos, setTodos)}
            key={todo.id} 
            todo={todo} />)
        }
    </div>)
}

function AddTodo(todos: Todo[], setTodos: SetTodos) {
    const newTodo = {
        id: (todos.map(todo => todo.id).toSorted().pop() ?? -1) + 1,
        message: "",
        isDone: false,
    }
    setTodos([...todos, newTodo])
}

function modifyTodo(newTodo: Todo, todos: Todo[], setTodos: SetTodos) {
    const newTodos = [...todos]
    const todoIndex = todos.findIndex(todo => todo.id === newTodo.id)
    newTodos[todoIndex] = newTodo
    setTodos(newTodos)
}

function removeTodo(id: number, todos: Todo[], setTodos: SetTodos) {
    setTodos(todos.filter(todo => todo.id !== id))
}