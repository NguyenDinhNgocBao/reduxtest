import { createSelector } from "reselect";

export const todoListSelector = (state) => state.todoList
export const searchSelector = (state) => state.filters.search

export const todoRemainingSelector = createSelector(todoListSelector, searchSelector, (todoList, search) => {
    return todoList.filter((todo) =>{
        return todo.name.toLowerCase().includes(search)
    })
})

/*export const todoListSelector = (state) =>{
    const todoRemaining = state.todoList.filter(todo => { //lọc trong todoList
        return todo.name.toLowerCase().includes(searchSelector(state)) // Kiểm tra có item nào có name trùng với giá trị của search không
    })
    return todoRemaining
}

export const searchSelector = (state) => state.filters.search//Lấy giá trị của search từ reducer*/
