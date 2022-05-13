import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AdreessValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    street: schema.string({ trim: true }),
    number: schema.string({ trim: true }, [rules.regex(/^[0-9]+$/)]),
    district: schema.string({ trim: true }),
    city: schema.string({ trim: true }),
    state: schema.string({ trim: true }),
    cep: schema.string({ trim: true }, [
      rules.minLength(8),
      rules.maxLength(8),
      rules.regex(/^[0-9]+$/),
    ]),
  })

  public messages = {
    minLength: 'The array must have minimum of {{ options.minLength }} items',
    maxLength: 'The array can contain maximum of {{ options.maxLength }} items',
  }
}
