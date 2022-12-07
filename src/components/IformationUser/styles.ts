import styled from "styled-components";

export const Container = styled.div<{width: number, height: number}>`
    display: flex;
    position: relative;
    align-items: center;
    width: ${prop => prop.width}px;
    height: ${prop => prop.height}px;
    background: var(--white);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 0.25rem;
    margin: 0 1.4rem 0 0;

    img {
        top: 0.5rem;
        position: absolute;
        margin: 0 0.8rem;
    }

    p {
        color: var(--gray);
        font-size: 12px;
        margin: 0 3rem;
        text-align: justify;
    }
`