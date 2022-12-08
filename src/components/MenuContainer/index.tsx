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
                    routeUrl="/Dashboard"
                />

                <MenuNavigation
                    logoSrc="/images/home.png"
                    name="Projects"
                    routeUrl="/Projects"
                />

                <MenuNavigation
                    logoSrc="/images/home.png"
                    name="Notificações"
                    routeUrl="Notifications"
                />
            </div>
        </Container>
    )
}
