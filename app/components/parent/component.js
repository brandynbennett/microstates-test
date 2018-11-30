import Component from '@ember/component';
import { Store, create } from '@microstates/ember';
import Infant from 'microstates-test/types/infant';
import { set } from '@ember/object';

export default Component.extend({
  tagName: '',

  didReceiveAttrs() {
    let person = Store(create(Infant), nextState => {
      return set(this, 'person', nextState);
    });
    set(this, 'person', person);
  },
});
