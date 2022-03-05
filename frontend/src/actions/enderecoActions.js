import Axios from "axios";
import { END_REGISTER_FAIL, END_REGISTER_REQUEST, END_REGISTER_SUCCESS } from "../constants/endConstants"


export const registerAddress = (apelido, idUsuario, address, city, postalCode, state, numero, bairro) => async (dispatch) => {
  dispatch({ type: END_REGISTER_REQUEST, payload: { apelido, idUsuario, address, city, postalCode, state, numero, bairro } });
  try {
    const { data } = await Axios.post('/api/enderecos/cadastrar', {
      apelido, idUsuario, address, city, postalCode, state, numero, bairro
    });
    dispatch({ type: END_REGISTER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: END_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
