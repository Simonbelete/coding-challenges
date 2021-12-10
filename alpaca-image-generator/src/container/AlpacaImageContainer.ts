import { connect } from "react-redux";
import { AlpacaImage } from "components";
import { ComponentProps } from "react";

const mapStateToProps = (state: any): ComponentProps<typeof AlpacaImage> => {
  return {
    imageUrl: state.url,
  };
};

export default connect(mapStateToProps)(AlpacaImage);
