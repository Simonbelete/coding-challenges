import { connect } from "react-redux";
import { Accessorize } from "components";
import { ComponentProps } from "react";
import store from "store";

const mapStateToProps = (state: any): ComponentProps<typeof Accessorize> => {
  return {
    selected: state.selected,
    onEmitAction: (actionWithPaylaod: Object) =>
      store.dispatch(actionWithPaylaod),
  };
};

export default connect(mapStateToProps)(Accessorize);
