import { projectRepo } from "../repositories";


const createProject = async (payload: any): Promise<any> => {
    const project: any = projectRepo.create(payload);
    await projectRepo.save(project);
  
    return projectSchema.parse(project)
};

export { createProject };