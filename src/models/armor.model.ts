import {belongsTo, Entity, model, property} from '@loopback/repository';
import {v4 as uuid} from 'uuid';
import {Character} from './character.model';

@model({settings: {"strict": false}})
export class Armor extends Entity {
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
  defence: number;

  @belongsTo(() => Character)
  characterId: number;

  constructor(data?: Partial<Armor>) {
    super(data);
  }
}
