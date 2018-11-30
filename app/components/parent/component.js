import Component from '@ember/component';
import { Store, create } from '@microstates/ember';
import Person from 'microstates-test/types/person';
import { set } from '@ember/object';

export default Component.extend({
  tagName: '',

  didReceiveAttrs() {
    let person = Store(create(Person), nextState => {
      return set(this, 'person', nextState);
    });
    set(this, 'person', person);
  },
});
