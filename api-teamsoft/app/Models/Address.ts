import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Client from 'App/Models/Client'

export default class Address extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public street: string

  @column()
  public number: number

  @column()
  public complement: string

  @column()
  public district: string

  @column()
  public city: string

  @column()
  public state: string

  @column()
  public cep: number

  @column()
  public latitude: string

  @column()
  public longitude: string

  @column()
  public clientId: string

  @belongsTo(() => Client)
  public client: BelongsTo<typeof Client>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

// table
//   .integer('clients_id')
//   .unsigned()
//   .references('id')
//   .inTable('clients')
//   .onUpdate('CASCADE')
//   .onDelete('CASCADE')

// /**
//  * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
//  */
// table.timestamp('created_at', { useTz: true })
// table.timestamp('updated_at', { useTz: true })
