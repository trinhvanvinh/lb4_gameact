import {Getter, inject} from '@loopback/core';
import {
  BelongsToAccessor, DefaultCrudRepository,


  repository
} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Character, Weapon} from '../models';
import {CharacterRepository} from './character.repository';

export class WeaponRepository extends DefaultCrudRepository<
  Weapon,
  typeof Weapon.prototype.id
  > {
  public readonly character: BelongsToAccessor<
    Character,
    typeof Weapon.prototype.id
  >;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDbDataSource,
    @repository.getter('CharacterRepository')
    protected characterRepositoryGetter: Getter<CharacterRepository>,
  ) {
    super(Weapon, dataSource);

    this.character = this.createBelongsToAccessorFor('character', characterRepositoryGetter);
  }
}
