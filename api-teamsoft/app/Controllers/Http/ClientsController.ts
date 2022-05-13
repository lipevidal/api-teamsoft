import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from 'App/Models/Client'
import ClientValidator from 'App/Validators/ClientValidator'

export default class ClientsController {
  public async index({}: HttpContextContract) {
    const clients = await Client.all()
    return clients
  }

  public async store({ request, response }: HttpContextContract) {
    const data = await request.validate(ClientValidator)
    const client = await Client.create(data)
    return response.created({ client })
  }

  public async show({ params }: HttpContextContract) {
    const client = await Client.findOrFail(params.id)
    return client
  }

  public async update({ request, params }: HttpContextContract) {
    const client = await Client.findOrFail(params.id)
    const data = request.all()
    client.merge(data)
    await client.save()
  }

  public async destroy({ params }: HttpContextContract) {
    const client = await Client.findOrFail(params.id)
    await client.delete()
  }
}
