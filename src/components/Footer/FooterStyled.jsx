import styled from 'styled-components';

export const Container = styled.nav`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #F0f0f0;
    padding: 8px 20px;

        ul {
            list-style: none;
            padding: 0;
            margin: 0 1em;
            display: flex;
            justify-content: space-between;
            align-items: center;

            li {
                margin: 0 10px;

                .link {
                    text-decoration: none;
                    color: black;
                    font-weight: bold;

                    &:active {
                        text-decoration: underline;
                }
            }
        }
`;