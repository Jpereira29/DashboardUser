import Image from "next/image";
import { Container } from "./styles";

export function ButtonAdd() {
    return (
        <Container>
            <Image alt="+" src="/images/add.png" width={25} height={25} />
        </Container>
    )
}