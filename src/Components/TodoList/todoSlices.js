const initState = [//hiển thị thông tin ra
        {id: 1, name:"Learn React", completed: false, priority: "High"},
        {id: 2, name:"Learn Redux", completed: false, priority: "Medium"},
        {id: 3, name:"Learn .Net", completed: false, priority: "Medium"},
        {id: 4, name:"Learn English", completed: false, priority: "High"},
        {id: 5, name:"Learn Fe", completed: false, priority: "Low"},
    ]
//Gía trị khởi tạo của state

const todoReducer = (state = initState, action) => {
    console.log({state, action})
    switch (action.type) {
        case 'todoList/addTodo':
            return[...state, action.payload]
        default:
            return state;
    }
}

export default todoReducer;