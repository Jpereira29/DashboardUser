import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 340px;
    height: 150px;
    background: var(--blue-900);
    color: var(--white);
    border-radius: 10px;
    padding: 0.2rem 0.4rem;
    margin-right: 2rem;

    div {
        margin: 0 2.2rem;
    }

    .code {
        position: absolute;
    }

    .edit {
        float: right;
        margin-top: -30px;
        cursor: pointer;
        transition: all 0.5s;

        &:hover{
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
        }
    }

    p {
        font-size: 12px;
        height: 35px;
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 90px;
        height: 24px;
        border: 1px solid #FFFFFF;
        border-radius: 20px;
        font-size: 12px;
        font-weight: bold;
        float: right;
        bottom: 0;


        &:hover{
            background: var(--white);
            color: var(--blue-900);
            transition: 0.5s;
        }
    }
`