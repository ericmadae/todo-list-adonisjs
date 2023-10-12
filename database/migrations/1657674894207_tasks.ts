import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'tasks'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title', 50)
      table.string('status', 50)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
