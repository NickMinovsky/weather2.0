// duplicate validation
const isAdded = (list, cityName) => {
  return list.find(city => city.name == cityName);
};

export default isAdded;
