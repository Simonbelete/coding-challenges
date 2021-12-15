import React, { ReactElement, useCallback } from "react";
import { Button, SubTitle } from "components";
import {
  SET_HAIR,
  SET_EYES,
  SET_EARS,
  SET_MOUTH,
  SET_NECK,
  SET_LEG,
  SET_ACCESSORIE,
  SET_BACKGROUND,
} from "actions";

const Accessorize: React.FC<{
  selected: string;
  onEmitAction: (a: Object) => void;
}> = ({ selected, onEmitAction }): ReactElement => {
  const emitAction = useCallback(
    (actionWithPayload: Object) => {
      onEmitAction(actionWithPayload);
    },
    [onEmitAction]
  );

  return (
    <div className="space-y-4">
      <SubTitle>Accessorize The Alpacas</SubTitle>
      <div className="space-y-2">
        <div className="space-x-1">
          <Button
            active={selected === "HAIR"}
            onClick={() => emitAction(SET_HAIR)}
          >
            Hair
          </Button>
          <Button
            active={selected === "EARS"}
            onClick={() => emitAction(SET_EARS)}
          >
            Ears
          </Button>
          <Button
            active={selected === "EYES"}
            onClick={() => emitAction(SET_EYES)}
          >
            Eyes
          </Button>
        </div>
        <div className="space-x-1">
          <Button
            active={selected === "MOUTH"}
            onClick={() => emitAction(SET_MOUTH)}
          >
            Mouth
          </Button>
          <Button
            active={selected === "NECK"}
            onClick={() => emitAction(SET_NECK)}
          >
            Neck
          </Button>
          <Button
            active={selected === "LEG"}
            onClick={() => emitAction(SET_LEG)}
          >
            Leg
          </Button>
        </div>
        <div className="space-x-1">
          <Button
            active={selected === "ACCESSORIES"}
            onClick={() => emitAction(SET_ACCESSORIE)}
          >
            Accessories
          </Button>
          <Button
            active={selected === "BACKGROUND"}
            onClick={() => emitAction(SET_BACKGROUND)}
          >
            Background
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Accessorize;
