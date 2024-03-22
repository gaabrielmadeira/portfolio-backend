import { AppDataSource } from "./data-source";
import { Project, Technologies } from "./entities";

const projectRepo = AppDataSource.getRepository(Project)
const technologieRepo = AppDataSource.getRepository(Technologies)

export {
    projectRepo,
    technologieRepo
};