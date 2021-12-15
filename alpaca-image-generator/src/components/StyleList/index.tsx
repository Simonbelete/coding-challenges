import React, { ReactElement, useCallback } from "react";
import { Button, SubTitle } from "components";
import * as Actions from "actions";

const StyleList: React.FC<{
  background: string;
  selected: string;
  selectedStyle?: string;
  hair: string;
  ear: string;
  eye: string;
  mouth: string;
  neck: string;
  leg: string;
  accessorie: string;
  onEmitAction: (a: Object) => void;
}> = ({
  background,
  selected,
  selectedStyle = "DEFAULT",
  onEmitAction,
  hair,
  ear,
  eye,
  mouth,
  neck,
  leg,
  accessorie,
}): ReactElement => {
  const emitAction = useCallback(
    (actionWithPayload: Object) => {
      onEmitAction(actionWithPayload);
    },
    [onEmitAction]
  );

  return (
    <div className="space-y-4">
      <SubTitle>Style</SubTitle>
      {console.log(hair)}
      {console.log(Actions.SET_STYLE_HAIR_DEFAULT.payload.hair)}
      {/* Hair */}
      {selected === "HAIR" && (
        <div className="space-y-2">
          <div className="space-x-1">
            <Button
              onClick={() => emitAction(Actions.SET_STYLE_HAIR_DEFAULT)}
              active={hair === Actions.SET_STYLE_HAIR_DEFAULT.payload.hair}
            >
              Default
            </Button>
            <Button
              onClick={() => emitAction(Actions.SET_STYLE_HAIR_CURLS)}
              active={hair === Actions.SET_STYLE_HAIR_CURLS.payload.hair}
            >
              Curls
            </Button>
            <Button
              onClick={() => emitAction(Actions.SET_STYLE_HAIR_SHORT)}
              active={hair === Actions.SET_STYLE_HAIR_SHORT.payload.hair}
            >
              Short
            </Button>
          </div>
          <div className="space-x-1">
            <Button
              onClick={() => emitAction(Actions.SET_STYLE_HAIR_BANG)}
              active={hair === Actions.SET_STYLE_HAIR_BANG.payload.hair}
            >
              Bang
            </Button>
            <Button
              onClick={() => emitAction(Actions.SET_STYLE_HAIR_ELEGANT)}
              active={hair === Actions.SET_STYLE_HAIR_ELEGANT.payload.hair}
            >
              Elegant
            </Button>
            <Button
              onClick={() => emitAction(Actions.SET_STYLE_HAIR_QUIFF)}
              active={hair === Actions.SET_STYLE_HAIR_QUIFF.payload.hair}
            >
              Quiff
            </Button>
          </div>
        </div>
      )}
      {/* Ears */}
      {selected === Actions.SET_EARS.payload.selected && (
        <div className="space-y-2">
          <div className="space-x-1">
            <Button
              onClick={() => emitAction(Actions.SET_STYLE_EARS_DEFAULT)}
              active={ear === Actions.SET_STYLE_EARS_DEFAULT.payload.ear}
            >
              Default
            </Button>
            <Button
              onClick={() => emitAction(Actions.SET_STYLE_EARS_TILT_BACKWARD)}
              active={ear === Actions.SET_STYLE_EARS_TILT_BACKWARD.payload.ear}
            >
              Tilt Backward
            </Button>
          </div>
          <div className="space-x-1">
            <Button
              onClick={() => emitAction(Actions.SET_STYLE_EARS_TILT_FORWARD)}
              active={ear === Actions.SET_STYLE_EARS_TILT_FORWARD.payload.ear}
            >
              Tilt Forward
            </Button>
          </div>
        </div>
      )}
      {/* Eyes */}
      {selected === Actions.SET_EYES.payload.selected && (
        <div className="space-y-2">
          <div className="space-x-1">
            <Button
              onClick={() => emitAction(Actions.SET_STYLE_EYES_DEFAULT)}
              active={eye === Actions.SET_STYLE_EYES_DEFAULT.payload.eye}
            >
              Default
            </Button>
            <Button
              onClick={() => emitAction(Actions.SET_STYLE_EYES_ANGRY)}
              active={eye === Actions.SET_STYLE_EYES_ANGRY.payload.eye}
            >
              Angry
            </Button>
            <Button
              onClick={() => emitAction(Actions.SET_STYLE_EYES_NAUGHTY)}
              active={eye === Actions.SET_STYLE_EYES_NAUGHTY.payload.eye}
            >
              Naughty
            </Button>
          </div>
          <div className="space-x-1">
            <Button
              onClick={() => emitAction(Actions.SET_STYLE_EYES_PANDA)}
              active={eye === Actions.SET_STYLE_EYES_PANDA.payload.eye}
            >
              Panda
            </Button>
            <Button
              onClick={() => emitAction(Actions.SET_STYLE_EYES_SMART)}
              active={eye === Actions.SET_STYLE_EYES_SMART.payload.eye}
            >
              Smart
            </Button>
            <Button
              onClick={() => emitAction(Actions.SET_STYLE_EYES_STAR)}
              active={eye === Actions.SET_STYLE_EYES_STAR.payload.eye}
            >
              Star
            </Button>
          </div>
        </div>
      )}
      {/* Mouth */}
      {selected === Actions.SET_MOUTH.payload.selected && (
        <div className="space-y-2">
          <div className="space-x-1">
            <Button
              onClick={() => emitAction(Actions.SET_STYLE_MOUTH_DEFAULT)}
              active={mouth === Actions.SET_STYLE_MOUTH_DEFAULT.payload.mouth}
            >
              Default
            </Button>
            <Button
              onClick={() => emitAction(Actions.SET_STYLE_MOUTH_ASTONISHED)}
              active={
                mouth === Actions.SET_STYLE_MOUTH_ASTONISHED.payload.mouth
              }
            >
              Astonished
            </Button>
            <Button
              onClick={() => emitAction(Actions.SET_STYLE_MOUTH_EATING)}
              active={mouth === Actions.SET_STYLE_MOUTH_EATING.payload.mouth}
            >
              Eating
            </Button>
          </div>
          <div className="space-x-1">
            <Button
              onClick={() => emitAction(Actions.SET_STYLE_MOUTH_LAUGH)}
              active={mouth === Actions.SET_STYLE_MOUTH_LAUGH.payload.mouth}
            >
              Laugh
            </Button>
            <Button
              onClick={() => emitAction(Actions.SET_STYLE_MOUTH_TONGUE)}
              active={mouth === Actions.SET_STYLE_MOUTH_TONGUE.payload.mouth}
            >
              Tongue
            </Button>
          </div>
        </div>
      )}
      {/* Neck */}
      {selected === Actions.SET_NECK.payload.selected && (
        <div className="space-y-2">
          <div className="space-x-1">
            <Button
              onClick={() => emitAction(Actions.SET_STYLE_NECK_DEFAULT)}
              active={neck === Actions.SET_STYLE_NECK_DEFAULT.payload.neck}
            >
              Default
            </Button>
            <Button
              onClick={() => emitAction(Actions.SET_STYLE_NECK_BEND_BACKWARD)}
              active={
                neck === Actions.SET_STYLE_NECK_BEND_BACKWARD.payload.neck
              }
            >
              Bend Backward
            </Button>
          </div>
          <div className="space-x-1">
            <Button
              onClick={() => emitAction(Actions.SET_STYLE_NECK_BEND_FORWARD)}
              active={neck === Actions.SET_STYLE_NECK_BEND_FORWARD.payload.neck}
            >
              Bend Forward
            </Button>
            <Button
              onClick={() => emitAction(Actions.SET_STYLE_NECK_THICK)}
              active={neck === Actions.SET_STYLE_NECK_THICK.payload.neck}
            >
              Thick
            </Button>
          </div>
        </div>
      )}
      {/* Leg */}
      {selected === Actions.SET_LEG.payload.selected && (
        <div className="space-y-2">
          <div className="space-x-1">
            <Button
              onClick={() => emitAction(Actions.SET_STYLE_LEG_DEFAULT)}
              active={leg === Actions.SET_STYLE_LEG_DEFAULT.payload.leg}
            >
              Default
            </Button>
            <Button
              onClick={() => emitAction(Actions.SET_STYLE_LEG_COOKIE)}
              active={leg === Actions.SET_STYLE_LEG_COOKIE.payload.leg}
            >
              Cookie
            </Button>
            <Button
              onClick={() => emitAction(Actions.SET_STYLE_LEG_GAME_CONSOLE)}
              active={leg === Actions.SET_STYLE_LEG_GAME_CONSOLE.payload.leg}
            >
              Console
            </Button>
          </div>
          <div className="space-x-1">
            <Button
              onClick={() => emitAction(Actions.SET_STYLE_LEG_TILT_BACKWARD)}
              active={leg === Actions.SET_STYLE_LEG_TILT_BACKWARD.payload.leg}
            >
              Tilt Backward
            </Button>
            <Button
              onClick={() => emitAction(Actions.SET_STYLE_LEG_TILT_FORWARD)}
              active={leg === Actions.SET_STYLE_LEG_TILT_FORWARD.payload.leg}
            >
              Tilt Forward
            </Button>
          </div>
        </div>
      )}
      {/* Accessories */}
      {selected === Actions.SET_ACCESSORIE.payload.selected && (
        <div className="space-y-2">
          <div className="space-x-1">
            <Button
              onClick={() =>
                emitAction(Actions.SET_STYLE_ACCESSORIES_HEADPHONE)
              }
              active={
                accessorie ===
                Actions.SET_STYLE_ACCESSORIES_HEADPHONE.payload.accessorie
              }
            >
              Headphone
            </Button>
            <Button
              onClick={() => emitAction(Actions.SET_STYLE_ACCESSORIES_EARINGS)}
              active={
                accessorie ===
                Actions.SET_STYLE_ACCESSORIES_EARINGS.payload.accessorie
              }
            >
              Earings
            </Button>
          </div>
          <div className="space-x-1">
            <Button
              onClick={() => emitAction(Actions.SET_STYLE_ACCESSORIES_FLOWER)}
              active={
                accessorie ===
                Actions.SET_STYLE_ACCESSORIES_FLOWER.payload.accessorie
              }
            >
              Flower
            </Button>
            <Button
              onClick={() => emitAction(Actions.SET_STYLE_ACCESSORIES_GLASSES)}
              active={
                accessorie ===
                Actions.SET_STYLE_ACCESSORIES_GLASSES.payload.accessorie
              }
            >
              Glasses
            </Button>
          </div>
        </div>
      )}
      {/* Background */}
      {selected === Actions.SET_BACKGROUND.payload.selected && (
        <div className="space-y-2">
          <div className="space-x-1">
            <Button
              onClick={() => emitAction(Actions.SET_BLUE_50)}
              active={background === Actions.SET_BLUE_50.payload.url}
            >
              Blue 50
            </Button>
            <Button
              onClick={() => emitAction(Actions.SET_BLUE_60)}
              active={background === Actions.SET_BLUE_60.payload.url}
            >
              Blue 60
            </Button>
            <Button
              onClick={() => emitAction(Actions.SET_BLUE_70)}
              active={background === Actions.SET_BLUE_70.payload.url}
            >
              Blue 70
            </Button>
          </div>
          <div className="space-x-1">
            <Button
              onClick={() => emitAction(Actions.SET_DARK_BLUE_30)}
              active={background === Actions.SET_DARK_BLUE_30.payload.url}
            >
              Dark Blue 30
            </Button>
            <Button
              onClick={() => emitAction(Actions.SET_DARK_BLUE_50)}
              active={background === Actions.SET_DARK_BLUE_50.payload.url}
            >
              Dark Blue 50
            </Button>
          </div>
          <div className="space-x-1">
            <Button
              onClick={() => emitAction(Actions.SET_DARK_BLUE_70)}
              active={background === Actions.SET_DARK_BLUE_70.payload.url}
            >
              Dark Blue 70
            </Button>
            <Button
              onClick={() => emitAction(Actions.SET_DARK_GREEN_50)}
              active={background === Actions.SET_DARK_GREEN_50.payload.url}
            >
              Dark Green 50
            </Button>
          </div>
          <div className="space-x-1">
            <Button
              onClick={() => emitAction(Actions.SET_DARK_GREEN_60)}
              active={background === Actions.SET_DARK_GREEN_60.payload.url}
            >
              Dark Green 60
            </Button>
            <Button
              onClick={() => emitAction(Actions.SET_DARK_GREEN_70)}
              active={background === Actions.SET_DARK_GREEN_70.payload.url}
            >
              Dark Green 70
            </Button>
          </div>
          <div className="space-x-1">
            <Button
              onClick={() => emitAction(Actions.SET_DARK_GREY_40)}
              active={background === Actions.SET_DARK_GREY_40.payload.url}
            >
              Dark Grey 40
            </Button>
            <Button
              onClick={() => emitAction(Actions.SET_DARK_GREY_70)}
              active={background === Actions.SET_DARK_GREY_70.payload.url}
            >
              Dark Grey 70
            </Button>
          </div>
          <div className="space-x-1">
            <Button
              onClick={() => emitAction(Actions.SET_DARK_GREY_80)}
              active={background === Actions.SET_DARK_GREY_80.payload.url}
            >
              Dark Grey 80
            </Button>
            <Button
              onClick={() => emitAction(Actions.SET_DARK_RED_50)}
              active={background === Actions.SET_DARK_RED_50.payload.url}
            >
              Dark Red 50
            </Button>
          </div>
          <div className="space-x-1">
            <Button
              onClick={() => emitAction(Actions.SET_DARK_RED_60)}
              active={background === Actions.SET_DARK_RED_60.payload.url}
            >
              Dark Red 60
            </Button>
            <Button
              onClick={() => emitAction(Actions.SET_DARK_RED_70)}
              active={background === Actions.SET_DARK_RED_70.payload.url}
            >
              Dark Red 70
            </Button>
          </div>
          <div className="space-x-1">
            <Button
              onClick={() => emitAction(Actions.SET_DARK_YELLOW_50)}
              active={background === Actions.SET_DARK_YELLOW_50.payload.url}
            >
              Dark Yellow 50
            </Button>
            <Button
              onClick={() => emitAction(Actions.SET_DARK_YELLOW_60)}
              active={background === Actions.SET_DARK_YELLOW_60.payload.url}
            >
              Dark Yellow 60
            </Button>
          </div>
          <div className="space-x-1">
            <Button
              onClick={() => emitAction(Actions.SET_DARK_YELLOW_70)}
              active={background === Actions.SET_DARK_YELLOW_70.payload.url}
            >
              Dark Yellow 70
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StyleList;
