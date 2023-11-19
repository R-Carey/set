import { Database, DatabaseAdapter, Model } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import { appSchema, tableSchema } from '@nozbe/watermelondb';

// Define your database schema
const schema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'devices',
      columns: [
        { name: 'title', type: 'string' },
        // Add other columns as needed
      ],
    }),
    // Add other tables as needed
  ],
});

// Define your models
class Device extends Model {
  static table = 'devices';
  static associations = {}; // Define any associations with other models

  // Define your model properties and relationships
  static columns = {
    title: { type: 'string' },
    // Add other columns as needed
  };
}

// Create the database adapter
const adapter: DatabaseAdapter = new SQLiteAdapter({
  schema,
});

// Create the database instance
const database: Database = new Database({
  adapter,
  modelClasses: [Device], // Add other model classes here
});

export default database;
