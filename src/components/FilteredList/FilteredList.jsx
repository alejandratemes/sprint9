import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProductsByCategory } from "../../services/fakeStoreService";
import { useParams } from "react-router-dom";
import { Container, Item } from "./FilteredListStyled"

const FilteredList = () => {
    const { categoryName } = useParams();
    const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsByCategory(categoryName)
      .then(data => setProducts(data))
      .catch(error => console.error("Error fetching products by category:", error));
  }, [categoryName]);

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

export default FilteredList;