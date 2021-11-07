import { Constants } from "../constants/Constants";
// import axios from "axios";
import { api } from "../../json/BaseUrl";

const fetchShirtsData = () => async (dispatch) => {
  const response = await api
    .get("/shirts1")
    .catch((error) => console.log(error));

  dispatch({
    type: Constants.shirtsData,
    payload: response.data,
  });
};
export default fetchShirtsData;
