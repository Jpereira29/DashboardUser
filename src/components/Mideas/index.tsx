import { Container } from "./styles"

type Props = {
    name: string
}
export function Mideas({ name }: Props) {
    return (
        <Container>
            <h3>{name}</h3>
        </Container>
    )
}