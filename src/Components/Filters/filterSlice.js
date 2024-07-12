const initState = {//get lấy thông tin vào
        search:"",
        status:"All",
        priority:[] //Là 1 array vì có thể lưu nhiều priority
}
//Gía trị khởi tạo của state

const filtersReducer = (state = initState, action) => {
    console.log({state, action})
    switch (action.type) {
        case 'filters/searchTodo':
            return{
                ...state.filters,
                search: action.payload // just only update s
            }
        default:
            return state;
    }
}

export default filtersReducer;