export const setColor = (color) => {
  return {
    type: "SET_COLOR",
    color: color,
  };
};

export const setTxtColor = (color) => {
  return {
    type: "SET_TXTCOLOR",
    color: color,
  };
};

export const setButton = (id) => {
  return {
    type: "SET_BUTTON",
    id: id,
  };
};

export const setFont = (font) => {
  return {
    type: "SET_FONT",
    font: font,
  };
};

export const setText = (text) => {
  return {
    type: "SET_TEXT",
    text: text,
  };
};

export const setModalWin = (isOpen) => {
  return {
    type: "SET_MODAL_WIN",
    isOpen: isOpen,
  };
};

export const setFinalCover = (img) => {
  return {
    type: "SET_FINALCOVER",
    img: img,
  };
};

export const setBImage = (img) => {
  return {
    type: "SET_BIMAGE",
    img: img,
  };
};
