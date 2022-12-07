import Image from "next/image";
import Link from "next/link";
import { Container } from "./styles";

type Props = {
    logoSrc: string
    name: string
    routeUrl: string
}

export function MenuNavigation({ logoSrc, name, routeUrl }: Props) {
    return (
        <Link href={routeUrl}>
            <Container>
                <div className="logo">
                    <Image alt={name} src={logoSrc} width={40} height={40} />
                </div>
                <div className="content">
                    <p>{name}</p>
                </div>
            </Container>
        </Link>
    )
}