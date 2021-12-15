import { connect } from "react-redux";
import { StyleList } from "components";
import { ComponentProps } from "react";

const mapStateToProps = (state: any): ComponentProps<typeof StyleList> => {
  return {
    selected: state.selected,
    selectedStyle: state.style,
  };
};

export default connect(mapStateToProps)(StyleList);
