import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 230px;
    height: 230px;
    background: transparent;

    .image-content{
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--gray);
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }

    h2 {
        color: var(--gray);
        font-size: 20px;
    }
`