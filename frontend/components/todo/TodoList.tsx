import React, { useState } from "react";
import { Todo } from "./todo.types";
import { TodoItem } from "./Todo";

const initialTodos: Todo[] = [
    {id: 0, isDone: true, message: "Create todo app"},
    {id: 1, isDone: false, message: "Upload it to AWS"},
    {id: 2, isDone: false, message: "Create Backend and connect it to frontend"}
]

export function TodoList() {
    let [todos, setTodos] = useState<Todo[]>(initialTodos)

    return (<div className='todo-container'>
        {todos.toSorted((a, b) => a.id - b.id).map(todo => <TodoItem todo={todo}/>)}
    </div>)
}