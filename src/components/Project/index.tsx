import Image from "next/image"
import { Container } from "./styles"

type Props = {
    name: string
    description: string
    repositoryUrl: string
}

export function Project({ name, description, repositoryUrl }: Props) {
    return (
        <Container>
            <Image className="code" alt="Code" src="/images/code.png" width={40} height={40} />
            <Image className="edit" alt="Edit" src="/images/edit.png" width={25} height={25} />
            <div>
                <h4>{name}</h4>
                <p>{description}</p>
                <a href={repositoryUrl}>Repositório</a>
            </div>
        </Container>
    )
}