import { Any, create } from '@microstates/ember';

export default class Person {
  firstName = String;
  lastName = String;
  age = Number;
  category = Any;

  initialize(initialValues = {}) {
    if (this.category.state) {
      return create(this.category.state, initialValues);
    }

    return this;
  }

  get fullName() {
    return `${this.firstName.state} ${this.lastName.state}`;
  }

  changeIdentity(firstName, lastName) {
    return this
      .firstName.set(firstName)
      .lastName.set(lastName);
  }
}
