import { useState, useReducer } from 'react';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import TextArea from 'components/inputs/TextArea';
import TextInput from 'components/inputs/TextInput';
import LABELS from 'consts/labels';
import Button from 'components/buttons/Button';

import { StyledForm, StyledFormField, StyledToastContainer } from './Form.style';
import { useFlipProvider } from '../FlipProvider';
import useFormValidation from './hooks/useFormValidation';
import { FORM_FIELDS, initialFormState } from './consts';
import formReducer, { RESET_FORM_STATE, SET_FORM_STATE } from './formReducer';
import validateField from './validate.schema';
import useFormGoBack from './hooks/useFormGoBack';
import FormOverlay from './components/FormOverlay';

export default function Form() {
  const [activeFields, setActiveFields] = useState<string[]>([]);
  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  const { setFlip } = useFlipProvider();

  useFormValidation(formState, activeFields, dispatch);

  const resetFormState = () => {
    setActiveFields([]);

    dispatch({ type: RESET_FORM_STATE });
  };

  const onLeaveForm = () => {
    setFlip(false);
    resetFormState();
  };

  const { handleSetShowMessage, showMessage, setShowMessage } = useFormGoBack(formState, onLeaveForm);

  const setFormState = (name: string, value: string) => {
    dispatch({
      type: SET_FORM_STATE,
      payload: { value, name },
    });
  };

  const handleOnChange = (name: string, value: string) => {
    setActiveFields(() => [name]);
    setFormState(name, value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

    if (typeof SERVICE_ID === 'undefined'
      || typeof TEMPLATE_ID === 'undefined'
      || typeof PUBLIC_KEY === 'undefined'
    ) {
      return;
    }

    setActiveFields(FORM_FIELDS);

    const error = FORM_FIELDS.some((field) => {
      const fieldValue = formState.form.fields[field as keyof typeof formState.form.fields].value;
      return validateField(fieldValue, field)?.length;
    });

    if (!error) {
      console.log('submit');

      // emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      //   (result) => {
      //     console.log(result.text);
      // toast.success(<FormSuccessMessage />, {
      //   autoClose: 5000,
      //   position: 'top-center',
      // });
      //     resetFormState();
      //   },
      //   (error) => {
      // toast.error(LABELS.notififications.emailError, {
      //   position: "top-center"
      // });
      //     console.log(error.text);
      // toast.error(<FormErrorMessage />, {
      //   autoClose: 5000,
      //   position: 'top-center',
      // });
      //   }
      // );
    }
    // resetFormState();
  };

  console.log('activeFields', activeFields);

  return (
    <>
      {showMessage
        && (
        <FormOverlay
          message={LABELS.notififications.leaveForm}
          setShowMessage={setShowMessage}
          leaveForm={() => {
            onLeaveForm();
            setShowMessage(false);
          }}
        />
        )}
      <StyledForm>
        <form onSubmit={handleSubmit}>
          <StyledFormField>
            <TextInput
              name={LABELS.form.name.field}
              placeholder={LABELS.form.name.placeholder}
              label={LABELS.form.name.label}
              value={formState.form.fields.from_name.value}
              handleOnChange={handleOnChange}
              error={formState.form.fields.from_name.error}
            />
          </StyledFormField>
          <StyledFormField>
            <TextInput
              name={LABELS.form.email.field}
              placeholder={LABELS.form.email.placeholder}
              label={LABELS.form.email.label}
              value={formState.form.fields.from_email.value}
              handleOnChange={handleOnChange}
              error={formState.form.fields.from_email.error}
            />
          </StyledFormField>
          <StyledFormField>
            <TextArea
              name={LABELS.form.message.field}
              placeholder={LABELS.form.message.placeholder}
              label={LABELS.form.message.label}
              value={formState.form.fields.message.value}
              handleOnChange={handleOnChange}
              error={formState.form.fields.message.error}
            />
          </StyledFormField>
          <Button text={LABELS.buttons.submit} onClick={() => handleSubmit} />
        </form>
        <Button
          text={LABELS.buttons.back}
          onClick={() => handleSetShowMessage()}
          bgDark
        />
        <StyledToastContainer />
      </StyledForm>
    </>
  );
}
