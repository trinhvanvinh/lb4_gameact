import {Getter, inject} from '@loopback/core';
import {
  BelongsToAccessor, DefaultCrudRepository,


  repository
} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Armor, Character} from '../models';
import {CharacterRepository} from './character.repository';

export class ArmorRepository extends DefaultCrudRepository<
  Armor,
  typeof Armor.prototype.id
  > {
  public readonly character: BelongsToAccessor<
    Character,
    typeof Armor.prototype.id
  >;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDbDataSource,
    @repository.getter('CharacterRepository')
    protected characterRepositoryGetter: Getter<CharacterRepository>,
  ) {
    super(Armor, dataSource);

    this.character = this.createBelongsToAccessorFor('character', characterRepositoryGetter);
  }
}
