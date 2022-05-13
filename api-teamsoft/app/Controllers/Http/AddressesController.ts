import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Address from 'App/Models/Address'
import AdreessValidator from 'App/Validators/AddressValidator'
import axios from 'axios'

export default class AddressesController {
  public async index({ params }: HttpContextContract) {
    const address = await Address.query().where('clientId', params.id)
    return address
  }

  public async store({ request, params }: HttpContextContract) {
    const data = await request.validate(AdreessValidator)
    const searchCep = axios.get(` https://cep.awesomeapi.com.br/json/${data.cep}`)
    const latitude = (await searchCep).data.lat
    const longitude = (await searchCep).data.lng
    const client = params.id
    const address = await Address.create({
      clientId: client,
      latitude: latitude,
      longitude: longitude,
      ...data,
    })
    return address
  }

  public async show({ params }: HttpContextContract) {
    const address = await Address.findOrFail(params.key)
    return address
  }

  public async update({ request, params }: HttpContextContract) {
    const address = await Address.findOrFail(params.key)
    const data = request.all()
    address.merge(data)
    await address.save()
  }

  public async destroy({ params }: HttpContextContract) {
    const address = await Address.findOrFail(params.key)
    await address.delete()
  }
}
