import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 50px;
    margin: 1rem 0;
    
    .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: var(--white);
        margin-right: -30px;
        z-index: 1;
    }

    .content {
        width: 160px;
        height: 50px;
        border-radius: 0 30px 0 0;
        background: var(--purple);
        text-align: center;
        color: var(--white);
    }

    cursor: pointer;
    transition: all 0.5s;

    &:hover{
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
`