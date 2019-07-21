import { getDataPending, getDataSuccess, getDataError } from "../store/actions";

const API_KEY = "dab15c856a2d47f388293819190107";

const getData = term => {
  return dispatch => {
    dispatch(getDataPending());
    fetch(
      `http://api.apixu.com/v1/forecast.json?key=${API_KEY}&q=${term}&days=5`
    )
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(getDataSuccess(res));
        console.log(res);
        return res;
      })
      .catch(error => {
        dispatch(getDataError(error));
      });
  };
};

export default getData;
