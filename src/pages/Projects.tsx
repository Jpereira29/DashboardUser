import { ButtonAdd } from "../components/ButtonAdd";
import { Project } from "../components/Project";
import { Container } from "../styles/Projects";

export default function Projects() {
    return (
        <Container>
            <Project
                name="Project"
                description="deedd ahsbhb sbsahbahbs sybsshbhsb bshbshbsh"
                repositoryUrl="hhhhhh"
            />

            <Project
                name="Project"
                description="deedd ahsbhb sbsahbahbs sybsshbhsb bshbshbsh"
                repositoryUrl="hhhhhh"
            />

            <Project
                name="Project"
                description="deedd ahsbhb sbsahbahbs sybsshbhsb bshbshbsh"
                repositoryUrl="hhhhhh"
            />

            <div className="add-button">
                <ButtonAdd />
            </div>
        </Container>
    )
}