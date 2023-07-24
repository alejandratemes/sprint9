import styled from "styled-components";

export const Container = styled.div`
    max-width: 100%; 
    margin: 0 auto; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #F7DED8;
    color: white;
    padding: 2em;
    
        .h1 {
            text-decoration: none;
            color: #F28A6C;
            font-size: 1em;
            margin: 0;
        }

        div {
            display: flex;
            gap: 1em;
        }

        .link {
            color: white; 
            text-decoration: none;
            font-size: 16px;
            margin-left: 10px;
        }
`;