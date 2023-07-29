import React, { useState, useEffect } from "react";
import { useCartContext } from "./CartContext";
import { Link } from "react-router-dom";
/*import { Container, CartItem } from "./CartStyled";*/

const Cart = () => {
  const { cartItems, setCartItems } = useCartContext();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Calcula el precio total de la compra
    const totalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setTotalPrice(totalPrice);
  }, [cartItems]);

  const increaseQuantity = (id) => {
    // Incrementa la cantidad del producto en el carrito
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (id) => {
    // Decrementa la cantidad del producto en el carrito, pero no menos de 1
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
    );
    setCartItems(updatedCartItems);
  };

  const removeItem = (id) => {
    // Elimina un producto del carrito
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío. ¡Agrega productos!</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="item-details">
                <h3>{item.title}</h3>
                <p>Precio: ${item.price}</p>
                <p>Cantidad: {item.quantity}</p>
                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                  <button onClick={() => removeItem(item.id)}>Eliminar</button>
                </div>
              </div>
            </div>
          ))}
          <p>Total: ${totalPrice}</p>
          <Link to="/checkout">
            <button>Finalizar Compra</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
