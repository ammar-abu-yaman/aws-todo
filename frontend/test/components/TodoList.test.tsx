import React from "react";
import {fireEvent, render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import { TodoList } from "@/components/todo/TodoList";
import { Todo } from "@/components/todo/todo.types";
import { act } from "react-dom/test-utils";

const todo: Todo = {
    id: 0, 
    message: "hello world",
    isDone: true,
}

describe("TodoList component", () => {
    it('Should add new todo', async () => {
        const setState = jest.fn()
        jest.spyOn(React, 'useState').mockImplementationOnce(() => [[todo], setState as any] as any)
        render(<TodoList/>)

        const addBtn = await screen.findByTestId('add-todo-btn')
        act(() => fireEvent.click(addBtn))
        expect(setState).toHaveBeenCalledWith([todo, {id: 1, message: "", isDone: false}])
    })
    it('Should remove todo', async () => {
        const setState = jest.fn()
        jest.spyOn(React, 'useState').mockImplementationOnce(() => [[todo], setState as any] as any)
        render(<TodoList/>)
        
        const removeBtn = await screen.findByText('Delete')
        act(() => fireEvent.click(removeBtn))
        expect(setState).toHaveBeenCalledWith([])
    })

    it('Should mark todo as undone', async () => {
        const setState = jest.fn()
        jest.spyOn(React, 'useState').mockImplementationOnce(() => [[todo], setState as any] as any)
        render(<TodoList/>)
        
        const checkbox = await screen.findByRole('checkbox')
        act(() => fireEvent.click(checkbox))
        expect(setState).toHaveBeenCalledWith([{...todo, isDone: false}])
    })

    it('Should change todo text', async () => {
        const setState = jest.fn()
        jest.spyOn(React, 'useState').mockImplementationOnce(() => [[todo], setState as any] as any)
        render(<TodoList/>)
        
        const textbox = await screen.findByRole('textbox')
        act(() => fireEvent.change(textbox, {target: {value: 'changed'}}))
        expect(setState).toHaveBeenCalledWith([{...todo, message: 'changed'}])
    })
})

