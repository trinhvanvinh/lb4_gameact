import {Getter, inject} from '@loopback/core';
import {
  BelongsToAccessor, DefaultCrudRepository,


  repository
} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Character, Skill} from '../models';
import {CharacterRepository} from './character.repository';

export class SkillRepository extends DefaultCrudRepository<
  Skill,
  typeof Skill.prototype.id
  > {
  public readonly character: BelongsToAccessor<
    Character,
    typeof Skill.prototype.id
  >;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDbDataSource,
    @repository.getter('CharacterRepository')
    protected characterRepositoryGetter: Getter<CharacterRepository>,
  ) {
    super(Skill, dataSource);

    this.character = this.createBelongsToAccessorFor('character', characterRepositoryGetter);
  }
}
