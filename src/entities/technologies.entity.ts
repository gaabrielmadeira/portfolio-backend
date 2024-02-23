import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import Project from "./project.entity";

@Entity("technologies")
class Technologies {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ length: 20 })
    name: string;

    @ManyToMany(() => Project, project => project.technologies)
    projects: Project[];
}

export default Technologies;