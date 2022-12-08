import { useState } from "react";
import { ButtonAdd } from "../components/ButtonAdd";
import { Form } from "../components/Form";
import { InformationUser } from "../components/IformationUser";
import { Mideas } from "../components/Mideas";
import { welcome } from "../functions/welcome";
import { useDataMideas, useDataUser } from "../hooks/useData";
import { Container } from "../styles/Dashboard";
import { Midea } from "../types/Midea";
import { User } from "../types/User";

export default function Dashboard() {

    const { user } = useDataUser<User>("https://localhost:7212/api/Users/8")
    const { mideas } = useDataMideas<Midea>("https://localhost:7212/api/SocialMedia")

    const [ formMideaState, setFormMideaState ] = useState(false)

    return (
        <Container>
            <h3 style={{
                    color: "var(--gray)"
                }}
            >
            {welcome()} <span style={{
                color: "var(--orange)"
            }}
            >
                {user?.name}</span>
            </h3>

            <div className="informations-user">
                <InformationUser 
                    height={90}
                    width={350}
                    logo="/images/email.png"
                    text={user?.email}
                />

                <InformationUser 
                    height={200}
                    width={350}
                    logo="/images/info.png"
                    text="Olá, me chamo Jorge Pereira, sou um desenvolvedor web. 
                    Possuo conhecimento em OOP, programação funcional, JavaScript, TypeScript, C#, desenvolvimento de APIs com .NET, Entity Framework, e front-end com Vanilla JavaScript e frameworks como ReactJS e NextJS. Tenho interesse em sempre melhorar o meu código seja em estrutura quanto à performance. Também gosto muito de aprender coisas novas e não tenho dificuldades para assimilar tecnologias."
                />
            </div>
            <div>

                <Form
                    userId={user?.userId}
                    formMideaState={formMideaState}
                    setFormMideaState={setFormMideaState}
                />
                <span onClick={()=> setFormMideaState(true)}>
                    <ButtonAdd />
                </span>
            </div>
        </Container>

    )
}