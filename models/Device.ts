// models/Device.ts
import { Model, Relation } from '@nozbe/watermelondb';
import { field, relation } from '@nozbe/watermelondb/decorators';
import Project from './Project';

export default class Device extends Model {
  static table = 'devices';
  static associations = {
    project: { type: 'belongs_to', key: 'project_id' },
  };

  @field('name') name!: string;
  @field('description') description!: string;
  @field('audioPath') audioPath?: string;
  @relation('projects', 'project_id') project!: Relation<Project>;
}
