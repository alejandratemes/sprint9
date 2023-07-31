import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5em;
  align-items: center;
  height: 100vh;

  p{
    color: #F5896D;
  }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 5em 10em;
        border: 2px solid #F5896D;
        border-radius: 8px;
        background-color: #F6DDD8;
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
        color: #F28A6C;
        text-decoration: none;
        font-size: 16px;
        margin-top: 1em;
    }
`;