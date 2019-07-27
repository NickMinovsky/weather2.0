const isInputValid = input => {
  const re = /[a-zA-Z ]+/g;
  if (!re.test(input)) {
    return false;
  } else {
    return true;
  }
};

export default isInputValid;
