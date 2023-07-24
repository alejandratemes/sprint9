import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/fakeStoreService";
import { Container } from "./ProductInfoStyled"

const ProductInfo = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

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

  // Aquí tienes la información detallada del producto en el objeto "product"
  return (
    <Container>
      <img src={product.image} alt={product.title}/>
      <div className="product-details">
        <h2>{product.title}</h2>
        <p>Precio: ${product.price}</p>
        <p>Descripción: {product.description}</p>
        <p>Categoría: {product.category}</p>
        <p>Rating: {product.rating.rate} de {product.rating.count} reviews</p>
        {/* Agregar más información sobre el producto aquí */}
        <button className="favs">Agregar a Favoritos</button>
        <button className="cart">Agregar al carrito</button>
        {/* Otros elementos del formulario para la cantidad, etc. */}
      </div>
    </Container>
  );
};

export default ProductInfo;