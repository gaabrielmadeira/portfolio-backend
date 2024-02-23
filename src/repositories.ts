import { Project, Technologies } from "./entities";
import { AppDataSource } from "./data-source";

const projectRepo = AppDataSource.getRepository(Project)
const technologieRepo = AppDataSource.getRepository(Technologies)

export {
    projectRepo,
    technologieRepo
}