// input validation (english letters only)
const isInputValid = event => {
  const re = /[a-zA-Z ]+/g;
  if (!re.test(event.key)) {
    event.preventDefault();
    console.log('error!');
  } else {
    console.log('WORKSSS');
  }
};

export default isInputValid;
