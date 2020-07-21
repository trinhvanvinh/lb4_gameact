import {belongsTo, Entity, model, property} from '@loopback/repository';
import {v4 as uuid} from 'uuid';
import {Character} from './character.model';

@model({settings: {"strict": false}})
export class Skill extends Entity {
  @property({
    type: 'string',
    id: true,
    //add this line
    default: () => uuid(),
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    required: true,
  })
  attack: number;

  @property({
    type: 'number',
    required: true,
  })
  cost: number;

  @belongsTo(() => Character)
  characterId: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Skill>) {
    super(data);
  }
}
