import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ClientValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    cnpj: schema.string({ trim: true }, [
      rules.minLength(14),
      rules.maxLength(14),
      rules.regex(/^[0-9]+$/),
    ]),
    corporate_name: schema.string({ trim: true }),
    contact_name: schema.string({ trim: true }),
    telephone: schema.string({ trim: true }, [
      rules.minLength(10),
      rules.maxLength(11),
      rules.regex(/^[0-9]+$/),
    ]),
  })

  public messages = {}
}
