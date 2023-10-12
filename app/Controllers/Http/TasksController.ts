import Task from 'App/Models/Task'
import View from '@ioc:Adonis/Core/View'


export default class TasksController {
  public async index() {
    const task = await Task.all()
    const html = await View.render('index',{ task: task})
    return html
  }

  public async addTask({request, response}){
    const data = request.body()
    const task = new Task()
    await task
    .fill(data)
    .save()
    response.redirect().toRoute('TasksController.index')

  }

  public async delete({request, response}){
    const data = request.params('id')
    const task = await Task.findOrFail(data.id)
    await task.delete()
    response.redirect().toRoute('TasksController.index')
  }

  public async update({request, response}){
    const id = request.body().id
    const status = request.body().status
    const task = await Task.findOrFail(id)
    task.status = status
    await task.save()
    response.redirect().toRoute('TasksController.index')
  }
  
}
