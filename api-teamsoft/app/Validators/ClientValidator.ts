import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ClientValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    cnpj: schema.number([rules.required()]),
    corporate_name: schema.string({ trim: true }, [rules.required()]),
    contact_name: schema.string({ trim: true }, [rules.required()]),
    telephone: schema.number([rules.required()]),
  })

  public messages = {}
}
