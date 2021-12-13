import { Button } from "components";
import React, { ReactElement } from "react";

const StyleList: React.FC<{ selected: string; selectedStyle?: string }> = ({
  selected,
  selectedStyle = "DEFAULT",
}): ReactElement => {
  return (
    <div className="space-y-4">
      {selected === "HAIR" && (
        <div className="space-y-2">
          <div className="space-x-1">
            <Button active={selectedStyle === "DEFAULT"}>Default</Button>
            <Button active={selectedStyle === "DEFAULT"}>Curls</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StyleList;
