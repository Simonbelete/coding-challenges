import React, { ReactElement } from "react";
import { RandomButton } from "components";
import * as Actions from "actions";
import store from "store";

const RandomButtonContainer: React.FC = (): ReactElement => {
  const backgrounds = [
    Actions.SET_BLUE_50,
    Actions.SET_BLUE_60,
    Actions.SET_BLUE_70,
    Actions.SET_DARK_BLUE_30,
    Actions.SET_DARK_BLUE_50,
    Actions.SET_DARK_BLUE_70,
    Actions.SET_DARK_GREEN_50,
    Actions.SET_DARK_GREEN_60,
    Actions.SET_DARK_GREEN_70,
    Actions.SET_DARK_GREY_40,
    Actions.SET_DARK_GREY_70,
    Actions.SET_DARK_GREY_80,
    Actions.SET_DARK_RED_50,
    Actions.SET_DARK_RED_60,
    Actions.SET_DARK_RED_70,
    Actions.SET_DARK_YELLOW_50,
    Actions.SET_DARK_YELLOW_60,
    Actions.SET_DARK_YELLOW_70,
  ];
  const hairs = [
    Actions.SET_STYLE_HAIR_DEFAULT,
    Actions.SET_STYLE_HAIR_BANG,
    Actions.SET_STYLE_HAIR_CURLS,
    Actions.SET_STYLE_HAIR_ELEGANT,
    Actions.SET_STYLE_HAIR_FANCY,
    Actions.SET_STYLE_HAIR_QUIFF,
    Actions.SET_STYLE_HAIR_SHORT,
  ];
  const ears = [
    Actions.SET_STYLE_EARS_DEFAULT,
    Actions.SET_STYLE_EARS_TILT_BACKWARD,
    Actions.SET_STYLE_EARS_TILT_FORWARD,
  ];
  const eyes = [
    Actions.SET_STYLE_EYES_DEFAULT,
    Actions.SET_STYLE_EYES_ANGRY,
    Actions.SET_STYLE_EYES_NAUGHTY,
    Actions.SET_STYLE_EYES_PANDA,
    Actions.SET_STYLE_EYES_SMART,
    Actions.SET_STYLE_EYES_STAR,
  ];
  const mouth = [
    Actions.SET_STYLE_MOUTH_DEFAULT,
    Actions.SET_STYLE_MOUTH_ASTONISHED,
    Actions.SET_STYLE_MOUTH_EATING,
    Actions.SET_STYLE_MOUTH_LAUGH,
    Actions.SET_STYLE_MOUTH_TONGUE,
  ];
  const neck = [
    Actions.SET_STYLE_NECK_DEFAULT,
    Actions.SET_STYLE_NECK_BEND_BACKWARD,
    Actions.SET_STYLE_NECK_BEND_FORWARD,
    Actions.SET_STYLE_NECK_THICK,
  ];
  const leg = [
    Actions.SET_STYLE_LEG_DEFAULT,
    Actions.SET_STYLE_LEG_COOKIE,
    Actions.SET_STYLE_LEG_GAME_CONSOLE,
    Actions.SET_STYLE_LEG_TILT_BACKWARD,
    Actions.SET_STYLE_LEG_TILT_FORWARD,
  ];
  const accessores = [
    Actions.SET_STYLE_ACCESSORIES_HEADPHONE,
    Actions.SET_STYLE_ACCESSORIES_EARINGS,
    Actions.SET_STYLE_ACCESSORIES_FLOWER,
    Actions.SET_STYLE_ACCESSORIES_GLASSES,
  ];
  const randomNumber = (max: number) => {
    return Math.floor(Math.random() * max);
  };
  const randomizeAlpacaImage = () => {
    store.dispatch(backgrounds[randomNumber(backgrounds.length)]);
    store.dispatch(hairs[randomNumber(hairs.length)]);
    store.dispatch(ears[randomNumber(ears.length)]);
    store.dispatch(eyes[randomNumber(eyes.length)]);
    store.dispatch(mouth[randomNumber(mouth.length)]);
    store.dispatch(neck[randomNumber(neck.length)]);
    store.dispatch(leg[randomNumber(leg.length)]);
    store.dispatch(accessores[randomNumber(accessores.length)]);
  };
  return <RandomButton onClick={randomizeAlpacaImage} />;
};

export default RandomButtonContainer;
