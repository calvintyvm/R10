import { queryAllFaves, createFave, deleteFave } from "../../config/models";

const GET_FAVE_SESSIONS = "GET_FAVE_SESSIONS";
const CREATE_FAVE_SESSION = "CREATE_FAVE_SESSION";
const DELETE_FAVE_SESSION = "DELETE_FAVE_SESSION";
const GET_ERROR = "GET_ERROR";

export const getError = error => ({
  type: GET_ERROR,
  payload: error
});

export const getFaveSessions = () => ({
  type: GET_FAVE_SESSIONS
});
//tell redux hey we dont need it we are using create fave
export const createFaveSession = () => ({
  type: CREATE_FAVE_SESSION
});
//tell redux hey we dont need it we are using create fave
export const deleteFaveSession = () => ({
  type: DELETE_FAVE_SESSION
});

//already exist work on toggle off for deleteing

export const showTheFaves = () => dispatch => {
  try {
    queryAllFaves();
    dispatch(getFaveSessions());
  } catch (e) {
    dispatch(getError(e.message));
  }
};

export const createTheFave = id => dispatch => {
  try {
    createFave(id);
    dispatch(createFaveSession());
    dispatch(getFaveSessions());
  } catch (e) {
    dispatch(getError(e.message));
  }
};

export const deleteTheFave = id => dispatch => {
  try {
    deleteFave(id);
    dispatch(deleteFaveSession());
    dispatch(getFaveSessions());
  } catch (e) {
    dispatch(GET_ERROR(e));
  }
};

const initialState = {
  allFaves: [],
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FAVE_SESSIONS: {
      return { ...state, allFaves: queryAllFaves(), error: "" };
    }
    case CREATE_FAVE_SESSION: {
    }
    case DELETE_FAVE_SESSION: {
    }
    case GET_ERROR: {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
};
