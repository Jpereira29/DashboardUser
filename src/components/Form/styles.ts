import styled from "styled-components";

export const Container = styled.div<{formMideaState: boolean}>`
    display: ${props=> props.formMideaState ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: #08134188;
    z-index: 10;
    
    form {
        position: relative;
        background: var(--white);
        max-width: 400px;
        height: 260px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        img {
            position: absolute;
            top: 0;
            right: 0;
            transition: all 0.5s;

            &:hover{
                -webkit-transform: scale(1.2);
                transform: scale(1.2);
            }
        }
        input {
            display: block;
            width: 300px;
            height: 40px;
            margin: 0.5rem 1.2rem;
            border-radius: 10px;
            padding: 0 0.8rem;
            border: 2px solid var(--blue-900);

            &:focus {
                box-shadow: 0 0 0 0;
                outline: 0;
                border: 2px solid var(--purple);
            }
        }

        span {
            font-size: 12px;
            color: #EE152277;
            font-weight: bold;
            margin: -10px auto 0 1.4rem;
        }

        button {
            cursor: pointer;
            width: 120px;
            height: 40px;
            border-radius: 50px;
            font-weight: bold;
            margin-top: 0.6rem;
            background: var(--purple);
            color: var(--white);
            border-color: var(--white);

            transition: all 0.5s;

            &:hover{
                -webkit-transform: scale(1.05);
                transform: scale(1.05);
            }
        }
    }
`