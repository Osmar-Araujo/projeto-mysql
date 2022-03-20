import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from "../actions/cartActions";
import { registerAddress } from "../actions/enderecoActions";
import CheckoutSteps from "../components/checkoutSteps/CheckoutSteps";

export default function ShippingAddressScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const cart = useSelector(state => state.cart);
  const { shippingAddress } = cart;

  if (!userInfo) {
    props.history.push('/signin');
  };

  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [apelido, setApelido] = useState(shippingAddress.apelido);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [state, setState] = useState(shippingAddress.state);
  const [numero, setNumero] = useState(shippingAddress.numero);
  const [bairro, setBairro] = useState(shippingAddress.bairro);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const idUsuario = userInfo.id;

    dispatch(saveShippingAddress({ apelido, fullName, idUsuario, address, city, postalCode, state, numero, bairro }));
    props.history.push('/payment');

    dispatch(registerAddress(apelido, idUsuario, address, city, postalCode, state, numero, bairro));
  }

  /*
  const{setValue} = useForm();
  const checkCEP = (e) =>{
    const cep = e.target.value.replace(/\D/g,'');
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
    setValue('address', data.logradouro);
    setValue('city', data.city);
    setValue('postalCode', data.cep);
    setValue('state', data.uf);
    setFocus('numero')
    });
  }
  */

  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Endereço de Envio</h1>
        </div>
        <div>
          <label htmlFor="fullName">Nome Completo</label>
          <input
            type="text"
            id="fullName"
            placeholder="Entre com seu nome completo"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)} required
          />
        </div>
        <div>
          <label htmlFor="apelido">Maneira de identificar o endereço</label>
          <input
            type="text"
            id="apelido"
            placeholder="Ex: Minha casa, Casa da minha mãe, Casa da sogra, etc..."
            value={apelido}
            onChange={(e) => setApelido(e.target.value)} required
          />
        </div>
        <div>
          <label htmlFor="postalCode">CEP</label>
          <input
            type="text"
            id="postalCode"
            placeholder="Entre com o CEP"
            value={postalCode}
            //onBlur={checkCEP}
            onChange={(e) => setPostalCode(e.target.value)} required
          />
        </div>
        <div>
          <label htmlFor="address">Logradouro</label>
          <input
            type="text"
            id="address"
            placeholder="Entre com o seu endereço"
            value={address}
            onChange={(e) => setAddress(e.target.value)} required
          />
        </div>
        <div>
          <label htmlFor="numero">Número</label>
          <input
            type="text"
            id="numero"
            placeholder="Entre com o número da residência"
            value={numero}
            onChange={(e) => setNumero(e.target.value)} required
          />
        </div>
        <div>
          <label htmlFor="bairro">Bairro</label>
          <input
            type="text"
            id="bairro"
            placeholder="Entre com o bairro da residência"
            value={bairro}
            onChange={(e) => setBairro(e.target.value)} required
          />
        </div>
        <div>
          <label htmlFor="city">Cidade</label>
          <input
            type="text"
            id="city"
            placeholder="Entre com a cidade"
            value={city}
            onChange={(e) => setCity(e.target.value)} required
          />
        </div>
        <div>
          <label htmlFor="state">Estado (UF)</label>
          <input
            type="text"
            id="state"
            placeholder="Entre com o estado onde mora"
            value={state}
            onChange={(e) => setState(e.target.value)} required
          />
        </div>
        <div>
          <label />
          <button className="primary" type="submit">Continuar</button>
        </div>
      </form>
    </div>
  );
}
