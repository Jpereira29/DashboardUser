import styled from "styled-components";

export const Container = styled.div<{width: number, height: number}>`
    width: ${prop => prop.width}px;
    height: ${prop => prop.height}px;
    background: var(--white);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 0.25rem;


`