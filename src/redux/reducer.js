
import filtersReducer from "../Components/Filters/filterSlice";
import todoReducer from "../Components/TodoList/todoSlices";

//Hàm tổng hợp các reducer con là filterSlice và todoSlice
const rootReducer = (state = {}, action) => {
    return {
        filters: filtersReducer(state.filters, action),
        todoList: todoReducer(state.todoList, action)
    }
}

export default rootReducer;