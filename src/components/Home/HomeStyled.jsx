import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1em;
    margin: 5em 0em;
`;

export const Item = styled.div`
    display: flex;
    justify-content: center;
    width: 24%;
    margin-bottom: 20px;
    height: 35em;

    
    .link {
        text-decoration: none; 
        color: black; 
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    img {
        max-width: 25em;
        max-height: 25em;
    }

    h3, p {
        max-width: 17em;
        text-transform: uppercase;
        font-size: 0.8em;
        text-align: center;
    }
`;
