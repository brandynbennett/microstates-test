import Component from '@ember/component';
import { Store, create } from 'microstates';
import Person from 'microstates-test/types/person';
import { set } from '@ember/object';

export default Component.extend({
  tagName: '',

  init() {
    this._super(...arguments);

    let person = Store(create(Person), nextState => set(this, 'person', nextState));
    set(this, person, 'person');
  },
});
