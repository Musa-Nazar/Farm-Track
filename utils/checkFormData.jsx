function checkFormData(formData) {
  let isValid = true;
  for (const key in formData) {
    const isInputValid = formData[key] !== "";
    isValid = isInputValid && isValid;
  }

  return isValid;
}

export default checkFormData;
