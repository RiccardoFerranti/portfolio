import { useCallback, useEffect } from "react";

import { SET_FORM_STATE } from "../form/formReducer";
import { IInitialFormState } from "../form/consts";

const useFormValidation = (formState: IInitialFormState, activeFields: string[] | null, dispatch: any) => {
  const formFieldsStringhified = JSON.stringify(formState.form.fields);

  const validatedFormState = useCallback((fields: string[]) => {
    fields.forEach((activeField: string) => {
      dispatch({
        type: SET_FORM_STATE,
        payload: { 
          value: formState.form.fields[activeField as keyof typeof formState.form.fields].value,
          name: activeField,
        }
      });
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formFieldsStringhified, dispatch]);

  useEffect(() => {
    if (activeFields?.length) {
      validatedFormState(activeFields)
    } 
  }, [activeFields, validatedFormState]);
};

export default useFormValidation;
