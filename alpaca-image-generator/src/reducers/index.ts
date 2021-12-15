const INITIAL_STATE = {
  url: "/backgrounds/darkblue70.png",
  selected: "HAIR",
  style: "HAIR_DEFAULT",
};

const CommonReducer = (state = INITIAL_STATE, action: any) => {
  if (action.payload && action.payload.url)
    return {
      url: action.payload.url,
      selected: state.selected,
      style: state.style,
    };
  else if (action.payload && action.payload.selected)
    return {
      url: state.url,
      selected: action.payload.selected,
      style: state.style,
    };
  else if (action.payload && action.payload.style)
    return {
      url: state.url,
      selected: state.selected,
      style: state.style,
    };
  else return state;
};

export default CommonReducer;
