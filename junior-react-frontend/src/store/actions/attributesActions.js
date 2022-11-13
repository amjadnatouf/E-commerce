import actiontypes from "../actiontypes";

export const setAttributes = (name, type, item, index) => {
  return {
    type: actiontypes.attributes.setAttributes,
    name,
    _type: type,
    payload: item,
    index,
  };
};
