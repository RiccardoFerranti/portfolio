import { useState, useReducer } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import TextInput from "../components/inputs/TextInput";
import TextArea from "../components/inputs/TextArea";
import LABELS from "../consts/labels";
import Button from "../components/buttons/Button";
import { StyledForm, StyledFormField } from "./Form.style";
import { useFlipProvider } from "../FlipProvider";
import useFormValidation from "../hooks/useFormValidation";
import { FORM_FIELDS, initialFormState } from "./consts";
import formReducer, { RESET_FORM_STATE, SET_FORM_STATE } from "./formReducer";
import { validateField } from "./utils";

export default function Form() {
  const [activeFields, setActiveFields] = useState<string[]>([]);
  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  const { setFlip } = useFlipProvider();

  useFormValidation(formState, activeFields, dispatch);

  const resetFormState = () => {
    setActiveFields([]);

    dispatch({ 
      type: RESET_FORM_STATE,
      payload: initialFormState
    });
  }
 
  const setFormState = (name: string, value: string) => {
    dispatch({
      type: SET_FORM_STATE,
      payload: { value, name }
    });
  }

  const handleOnChange = (name: string, value: string) => { 
    setActiveFields(() =>  [name]);
    setFormState(name, value)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

    if (
      typeof SERVICE_ID === "undefined" ||
      typeof TEMPLATE_ID === "undefined" ||
      typeof PUBLIC_KEY === "undefined"
    ) {
      return;
    }

    setActiveFields(FORM_FIELDS)

    const error = FORM_FIELDS.some((field) => {
      const fieldValue = formState.form.fields[field].value;
      return validateField(fieldValue, field)?.length;
    })

    if(!error) {
      console.log('submit')
      // toast.success(LABELS.notififications.emailSuccess, {
      //   position: "top-center"
      // });
      // emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      //   (result) => {
      //     console.log(result.text);
      //     // Swal.fire({
      //     //   icon: ‘success',
      //     //   title: ‘Message Sent Successfully'
      //     // })
      //     resetFormState();
      //   },
      //   (error) => {
        // toast.error(LABELS.notififications.emailError, {
        //   position: "top-center"
        // });
      //     console.log(error.text);
      //     // Swal.fire({
      //     //   icon: ‘error',
      //     //   title: ‘Ooops, something went wrong',
      //     //   text: error.text,
      //     // })
      //   }
      // );
    }
    // resetFormState();
  };

  console.log('activeFields', activeFields)
  return (
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
        onClick={() => {
          resetFormState();
          setFlip(false);
        }}
        bgDark
      />
      <ToastContainer />
    </StyledForm>
  );
}
