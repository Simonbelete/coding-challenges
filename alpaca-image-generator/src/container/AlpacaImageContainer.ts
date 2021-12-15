import { connect } from "react-redux";
import { AlpacaImage } from "components";
import { ComponentProps } from "react";

const mapStateToProps = (state: any): ComponentProps<typeof AlpacaImage> => {
  return {
    imageUrl: state.url,
    hair: state.hair,
    ear: state.ear,
    eye: state.eye,
    mouth: state.mouth,
    neck: state.neck,
    leg: state.leg,
    accessorie: state.accessorie,
  };
};

export default connect(mapStateToProps)(AlpacaImage);
