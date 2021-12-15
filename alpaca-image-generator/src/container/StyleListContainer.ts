import { connect } from "react-redux";
import { StyleList } from "components";
import { ComponentProps } from "react";
import store from "store";

const mapStateToProps = (state: any): ComponentProps<typeof StyleList> => {
  return {
    background: state.url,
    selected: state.selected,
    selectedStyle: state.style,
    hair: state.hair,
    ear: state.ear,
    eye: state.eye,
    mouth: state.mouth,
    neck: state.neck,
    leg: state.leg,
    accessorie: state.accessorie,
    onEmitAction: (actionWithPaylaod: Object) =>
      store.dispatch(actionWithPaylaod),
  };
};

export default connect(mapStateToProps)(StyleList);
