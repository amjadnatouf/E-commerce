import actiontypes from "../actiontypes";

const initState = {
  attributes: [],
};

const attributeReducer = (state = initState, action) => {
  switch (action.type) {
    case actiontypes.attributes.setAttributes: {
      const itemRef = state.attributes.find(
        (item) => item.index === action.index && item.name === action.name
      );

      const attributeItem = {
        name: action.name,
        value: action.payload.value,
        item_id: action.payload.id,
        index: action.index,
        type: action._type,
      };

      if (itemRef) {
        if (itemRef.name === action.name) {
          itemRef.value = action.payload.value;
          itemRef.item_id = action.payload.id;
          itemRef.name = action.name;
          itemRef.index = action.index;
          itemRef.type = action._type;
        } else state.attributes = [...state.attributes, attributeItem];
      } else {
        state.attributes = [...state.attributes, attributeItem];
      }

      localStorage.setItem("attributes", JSON.stringify(state.attributes));

      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};

export default attributeReducer;
