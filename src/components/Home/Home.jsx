import { Link } from "react-router-dom";
import { getAllProducts } from "../../services/fakeStoreService";
import React, { useEffect, useState } from "react";
import { Container, Item } from "./HomeStyled"

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // Obtenemos el listado de productos cuando el componente se monta
    getAllProducts()
      .then(data => setProducts(data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);
  return (
    <Container>
      {products.map(product => (
        <Item>
          <div key={product.id}>
              <Link to={`/product/${product.id}`} className="link">
                <img src={product.image} alt={product.title}/>
                <h3>{product.title}</h3>
                <p>€{product.price}</p>
              </Link>
          </div>
        </Item>
      ))}
    </Container>
  );
};

export default Home;