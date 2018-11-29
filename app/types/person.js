export default class Person {
  firstName = String;
  lastName = String;

  get fullName() {
    return `${this.firstName.state} ${this.lastName.state}`;
  }

  changeIdentity(firstName, lastName) {
    return this
      .firstName.set(firstName)
      .lastName.set(lastName);
  }
}
