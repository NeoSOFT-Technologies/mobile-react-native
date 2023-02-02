import { appSchema, tableSchema } from '@nozbe/watermelondb'

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name:"MyTable",
      columns:[
        {name:'title',type:'string'},
        {name:'body',type:'string'}
      ]
    })
  ]
})
