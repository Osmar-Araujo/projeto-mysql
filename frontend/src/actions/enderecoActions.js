import Axios from "axios";
import { ENDERECO_REGISTER_REQUEST, ENDERECO_REGISTER_SUCCESS, ENDERECO_REGISTER_FAIL } from "../constants/enderecoConstants";

export const registerAddress = (apelido, idUsuario, address, city, postalCode, state, numero, bairro) => async (dispatch) => {
    dispatch({ type: ENDERECO_REGISTER_REQUEST, payload:{apelido, idUsuario, address, city, postalCode, state, numero, bairro} });
    try {
      const { data } = await Axios.post('/api/enderecos/cadastrar', {
        apelido, idUsuario, address, city, postalCode, state, numero, bairro
      });
      dispatch({ type: ENDERECO_REGISTER_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: ENDERECO_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };