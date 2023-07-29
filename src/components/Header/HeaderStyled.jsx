import styled from "styled-components";

export const Container = styled.div`
    max-width: 100%; 
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #F28A6C;
    padding: 1em;
    
        .logo {
            height: 4em;
            @media (max-width: 768px) {
                max-height: 3em;
            }
            @media (max-width: 576px) {
                max-height: 2em;
                max-width: 17em;
            }
        }

        img {
            height: 1.5em;
        }

        div {
            display: flex;
            gap: 0.5em;
        }

        .navbar {
            margin-right: 4em;

            @media (max-width: 768px) {
                margin-right: 1em;
            }
        }

        .web-title {
            display: block;
        }

        h5{
            margin: 0 1em;
        }

        .link {
            color: #F28A6C;
            text-decoration: none;
            font-size: 16px;
        }
`;