import { SET_POINTS, ADD_POINTS } from "../actions/pointsActions";

const initState = {
  points: 0
};

const pointsReducer = (state = initState, action) => {
  if (action.type === SET_POINTS) {
    const points = action.payload.points;
    return {
      ...state,
      points
    }
  }

  if (action.type === ADD_POINTS){
    const newPointTotal = state.points + action.payload.points;
    return {
      ...state,
      points: newPointTotal
    }
  }
  return state;
};

export default pointsReducer;