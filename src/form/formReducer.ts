import { IInitialFormState, initialFormState } from './consts';
import validateField from './validate.schema';

export const SET_FORM_STATE = 'SET_FORM_STATE';
export const RESET_FORM_STATE = 'RESET_FORM_STATE';
export const SET_FORM_SUBMITTING = 'SET_FORM_SUBMITTING';

export const setFormState = (name: string, value: string): IAction => ({
  type: SET_FORM_STATE,
  payload: { name, value },
});

export const resetFormState = (): IAction => ({
  type: RESET_FORM_STATE,
});

export const setFormSubmitting = (value: boolean = true): IAction => ({
  type: SET_FORM_SUBMITTING,
  payload: { value },
});

export interface IAction {
  type: typeof SET_FORM_STATE | typeof RESET_FORM_STATE | typeof SET_FORM_SUBMITTING;
  payload?: {
    name?: string;
    value: string | boolean;
  }
}

const formReducer = (state: IInitialFormState, action: IAction): IInitialFormState => {
  switch (action.type) {
    case SET_FORM_STATE: {
      if (action.payload && action.payload.name && typeof action.payload.value === 'string') {
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

    case SET_FORM_SUBMITTING: {
      if (action.payload && typeof action.payload.value === 'boolean') {
        return {
          ...state,
          form: {
            ...state.form,
            isSubmitting: action.payload.value,
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
