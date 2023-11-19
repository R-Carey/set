import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import { schema } from './schema'; // Create this file in the next step
import Device from '../models/Device'; // Create this file in the next step

const adapter = new SQLiteAdapter({
  schema,
  dbName: 'settingsprojectdb', // Replace with your preferred database name
});

const database = new Database({
  adapter,
  modelClasses: [Device], // Add more models if needed
});

export { database };
