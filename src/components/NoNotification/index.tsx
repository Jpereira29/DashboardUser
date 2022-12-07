import Image from "next/image";
import { Container } from "./styles";

export function NoNotification() {
    return (
        <Container>
            <h2>Nenhuma notificação</h2>
            <Image alt="sino" src="/images/sino.png" width={30} height={30} />
        </Container>
    )
}