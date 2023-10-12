import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Task from 'App/Models/Task'


export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Task.createMany([
      {
        title: "analisis",
        status: "complated"
      },
      {
        title: "design",
        status: "in progress",
      },
      {
        title: "coding",
        status: "uncomplete",
      },
      {
        title: "testing",
        status: "uncomplate",
      }
    ])
  }
}
