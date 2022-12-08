import Image from "next/image"
import { Project } from "../../types/Project"
import { Container } from "./styles"

export function Project({ title, description, repositoryUrl }: Project) {
    return (
        <Container>
            <Image className="code" alt="Code" src="/images/code.png" width={40} height={40} />
            <Image className="edit" alt="Edit" src="/images/edit.png" width={25} height={25} />
            <div>
                <h4>{title}</h4>
                <p>{description}</p>
                <a href={repositoryUrl}>Repositório</a>
            </div>
        </Container>
    )
}