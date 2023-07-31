import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/fakeStoreService";
import { Container } from "./ProductInfoStyled"
import { useCartContext } from "../Cart/CartContext";

const ProductInfo = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  // Obtener el contexto del carrito utilizando el hook useCartContext
  const { cartItems, setCartItems } = useCartContext();

  useEffect(() => {
    // Obtener la información del producto por su ID cuando el componente se monta
    getProductById(productId)
      .then(data => setProduct(data))
      .catch(error => console.error("Error fetching product:", error));
  }, [productId]);

  // Si product aún está cargando, puedes mostrar un mensaje de carga o componente de carga
  if (!product) {
    return <div>Cargando...</div>;
  }

   // Función para agregar el producto al carrito
   const addToCart = () => {
    // Verificar si el producto ya está en el carrito
    const existingProduct = cartItems.find(item => item.id === product.id);

    if (existingProduct) {
      // Si el producto ya está en el carrito, aumentar la cantidad en 1
      setCartItems(prevItems => prevItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      // Si el producto no está en el carrito, agregarlo con una cantidad de 1
      setCartItems(prevItems => [...prevItems, { ...product, quantity: 1 }]);
    }
  };

  // Aquí tienes la información detallada del producto en el objeto "product"
  return (
    <Container>
      <img src={product.image} alt={product.title}/>
      <div className="product-details">
        <h2>{product.title}</h2>
        <p>Precio: ${product.price}</p>
        <p>Descripción: {product.description}</p>
        <p>Categoría: {product.category}</p>
        <p>Rating: {product.rating.rate} &#11088; de {product.rating.count} reviews</p>
        <button className="cart" onClick={addToCart}>Agregar al carrito</button>
      </div>
    </Container>
  );
};

export default ProductInfo;