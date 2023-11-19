// models/Project.ts
import { Model, Relation } from '@nozbe/watermelondb';
import { field, relation } from '@nozbe/watermelondb/decorators';
import { children } from '@nozbe/watermelondb/decorators/relations';
import Device from './Device';

export default class Project extends Model {
  static table = 'projects';
  static associations = {
    devices: { type: 'has_many', foreignKey: 'project_id' },
  };

  @field('title') title!: string;
  @children('devices') devices!: Relation<Device>;
}
