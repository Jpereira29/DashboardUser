import Image from "next/image";
import { Container } from "./styles";

type Props = {
    logoSrc: string
    name: string
}

export function MenuNavigation({ logoSrc, name }: Props) {
    return (
        <Container>
            <div className="logo">
                <Image alt={name} src={logoSrc} width={40} height={40} />
            </div>
            <div className="content">
                <p>{name}</p>
            </div>
        </Container>
    )
}