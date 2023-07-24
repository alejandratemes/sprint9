import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  align-items: center;
  align-self:center;
  width: 60%;
  margin: 5em auto;

    img {
        width: 100%;
        max-width: 400px;
    }

    .product-details {
        /* Estilos para la columna de los detalles del producto */
        /* Puedes agregar más estilos aquí */
    }
    
    .favs {
        background-color: #F7DED8;
        color: #F28A6C;
        
    }

    .cart {
        background-color: #F28A6C;
        color: white;
    }
`;