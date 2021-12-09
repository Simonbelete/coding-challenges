import { BACKGROUND_IMAGE_SET_BLUE_50 } from "constants/action-types";

const INITIAL_STATE = {
  url: "/backgrounds/darkblue70.png",
};

const BackgroundImageReducer = (state = INITIAL_STATE, action: any) => {
  if (action.payload) return { url: action.payload.url };
  else return state;
};

export default BackgroundImageReducer;
