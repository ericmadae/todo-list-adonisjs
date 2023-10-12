import Route from '@ioc:Adonis/Core/Route'


Route.get('/', 'TasksController.index')
Route.post('/addTask', 'TasksController.addTask')
Route.get('/delete/:id', 'TasksController.delete')
Route.post('/updateTask', 'TasksController.update')

