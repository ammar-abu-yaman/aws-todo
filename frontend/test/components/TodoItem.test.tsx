import React from "react";
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import { TodoItem } from "@/components/todo/Todo";

const todo = {
    id: 0, 
    message: "hello world",
    isDone: true,
}

describe("TodoItem component", () => {
    it('Should render todo properly', () => {
        render(<TodoItem todo={todo} modifyTodo={() => {}} removeTodo={() => {}}/>)
        
        const todoMessage = screen.getByRole('textbox')
        const todoDone = screen.getByRole('checkbox')
        const deleteBtn = screen.getByRole('button')
        
        expect(todoMessage).toHaveValue(todo.message)  
        expect(todoDone).toBeChecked()
        expect(deleteBtn).toHaveTextContent('Delete')   
    })
})

