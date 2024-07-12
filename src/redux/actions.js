//action creator 
export const addTodo = (data) => {
    return{
        type: 'todoList/addTodo',
        payload: data
    }
}

export const searchTodo = (text) =>{
    return{
        type: 'filters/searchTodo',
        payload: text
    }
}

export const statusTodo = () =>{
    return{
        type: 'filters/statusTodo'
    }
}

export const priorityTodo = () =>{
    return{
        type: 'filters/priorityTodo'
    }
}