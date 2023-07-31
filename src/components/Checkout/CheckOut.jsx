import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "./CheckOutStyled";

const Checkout = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [shippingAddress, setShippingAddress] = useState("");

  // Lógica para manejar el pago (simulación de éxito)
  const handlePayment = (e) => {
    e.preventDefault();
    // Simulación de proceso de pago exitoso
    // En este ejemplo, simplemente establecemos el estado de paymentSuccess a true
    setPaymentSuccess(true);
  };

  // Función para manejar el cambio en el input de dirección de envío
  const handleShippingAddressChange = (e) => {
    setShippingAddress(e.target.value);
  };
    
  return (
    <Container>
      {paymentSuccess ? (
        <p>Pago realizado con éxito</p>
      ) : (
        <form onSubmit={handlePayment}>
          <h2>Checkout</h2>
          {/* Simulación de formulario de pago */}
          <label htmlFor="cardNumber">Número de tarjeta:</label>
          <input type="text" id="cardNumber" required />

          <label htmlFor="expiryDate">Fecha de expiración:</label>
          <input type="text" id="expiryDate" required />

          <label htmlFor="cvv">CVV:</label>
          <input type="text" id="cvv" required />

          {/* Input para la dirección de envío */}
          <label htmlFor="shippingAddress">Dirección de envío:</label>
          <input
            type="text"
            id="shippingAddress"
            value={shippingAddress}
            onChange={handleShippingAddressChange}
            required
          />
          <button type="submit">Pagar</button>
          <Link to="/home" className="link">Volver a la tienda</Link>
        </form>
      )}
    </Container>
  );
};

export default Checkout;