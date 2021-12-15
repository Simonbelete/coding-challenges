import * as ActionTypes from "constants/action-types";

/**
 * Background color actions
 */

export const SET_BLUE_50 = {
  type: ActionTypes.BACKGROUND_IMAGE_SET_BLUE_50,
  payload: { url: "/backgrounds/blue50.png" },
};
export const SET_BLUE_60 = {
  type: ActionTypes.BACKGROUND_IMAGE_SET_BLUE_60,
  payload: { url: "/backgrounds/blue60.png" },
};
export const SET_BLUE_70 = {
  type: ActionTypes.BACKGROUND_IMAGE_SET_BLUE_70,
  payload: { url: "/backgrounds/blue70.png" },
};
export const SET_DARK_BLUE_30 = {
  type: ActionTypes.BACKGROUND_IMAGE_SET_DARK_BLUE_30,
  payload: { url: "/backgrounds/darkblue30.png" },
};
export const SET_DARK_BLUE_50 = {
  type: ActionTypes.BACKGROUND_IMAGE_SET_DARK_BLUE_50,
  payload: { url: "/backgrounds/darkblue50.png" },
};
export const SET_DARK_BLUE_70 = {
  type: ActionTypes.BACKGROUND_IMAGE_SET_DARK_BLUE_70,
  payload: { url: "/backgrounds/darkblue70.png" },
};
export const SET_DARK_GREEN_50 = {
  type: ActionTypes.BACKGROUND_IMAGE_SET_GREEN_50,
  payload: { url: "/backgrounds/green50.png" },
};
export const SET_DARK_GREEN_60 = {
  type: ActionTypes.BACKGROUND_IMAGE_SET_GREEN_60,
  payload: { url: "/backgrounds/green60.png" },
};
export const SET_DARK_GREEN_70 = {
  type: ActionTypes.BACKGROUND_IMAGE_SET_GREEN_70,
  payload: { url: "/backgrounds/green70.png" },
};
export const SET_DARK_GREY_40 = {
  type: ActionTypes.BACKGROUND_IMAGE_SET_GREY_40,
  payload: { url: "/backgrounds/grey40.png" },
};
export const SET_DARK_GREY_70 = {
  type: ActionTypes.BACKGROUND_IMAGE_SET_GREY_70,
  payload: { url: "/backgrounds/grey70.png" },
};
export const SET_DARK_GREY_80 = {
  type: ActionTypes.BACKGROUND_IMAGE_SET_GREY_80,
  payload: { url: "/backgrounds/grey80.png" },
};
export const SET_DARK_RED_50 = {
  type: ActionTypes.BACKGROUND_IMAGE_SET_RED_50,
  payload: { url: "/backgrounds/red50.png" },
};
export const SET_DARK_RED_60 = {
  type: ActionTypes.BACKGROUND_IMAGE_SET_RED_60,
  payload: { url: "/backgrounds/red60.png" },
};
export const SET_DARK_RED_70 = {
  type: ActionTypes.BACKGROUND_IMAGE_SET_RED_70,
  payload: { url: "/backgrounds/red70.png" },
};
export const SET_DARK_YELLOW_50 = {
  type: ActionTypes.BACKGROUND_IMAGE_SET_YELLOW_50,
  payload: { url: "/backgrounds/yellow50.png" },
};
export const SET_DARK_YELLOW_60 = {
  type: ActionTypes.BACKGROUND_IMAGE_SET_YELLOW_60,
  payload: { url: "/backgrounds/yellow60.png" },
};
export const SET_DARK_YELLOW_70 = {
  type: ActionTypes.BACKGROUND_IMAGE_SET_YELLOW_70,
  payload: { url: "/backgrounds/yellow70.png" },
};

/**
 * Accesorize Actions
 */
export const SET_ACCESSORIE = {
  type: ActionTypes.ACCESSORIZE_SET_ACCESSORIES,
  payload: { selected: "ACCESSORIES" },
};
export const SET_BACKGROUND = {
  type: ActionTypes.ACCESSORIZE_SET_BACKGROUND,
  payload: { selected: "BACKGROUND" },
};
export const SET_EARS = {
  type: ActionTypes.ACCESSORIZE_SET_EARS,
  payload: { selected: "EARS" },
};
export const SET_EYES = {
  type: ActionTypes.ACCESSORIZE_SET_EYES,
  payload: { selected: "EYES" },
};
export const SET_HAIR = {
  type: ActionTypes.ACCESSORIZE_SET_HAIR,
  payload: { selected: "HAIR" },
};
export const SET_LEG = {
  type: ActionTypes.ACCESSORIZE_SET_LEG,
  payload: { selected: "LEG" },
};
export const SET_MOUTH = {
  type: ActionTypes.ACCESSORIZE_SET_MOUTH,
  payload: { selected: "MOUTH" },
};
export const SET_NECK = {
  type: ActionTypes.ACCESSORIZE_SET_NECK,
  payload: { selected: "NECK" },
};

/**
 * Accesorize Actions Style List
 */
export const SET_STYLE_HAIR_DEFAULT = {
  type: ActionTypes.STYLE_SET_HAIR_DEFAULT,
  payload: { style: "HAIR_DEFAULT", hair: "hair/default.png" },
};
export const SET_STYLE_HAIR_BANG = {
  type: ActionTypes.STYLE_SET_HAIR_BANG,
  payload: { style: "HAIR_BANG", hair: "hari/bang.png" },
};
export const SET_STYLE_HAIR_CURLS = {
  type: ActionTypes.STYLE_SET_HAIR_CURLS,
  payload: { style: "HAIR_CURLS", hair: "hair/curls.png" },
};
export const SET_STYLE_HAIR_ELEGANT = {
  type: ActionTypes.STYLE_SET_HAIR_ELEGANT,
  payload: { style: "HAIR_ELEGANT", hair: "hair/elegant.png" },
};
export const SET_STYLE_HAIR_FANCY = {
  type: ActionTypes.STYLE_SET_HAIR_FANCY,
  payload: { style: "HAIR_FANCY", hair: "hair/fancy.png" },
};
export const SET_STYLE_HAIR_QUIFF = {
  type: ActionTypes.STYLE_SET_HAIR_QUIFF,
  payload: { style: "HAIR_QUIFF", hair: "hair/quiff.png" },
};
export const SET_STYLE_HAIR_SHORT = {
  type: ActionTypes.STYLE_SET_HAIR_SHORT,
  payload: { style: "HAIR_SHORT", hair: "hair/short.png" },
};

// Ears Style
export const SET_STYLE_EARS_DEFAULT = {
  type: ActionTypes.STYLE_SET_EARS_DEFAULT,
  payload: { style: "EARS_DEFAULT", ear: "ears/default.png" },
};
export const SET_STYLE_EARS_TILT_BACKWARD = {
  type: ActionTypes.STYLE_SET_EARS_TILT_BACKWARD,
  payload: { style: "EARS_TILT_BACKWARD", ear: "ears/tilt-backward.png" },
};
export const SET_STYLE_EARS_TILT_FORWARD = {
  type: ActionTypes.STYLE_SET_EARS_TILT_FORWARD,
  payload: { style: "EARS_TILT_FORWARD", ear: "ears/tilt-forward.png" },
};

// Eyes style
export const SET_STYLE_EYES_DEFAULT = {
  type: ActionTypes.STYLE_SET_EYES_DEFAULT,
  payload: { style: "EYES_DEFAULT", eye: "eyes/default.png" },
};
export const SET_STYLE_EYES_ANGRY = {
  type: ActionTypes.STYLE_SET_EYES_ANGRY,
  payload: { style: "EYES_ANGRY", eye: "eyes/angry.png" },
};
export const SET_STYLE_EYES_NAUGHTY = {
  type: ActionTypes.STYLE_SET_EYES_NAUGHTY,
  payload: { style: "EYES_NAUGHTY", eye: "eyes/naughty.png" },
};
export const SET_STYLE_EYES_PANDA = {
  type: ActionTypes.STYLE_SET_EYES_PANDA,
  payload: { style: "EYES_PANDA", eye: "eyes/panda.png" },
};
export const SET_STYLE_EYES_SMART = {
  type: ActionTypes.STYLE_SET_EYES_SMART,
  payload: { style: "EYES_SMART", eye: "eyes/smart.png" },
};
export const SET_STYLE_EYES_STAR = {
  type: ActionTypes.STYLE_SET_EYES_STAR,
  payload: { style: "EYES_STAR", eye: "eyes/star.png" },
};

// Mouth style
export const SET_STYLE_MOUTH_DEFAULT = {
  type: ActionTypes.STYLE_SET_MOUTH_DEFAULT,
  payload: { style: "MOUTH_DEFAULT", mouth: "mouth/default.png" },
};
export const SET_STYLE_MOUTH_ASTONISHED = {
  type: ActionTypes.STYLE_SET_MOUTH_ASTONISHED,
  payload: { style: "MOUTH_ASTONISHED", mouth: "mouth/astonished.png" },
};
export const SET_STYLE_MOUTH_EATING = {
  type: ActionTypes.STYLE_SET_MOUTH_EATING,
  payload: { style: "MOUTH_EATING", mouth: "mouth/eating.png" },
};
export const SET_STYLE_MOUTH_LAUGH = {
  type: ActionTypes.STYLE_SET_MOUTH_LAUGH,
  payload: { style: "MOUTH_LAUGH", mouth: "mouth/laugh.png" },
};
export const SET_STYLE_MOUTH_TONGUE = {
  type: ActionTypes.STYLE_SET_MOUTH_TONGUE,
  payload: { style: "MOUTH_TONGUE", mouth: "mouth/tongue.png" },
};

// Neck Style
export const SET_STYLE_NECK_DEFAULT = {
  type: ActionTypes.STYLE_SET_NECK_DEFAULT,
  payload: { style: "NECK_DEFAULT", neck: "neck/default.png" },
};
export const SET_STYLE_NECK_BEND_BACKWARD = {
  type: ActionTypes.STYLE_SET_NECK_BEND_BACKWARD,
  payload: { style: "NECK_BEND_BACKWARD", neck: "neck/bend-backward.png" },
};
export const SET_STYLE_NECK_BEND_FORWARD = {
  type: ActionTypes.STYLE_SET_NECK_BEND_FORWARD,
  payload: { style: "NECK_BEND_FORWARD", neck: "neck/bend-forward.png" },
};
export const SET_STYLE_NECK_THICK = {
  type: ActionTypes.STYLE_SET_NECK_THICK,
  payload: { style: "NECK_THICK", neck: "neck/thick.png" },
};

// Leg Style
export const SET_STYLE_LEG_DEFAULT = {
  type: ActionTypes.STYLE_SET_LEG_DEFAULT,
  payload: { style: "LEG_DEFAULT", neck: "leg/default.png" },
};
export const SET_STYLE_LEG_COOKIE = {
  type: ActionTypes.STYLE_SET_LEG_COOKIE,
  payload: { style: "LEG_COOKIE", neck: "leg/cookie.png" },
};
export const SET_STYLE_LEG_GAME_CONSOLE = {
  type: ActionTypes.STYLE_SET_LEG_GAME_CONSOLE,
  payload: { style: "LEG_GAME_CONSOLE", neck: "leg/game-console.png" },
};
export const SET_STYLE_LEG_TILT_BACKWARD = {
  type: ActionTypes.STYLE_SET_LEG_TILT_BACKWARD,
  payload: { style: "LEG_TILT_BACKWARD", neck: "leg/tilt-backward.png" },
};
export const SET_STYLE_LEG_TILT_FORWARD = {
  type: ActionTypes.STYLE_SET_LEG_TILT_FORWARD,
  payload: { style: "LEG_TILT_FORWARD", neck: "leg/tilt-forward.png" },
};
