import { ButtonAdd } from "../components/ButtonAdd";
import { InformationUser } from "../components/IformationUser";
import { Mideas } from "../components/Mideas";
import { welcome } from "../functions/welcome";
import { Container } from "../styles/Dashboard";

export default function Dashboard() {
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
                Jorge</span>
            </h3>

            <div className="informations-user">
                <InformationUser 
                    height={90}
                    width={350}
                    logo="/images/email.png"
                    text="jorgepereira29ele@gmail.com"
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
                <Mideas 
                    name="Linkedin"
                />
                <ButtonAdd />
            </div>
        </Container>

    )
}