export const emailsPath = 'emails'

export const emailsMethods = ['find', 'get', 'create', 'patch', 'remove']

export const emailsClient = (client) => {
  const connection = client.get('connection')

  client.use(emailsPath, connection.service(emailsPath), {
    methods: emailsMethods
  })
}
