import Axios from "axios";

export const registerAddress = (apelido, idUsuario, address, city, postalCode, state, numero, bairro) => async (dispatch) => {
    dispatch({ payload:{apelido, idUsuario, address, city, postalCode, state, numero, bairro} });
    try {
      const { data } = await Axios.post('/api/endereco/cadastrar', {
        apelido, idUsuario, address, city, postalCode, state, numero, bairro
      });
    } catch (error) {
      dispatch({
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };