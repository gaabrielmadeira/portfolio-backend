import { MigrationInterface, QueryRunner } from "typeorm";

export class Firstmigration1708662696931 implements MigrationInterface {
    name = 'Firstmigration1708662696931'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "project" ("id" SERIAL NOT NULL, "name" character varying(20) NOT NULL, "description" character varying(200) NOT NULL, "image" character varying NOT NULL, CONSTRAINT "PK_4d68b1358bb5b766d3e78f32f57" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "technologies" ("id" SERIAL NOT NULL, "name" character varying(20) NOT NULL, CONSTRAINT "PK_9a97465b79568f00becacdd4e4a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "project_technologies_technologies" ("projectId" integer NOT NULL, "technologiesId" integer NOT NULL, CONSTRAINT "PK_598802d7761dafb450628a84cde" PRIMARY KEY ("projectId", "technologiesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_478991f034e24b386e8e8dcc09" ON "project_technologies_technologies" ("projectId") `);
        await queryRunner.query(`CREATE INDEX "IDX_16bd4b8408fa58731395022a4a" ON "project_technologies_technologies" ("technologiesId") `);
        await queryRunner.query(`ALTER TABLE "project_technologies_technologies" ADD CONSTRAINT "FK_478991f034e24b386e8e8dcc090" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "project_technologies_technologies" ADD CONSTRAINT "FK_16bd4b8408fa58731395022a4a5" FOREIGN KEY ("technologiesId") REFERENCES "technologies"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "project_technologies_technologies" DROP CONSTRAINT "FK_16bd4b8408fa58731395022a4a5"`);
        await queryRunner.query(`ALTER TABLE "project_technologies_technologies" DROP CONSTRAINT "FK_478991f034e24b386e8e8dcc090"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_16bd4b8408fa58731395022a4a"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_478991f034e24b386e8e8dcc09"`);
        await queryRunner.query(`DROP TABLE "project_technologies_technologies"`);
        await queryRunner.query(`DROP TABLE "technologies"`);
        await queryRunner.query(`DROP TABLE "project"`);
    }

}
