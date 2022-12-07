import Image from "next/image";
import { NoNotification } from "../components/NoNotification";
import { Container } from "../styles/Notifications";

export default function Notifications() {
    return (
        <Container>
            <NoNotification />
        </Container>
    )
}