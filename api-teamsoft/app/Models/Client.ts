import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Client extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public cnpj: number

  @column()
  public corporateName: string

  @column()
  public contactName: string

  @column()
  public telephone: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
