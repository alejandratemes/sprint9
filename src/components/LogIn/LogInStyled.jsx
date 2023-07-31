import styled from 'styled-components';
import backgroundImage from "../../img/fondo-login.png"
import backgroundImageMobile from "../../img/fondo-login-mobile.png"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;

  @media (max-width: 1500px) {
    background-image: url(${backgroundImageMobile});
    }

    p{
        color: white;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 6.5em;
        border: 2px solid #F5896D;
        border-radius: 8px;
        background-color: #F6DDD8;

        @media (max-width: 576px) {
            padding: 4em;
        }
    }

    input {
        width: 100%;
        padding: 1em;
        margin-bottom: 0.8em;
        border: 1px solid #F5896D;
        border-radius: 4px;
    }

    button {
        padding: 10px 20px;
        background-color: #F5896D;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
    }

    .link {
        color: #F5896D;
        text-decoration: none;
        margin-top: 1em;
    }

`;
