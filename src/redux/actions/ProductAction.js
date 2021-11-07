import { Constants } from "../constants/Constants";
import { api } from "../../json/BaseUrl";
const fetchItemDetails = (id) => async (dispatch) => {
  const response = await api
    .get(`/shirts1/${id}`)
    .catch((error) => console.log(error));

  dispatch({
    type: Constants.productItem,
    payload: response.data,
  });
};

export default fetchItemDetails;
