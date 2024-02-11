import { IInitialFormState, initialFormState } from './consts';
import validateField from './validate.schema';

export const SET_FORM_STATE = 'SET_FORM_STATE';
export const RESET_FORM_STATE = 'RESET_FORM_STATE';

export interface IAction {
  type: 'SET_FORM_STATE' | 'RESET_FORM_STATE';
  payload?: {
    name: string;
    value: string;
  }
}

const formReducer = (state: IInitialFormState, action: IAction): IInitialFormState => {
  switch (action.type) {
    case SET_FORM_STATE: {
      if (action.payload) {
        return {
          ...state,
          form: {
            ...state.form,
            fields: {
              ...state.form.fields,
              [action.payload.name]: {
                value: action.payload.value,
                error: validateField(action.payload.value, action.payload.name),
              },
            },
          },
        };
      }

      return state;
    }

    case RESET_FORM_STATE: {
      return initialFormState;
    }

    default:
      return state;
  }
};

export default formReducer;
