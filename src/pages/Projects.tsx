import { ButtonAdd } from "../components/ButtonAdd";
import { Project } from "../components/Project";
import { useDataProjects } from "../hooks/useData";
import { Container } from "../styles/Projects";
import { Project as TypeProject } from "../types/Project";

export default function Projects() {

    const { projects } = useDataProjects<TypeProject>("https://localhost:7212/api/Projects")
    return (
        <Container>
            {projects?.map(project => (
                <Project
                    key={project.projectId}
                    projectId={project.projectId}
                    title={project.title}
                    description={project.description}
                    repositoryUrl={project.repositoryUrl}
                />
            ))}

            <div className="add-button">
                <ButtonAdd />
            </div>
        </Container>
    )
}