import { appSchema, tableSchema } from '@nozbe/watermelondb';

const schema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'devices',
      columns: [
        { name: 'name', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'audioPath', type: 'string', isOptional: true },
        { name: 'project_id', type: 'string', isIndexed: true }, // Add the project_id foreign key
      ],
    }),
    tableSchema({
      name: 'projects',
      columns: [
        { name: 'title', type: 'string' },
      ],
    }),
  ],
});


export { schema };
