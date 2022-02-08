import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterTablePubAddCepAndNumber1644335707422
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "pubs",

      new TableColumn({
        name: "cep",

        type: "varchar",

        isNullable: true,
      })
    );
    await queryRunner.addColumn(
      "pubs",

      new TableColumn({
        name: "number",

        type: "varchar",

        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("pubs", "CEP");
    await queryRunner.dropColumn("pubs", "number");
  }
}
