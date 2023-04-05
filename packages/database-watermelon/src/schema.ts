import { appSchema, tableSchema } from '@nozbe/watermelondb'

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'MyTable',
      columns: [
        { name: 'title', type: 'string' },
        { name: 'body', type: 'string' }
      ]
    }),
    tableSchema({
      name: 'userDetails',
      columns: [
        { name: 'email', type: 'string' },
        { name: 'password', type: 'string' },
        { name: 'token', type: 'string' }
      ]
    })
  ]
})
