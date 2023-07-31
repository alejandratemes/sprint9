import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1em;
    margin: 5em 0em;

    @media (max-width: 1220px) {
        margin: 3em 0em 8em 0em;
        gap: 5em;
    }
`;

export const Item = styled.div`
    display: flex;
    justify-content: center;
    width: 24%;
    height: 35em;
    margin-bottom: 1em;

    @media (max-width: 1220px) {
        width: 35%;
        height: 25em;
    }
    @media (max-width: 768px) {
        width: 100%;
    }

    .link {
        text-decoration: none; 
        color: black; 
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    img {
        max-width: 90%;
        max-height: 25em;

        @media (max-width: 768px) {
            max-height: 17em;
        }
        @media (max-width: 576px) {
            max-height: 20em;
            max-width: 25em;
        }
    }

    h3, p {
        max-width: 17em;
        text-transform: uppercase;
        font-size: 0.8em;
        text-align: center;
    }


`;
