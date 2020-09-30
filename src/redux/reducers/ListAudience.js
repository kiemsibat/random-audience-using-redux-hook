const initialState = {
    list:[],
}

const ListAudience = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_RANDOM":
     {
        let newList = [ ...state.list ];
        newList.push(action.payload)
        return {
         ...state,
        list: newList,
        };
     }
     case "DEL":
     {
        let newList = [ ...state.list ];
        newList = newList.filter(todo => todo.id !== action.payload)
        return {
         ...state,
        list: newList,
        };
     }
    default:
      return state;
  }
};

export default ListAudience;
