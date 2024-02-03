import LABELS from "../consts/labels";

export const validateField = (value: string, field: string) => {
  if (field === LABELS.form.name.field) {
    if (!value.length) {
      console.log(LABELS.form.name.error.empty)
      return LABELS.form.name.error.empty;
    } else if (value.length < 4 ) {
      return LABELS.form.name.error.atLeast;
    }
  }

  if (field === LABELS.form.email.field) {
    if (!value.length) {
      return LABELS.form.email.error.empty;
    } else if (!(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/).test(value)) {
      return LABELS.form.email.error.valid;
    }
  }

  if (field === LABELS.form.message.field) {
    if (!value.length) {
      return LABELS.form.message.error.empty;
    } else if (value.length < 15 ) {
      return LABELS.form.message.error.atLeast;
    } else if (value.length > 300 ) {
      return LABELS.form.message.error.maxLength;
    }
  }

  return null;
}