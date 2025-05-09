import { useState, useReducer, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextArea from 'components/inputs/TextArea';
import TextInput from 'components/inputs/TextInput';
import LABELS from 'consts/labels';
import Button from 'components/buttons/Button';

import {
  StyledForm,
  StyledFormField,
  StyledSpinner,
  StyledSpinnerWrapper,
  StyledToastContainer,
} from './Form.style';
import { useFlipProvider } from '../FlipProvider';
import useFormValidation from './hooks/useFormValidation';
import { FORM_FIELDS, initialFormState } from './consts';
import formReducer, { resetFormState, setFormState, setFormSubmitting } from './formReducer';
import validateField from './validate.schema';
import useFormGoBack from './hooks/useFormGoBack';
import FormOverlay from './components/FormOverlay';
import FormSuccessMessage from './components/FormSuccessMessage';
import FormErrorMessage from './components/FormErrorMessage';
import FormOverlayButtons from './components/FormOverlayButtons';

export default function Form() {
  const [activeFields, setActiveFields] = useState<string[]>([]);
  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  const { setFlip } = useFlipProvider();

  useFormValidation(formState, activeFields, dispatch);

  const handleResetFormState = () => {
    setActiveFields([]);
    dispatch(resetFormState());
  };

  const onLeaveForm = () => {
    setFlip(false);
    handleResetFormState();
  };

  const { handleSetShowMessage, showMessage, setShowMessage } = useFormGoBack(formState, onLeaveForm);

  const handleOnChange = (name: string, value: string) => {
    setActiveFields(() => [name]);
    dispatch(setFormState(name, value));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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

    const errorField = FORM_FIELDS.some((field) => {
      const fieldValue = formState.form.fields[field as keyof typeof formState.form.fields].value;
      return validateField(fieldValue, field)?.length;
    });

    const formElement = e.target as HTMLFormElement;

    if (!errorField) {
      dispatch(setFormSubmitting());
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formElement, PUBLIC_KEY).then(
        () => {
          handleResetFormState();
          toast.success(<FormSuccessMessage />, {
            autoClose: 5000,
            position: 'top-center',
          });
        },
        (error) => {
          dispatch(setFormSubmitting(false));
          toast.error(<FormErrorMessage error={error} />, {
            autoClose: 5000,
            position: 'top-center',
          });
        },
      );
    }
  };

  const formOverlayLeave = showMessage && !formState.form.isSubmitting && (
    <FormOverlay message={LABELS.notififications.leaveForm}>
      <FormOverlayButtons
        setShowMessage={setShowMessage}
        leaveForm={() => {
          onLeaveForm();
          setShowMessage(false);
        }}
      />
    </FormOverlay>
  );

  const formOverlaySubmitting = formState.form.isSubmitting && (
    <FormOverlay message={LABELS.notififications.emailSubmitting}>
      <StyledSpinnerWrapper>
        <StyledSpinner />
      </StyledSpinnerWrapper>
    </FormOverlay>
  );

  return (
    <>
      {formOverlayLeave}
      {formOverlaySubmitting}
      <StyledForm>
        <form onSubmit={handleSubmit} data-testid="contact-form">
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
          <Button
            text={LABELS.buttons.submit}
            onClick={() => handleSubmit}
            dataTestid="button-submit"
          />
        </form>
        <Button
          text={LABELS.buttons.back}
          onClick={() => handleSetShowMessage()}
          bgDark
          dataTestid="button-back"
        />
        <StyledToastContainer />
      </StyledForm>
    </>
  );
}
