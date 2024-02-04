import { useState } from 'react';

import { IInitialFormState } from '../consts';

const useFormGoBack = (formState: IInitialFormState, onLeaveForm: () => void) => {
  const [showMessage, setShowMessage] = useState(false);

  const isFormDirty = () => {
    const { from_name, from_email, message } = formState.form.fields;

    if (from_name.value !== '' || from_email.value !== '' || message.value !== '') {
      return true;
    }
    return false;
  };

  const handleSetShowMessage = () => {
    if (isFormDirty()) {
      setShowMessage(true);
      return true;
    }

    setShowMessage(false);
    onLeaveForm();
    return false;
  };

  return { showMessage, setShowMessage, handleSetShowMessage };
};

export default useFormGoBack;
