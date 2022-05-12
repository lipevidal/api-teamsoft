import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AdreessValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    street: schema.string({ trim: true }, [rules.required()]),
    number: schema.number([rules.required()]),
    district: schema.string({ trim: true }, [rules.required()]),
    city: schema.string({ trim: true }, [rules.required()]),
    state: schema.string({ trim: true }, [rules.required()]),
    cep: schema.number([rules.required()]),
  })

  public messages = {}
}
