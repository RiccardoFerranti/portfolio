import { validateField } from "./utils";

export const SET_FORM_STATE = "SET_FORM_STATE";
export const RESET_FORM_STATE = "RESET_FORM_STATE";

const formReducer = (state: any, action: any) => {
  switch (action.type) {
    case SET_FORM_STATE: {
      return {
        ...state,
        form: {
          ...state.form,
          fields: {
            ...state.form.fields,
            [action.payload.name]: {
              value: action.payload.value,
              error: validateField(action.payload.value, action.payload.name)
            },
          },
        },
      };
    }

    case RESET_FORM_STATE: {
      console.log(action.payload)
      return action.payload
    }

    default:
      return state;
  }
};

export default formReducer;
