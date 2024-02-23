import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
import Technologies from "./technologies.entity";


@Entity("project")
class Project {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ length: 20 })
    name: string;

    @Column({ length: 200 })
    description: string;

    @ManyToMany(() => Technologies)
    @JoinTable()
    technologies: Technologies[];

    @Column()
    image: string;
}

export default Project;