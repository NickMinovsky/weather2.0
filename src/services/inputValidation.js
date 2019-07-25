const isInputValid = input => {
  const re = /[a-zA-Z ]+/g;
  if (!re.test(input.key)) {
    return false;
  } else {
    return true;
  }
};

export default isInputValid;
