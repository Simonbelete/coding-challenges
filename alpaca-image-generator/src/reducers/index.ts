const INITIAL_STATE = {
  url: "/backgrounds/darkblue70.png",
  selected: "HAIR",
};

const CommonReducer = (state = INITIAL_STATE, action: any) => {
  if (action.payload && action.payload.url)
    return { url: action.payload.url, selected: state.selected };
  else if (action.payload && action.payload.selected)
    return { url: state.url, selected: action.payload.selected };
  else return state;
};

export default CommonReducer;
