import LABELS from 'consts/labels';
import { IInitialFormState } from 'form/consts';
import formReducer, { RESET_FORM_STATE, SET_FORM_STATE } from 'form/formReducer';

describe('formReducer', () => {
  // Define initial state for testing
  const initialState: IInitialFormState = {
    form: {
      fields: {
        from_name: { value: '', error: null },
        from_email: { value: '', error: null },
        message: { value: '', error: null },
      },
    },
  };

  it('should handle SET_FORM_STATE action correctly to set `from_name` value', () => {
    const action = {
      type: SET_FORM_STATE,
      payload: { name: 'from_name', value: 'John Doe' },
    };

    const newState = formReducer(initialState, action);

    expect(newState.form.fields.from_name.value).toBe('John Doe');
    expect(newState.form.fields.from_name.error).toBeNull();
  });

  it('should handle SET_FORM_STATE action correctly to set `from_email` value', () => {
    const action = {
      type: SET_FORM_STATE,
      payload: { name: 'from_email', value: 'johndoe@test.it' },
    };

    const newState = formReducer(initialState, action);

    expect(newState.form.fields.from_email.value).toBe('johndoe@test.it');
    expect(newState.form.fields.from_email.error).toBeNull();
  });

  it('should handle SET_FORM_STATE action correctly to set `message` value', () => {
    const action = {
      type: SET_FORM_STATE,
      payload: { name: 'message', value: 'test message form' },
    };

    const newState = formReducer(initialState, action);

    expect(newState.form.fields.message.value).toBe('test message form');
    expect(newState.form.fields.message.error).toBeNull();
  });

  it('should handle SET_FORM_STATE action correctly and set `from_name` wrongly throwing the error'
  + '`Name cannot be empty`', () => {
    const action = {
      type: SET_FORM_STATE,
      payload: { name: 'from_name', value: '' },
    };

    const newState = formReducer(initialState, action);

    expect(newState.form.fields.from_name.value).toBe('');
    expect(newState.form.fields.from_name.error).toBe(LABELS.form.name.error.empty);
  });

  it('should handle SET_FORM_STATE action correctly and set `from_name` wrongly throwing the error'
  + '`Name has to be at least 3 characters`', () => {
    const action = {
      type: SET_FORM_STATE,
      payload: { name: 'from_name', value: '123' },
    };

    const newState = formReducer(initialState, action);

    expect(newState.form.fields.from_name.value).toBe('123');
    expect(newState.form.fields.from_name.error).toBe(LABELS.form.name.error.atLeast);
  });

  it('should handle SET_FORM_STATE action correctly and set `from_email` wrongly throwing the error'
  + '`Email cannot be empty`', () => {
    const action = {
      type: SET_FORM_STATE,
      payload: { name: 'from_email', value: '' },
    };

    const newState = formReducer(initialState, action);

    expect(newState.form.fields.from_email.value).toBe('');
    expect(newState.form.fields.from_email.error).toBe(LABELS.form.email.error.empty);
  });

  it('should handle SET_FORM_STATE action correctly and set `from_email` wrongly throwing the error'
  + '`Email has to be valid`', () => {
    const action = {
      type: SET_FORM_STATE,
      payload: { name: 'from_email', value: 'johndoetest.it' },
    };

    const newState = formReducer(initialState, action);

    expect(newState.form.fields.from_email.value).toBe('johndoetest.it');
    expect(newState.form.fields.from_email.error).toBe(LABELS.form.email.error.valid);
  });

  it('should handle SET_FORM_STATE action correctly and set `message` wrongly throwing the error'
  + '`Message cannot be empty`', () => {
    const action = {
      type: SET_FORM_STATE,
      payload: { name: 'message', value: '' },
    };

    const newState = formReducer(initialState, action);

    expect(newState.form.fields.message.value).toBe('');
    expect(newState.form.fields.message.error).toBe(LABELS.form.message.error.empty);
  });

  it('should handle SET_FORM_STATE action correctly and set `message` wrongly throwing the error'
  + '`Message has to be at least 15 characters`', () => {
    const action = {
      type: SET_FORM_STATE,
      payload: { name: 'message', value: 'test' },
    };

    const newState = formReducer(initialState, action);

    expect(newState.form.fields.message.value).toBe('test');
    expect(newState.form.fields.message.error).toBe(LABELS.form.message.error.atLeast);
  });

  it('should handle SET_FORM_STATE action correctly and set `message` wrongly throwing the error'
  + '`Message has to be maximum 300 characters`', () => {
    const message = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the'
    + 'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make'
    + 'a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.'
    + 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the)';

    const action = {
      type: SET_FORM_STATE,
      payload: {
        name: 'message',
        value: message,
      },
    };

    const newState = formReducer(initialState, action);

    expect(newState.form.fields.message.value).toBe(message);
    expect(newState.form.fields.message.error).toBe(LABELS.form.message.error.maxLength);
  });

  it('should handle RESET_FORM_STATE action correctly', () => {
    const resetState = {
      form: {
        fields: {
          name: { value: 'John Doe', error: null },
          email: { value: 'john@example.com', error: null },
          message: { value: 'Test message', error: null },
        },
      },
    };

    const action = {
      type: RESET_FORM_STATE,
      payload: resetState,
    };

    const newState = formReducer(initialState, action);
    expect(newState).toEqual(resetState);
  });
});
