const initialState = {
  loading: true,
  todolist: [],
  projects: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case "FETCH_PROJECTS":
      return {
        ...state,
        loading: false,
        projects: action.projects,
      };
    case "FETCH_TODOLIST":
      return {
        ...state,
        loading: false,
        todolist: action.todolist,
      };
    default:
      return state;
  }
};

export default reducer;
