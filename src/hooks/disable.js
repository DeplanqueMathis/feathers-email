import { MethodNotAllowed } from '@feathersjs/errors'

export const disable = () => {
  throw new MethodNotAllowed('Route is disabled')
}
