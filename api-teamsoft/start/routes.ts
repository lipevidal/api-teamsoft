/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/clients', 'ClientsController.index')
Route.post('/clients', 'ClientsController.store')
Route.get('/clients/:id', 'ClientsController.show')
Route.put('/clients/:id', 'ClientsController.update')
Route.delete('/clients/:id', 'ClientsController.destroy')
Route.get('/clients/:id/addresses', 'AddressesController.index')
Route.post('/clients/:id/addresses', 'AddressesController.store')
Route.get('/clients/:id/addresses/:key', 'AddressesController.show')
Route.put('/clients/:id/addresses/:key', 'AddressesController.update')
Route.delete('/clients/:id/addresses/:key', 'AddressesController.destroy')
