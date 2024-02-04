import LABELS from '../consts/labels';

export interface IInitialFormState {
  form: {
    fields: {
      from_name: {
        value: string,
        error: null,
      },
      from_email: {
        value: string,
        error: null,
      },
      message: {
        value: string,
        error: null,
      },
    }
  }
}

export const initialFormState: IInitialFormState = {
  form: {
    fields: {
      from_name: {
        value: '',
        error: null,
      },
      from_email: {
        value: '',
        error: null,
      },
      message: {
        value: '',
        error: null,
      },
    },
  },
};

export const FORM_FIELDS = [
  LABELS.form.name.field,
  LABELS.form.email.field,
  LABELS.form.message.field,
];
