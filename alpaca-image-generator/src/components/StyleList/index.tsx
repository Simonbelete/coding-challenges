import React, { ReactElement } from "react";
import { Button, SubTitle } from "components";
import {
  SET_STYLE_HAIR_DEFAULT,
  SET_STYLE_HAIR_CURLS,
  SET_STYLE_HAIR_SHORT,
  SET_STYLE_HAIR_BANG,
  SET_STYLE_HAIR_ELEGANT,
  SET_STYLE_HAIR_QUIFF,
} from "actions";

const StyleList: React.FC<{ selected: string; selectedStyle?: string }> = ({
  selected,
  selectedStyle = "DEFAULT",
}): ReactElement => {
  return (
    <div className="space-y-4">
      <SubTitle>Style</SubTitle>
      {selected === "HAIR" && (
        <div className="space-y-2">
          <div className="space-x-1">
            <Button
              active={selectedStyle === SET_STYLE_HAIR_DEFAULT.payload.style}
            >
              Default
            </Button>
            <Button
              active={selectedStyle === SET_STYLE_HAIR_CURLS.payload.style}
            >
              Curls
            </Button>
            <Button
              active={selectedStyle === SET_STYLE_HAIR_SHORT.payload.style}
            >
              Short
            </Button>
          </div>
          <div className="space-x-1">
            <Button
              active={selectedStyle === SET_STYLE_HAIR_BANG.payload.style}
            >
              Bang
            </Button>
            <Button
              active={selectedStyle === SET_STYLE_HAIR_ELEGANT.payload.style}
            >
              Elegant
            </Button>
            <Button
              active={selectedStyle === SET_STYLE_HAIR_QUIFF.payload.style}
            >
              Quiff
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StyleList;
