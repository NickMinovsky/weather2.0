// duplicate validation
const isAdded = (list, cityName) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i].name === cityName) {
      return true;
    } else {
      return false;
    }
  }
};

export default isAdded;
