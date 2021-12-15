const INITIAL_STATE = {
  url: "/backgrounds/darkblue70.png",
  selected: "HAIR",
  style: "HAIR_DEFAULT",
  hair: "/hair/default.png",
  ear: "/ears/default.png",
  eye: "/eyes/default.png",
  mouth: "/mouth/default.png",
  neck: "/neck/default.png",
  leg: "/leg/default.png",
  accessorie: "/accessories/headphone.png",
};

const CommonReducer = (state = INITIAL_STATE, action: any) => {
  if (action.payload && action.payload.url)
    return {
      url: action.payload.url,
      selected: state.selected,
      style: state.style,
      hair: state.hair,
      ear: state.ear,
      eye: state.eye,
      mouth: state.mouth,
      neck: state.neck,
      leg: state.leg,
      accessorie: state.accessorie,
    };
  else if (action.payload && action.payload.selected)
    return {
      url: state.url,
      selected: action.payload.selected,
      style: state.style,
      hair: state.hair,
      ear: state.ear,
      eye: state.eye,
      mouth: state.mouth,
      neck: state.neck,
      leg: state.leg,
      accessorie: state.accessorie,
    };
  else if (action.payload && action.payload.style)
    return {
      url: state.url,
      selected: state.selected,
      style: action.payload.style,
      hair: state.hair,
      ear: state.ear,
      eye: state.eye,
      mouth: state.mouth,
      neck: state.neck,
      leg: state.leg,
      accessorie: state.accessorie,
    };
  else if (action.payload && action.payload.hair)
    return {
      url: state.url,
      selected: state.selected,
      style: state.style,
      hair: action.payload.hair,
      ear: state.ear,
      eye: state.eye,
      mouth: state.mouth,
      neck: state.neck,
      leg: state.leg,
      accessorie: state.accessorie,
    };
  else if (action.payload && action.payload.ear)
    return {
      url: state.url,
      selected: state.selected,
      style: state.style,
      hair: state.hair,
      ear: action.payload.ear,
      eye: state.eye,
      mouth: state.mouth,
      neck: state.neck,
      leg: state.leg,
      accessorie: state.accessorie,
    };
  else if (action.payload && action.payload.eye)
    return {
      url: state.url,
      selected: state.selected,
      style: state.style,
      hair: state.hair,
      ear: state.ear,
      eye: action.payload.eye,
      mouth: state.mouth,
      neck: state.neck,
      leg: state.leg,
      accessorie: state.accessorie,
    };
  else if (action.payload && action.payload.mouth)
    return {
      url: state.url,
      selected: state.selected,
      style: state.style,
      hair: state.hair,
      ear: state.ear,
      eye: state.eye,
      mouth: action.payload.mouth,
      neck: state.neck,
      leg: state.leg,
      accessorie: state.accessorie,
    };
  else if (action.payload && action.payload.neck)
    return {
      url: state.url,
      selected: state.selected,
      style: state.style,
      hair: state.hair,
      ear: state.ear,
      eye: state.eye,
      mouth: state.mouth,
      neck: action.payload.neck,
      leg: state.leg,
      accessorie: state.accessorie,
    };
  else if (action.payload && action.payload.leg)
    return {
      url: state.url,
      selected: state.selected,
      style: state.style,
      hair: state.hair,
      ear: state.ear,
      eye: state.eye,
      mouth: state.mouth,
      neck: state.neck,
      leg: action.payload.leg,
      accessorie: state.accessorie,
    };
  else if (action.payload && action.payload.accessorie)
    return {
      url: state.url,
      selected: state.selected,
      style: state.style,
      hair: state.hair,
      ear: state.ear,
      eye: state.eye,
      mouth: state.mouth,
      neck: state.neck,
      leg: state.leg,
      accessorie: action.payload.accessorie,
    };
  else return state;
};

export default CommonReducer;
