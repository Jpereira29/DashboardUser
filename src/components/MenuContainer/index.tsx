import { MenuNavigation } from "../MenuNavigation";
import { User } from "../User";
import { Container } from "./styles";

export function MenuContainer() {
    return (
        <Container>
            <User 
                name="Jorge Pereira"
                srcUrl="/images/user.png"
            />

            <div className="navigation">
                <MenuNavigation
                    logoSrc="/images/home.png"
                    name="Dashboard"
                />
            </div>
        </Container>
    )
}