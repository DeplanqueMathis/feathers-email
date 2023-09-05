// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import { ObjectIdSchema } from '@feathersjs/typebox'
import { dataValidator, queryValidator } from '../../validators.js'
import { StringEnum } from '@feathersjs/typebox'


// Main data model schema
export const emailsSchema = Type.Object(
  {
    _id: ObjectIdSchema(),
    name: Type.String(),
    from: Type.String({ format: 'email' }),
    to: Type.String({ format: 'email' }),
    subject: Type.String(),
    text: Type.String(),
    html: Type.String(),
    status: StringEnum(['pending', 'complete', 'failed']),
    errorMessage: Type.String(),
  },
  { $id: 'Emails', additionalProperties: true }
)
export const emailsValidator = getValidator(emailsSchema, dataValidator)
export const emailsResolver = resolve({})

export const emailsExternalResolver = resolve({})

// Schema for creating new entries
export const emailsDataSchema = Type.Pick(emailsSchema, ['text', 'name', 'from'], {
  $id: 'EmailsData'
})
export const emailsDataValidator = getValidator(emailsDataSchema, dataValidator)
export const emailsDataResolver = resolve({})

// Schema for updating existing entries
export const emailsPatchSchema = Type.Partial(emailsSchema, {
  $id: 'EmailsPatch'
})
export const emailsPatchValidator = getValidator(emailsPatchSchema, dataValidator)
export const emailsPatchResolver = resolve({})

// Schema for allowed query properties
export const emailsQueryProperties = Type.Pick(emailsSchema, ['_id', 'text', 'name', 'from'])
export const emailsQuerySchema = Type.Intersect(
  [
    querySyntax(emailsQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: true })
  ],
  { additionalProperties: true }
)
export const emailsQueryValidator = getValidator(emailsQuerySchema, queryValidator)
export const emailsQueryResolver = resolve({})
