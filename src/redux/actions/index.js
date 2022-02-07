import axios from "axios";

export const fetchProjects = () => async (dispatch) => {
  try {
    let result = await axios("https://demo5417866.mockable.io/projects");
    dispatch({ type: "FETCH_PROJECTS", projects: result.data });
  } catch (err) {
    dispatch({ error: err });
  }
};

export const fetchTodolist = () => async (dispatch) => {
  try {
    let result = await axios("https://demo5417866.mockable.io/todolist");
    dispatch({ type: "FETCH_TODOLIST", todolist: result.data });
  } catch (err) {
    dispatch({ error: err });
  }
};
