import { connect } from "react-redux";
import { Accessorize } from "components";
import { ComponentProps } from "react";

const mapStateToProps = (state: any): ComponentProps<typeof Accessorize> => {
  return {
    selected: state.selected,
  };
};

export default connect(mapStateToProps)(Accessorize);
