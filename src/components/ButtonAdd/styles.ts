import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.6rem;
    width: 60px;
    height: 60px;
    font-size: 50px;
    font-weight: bold;
    border-radius: 50%;
    color: var(--white);
    background: var(--purple);
    cursor: pointer;
    transition: all 0.5s;

    &:hover{
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
`