import Image from "next/image";
import { Container } from "./styles";

type Props = {
    srcUrl: string
    name: string
}

export function User({ srcUrl, name }: Props) {
    return (
        <Container>
            <div className="image-content">
                <Image alt="profiel" src={srcUrl} width={50} height={50} />
            </div>
            <h2>{name}</h2>
        </Container>
    )
}