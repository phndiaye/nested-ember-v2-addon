import Model, { attr } from '@ember-data/model';

export default class Stream extends Model {
  @attr('string')
  name;
}
