import Image from "next/image"
import { Container } from "./styles"

type Props = {
    width: number
    height: number
    logo: string
    text?: string
}

export function InformationUser({ width, height, logo, text }: Props) {
    return (
        <Container
            width={width}
            height={height}
        >
            <Image alt="" src={logo} width={30} height={30} />
            <p>{text}</p>
        </Container>
    )
}