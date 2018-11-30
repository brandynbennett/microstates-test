import Person from './person';

export default class Infant extends Person {
  get fullName() {
    return `Baby ${this.firstName.state} ${this.lastName.state}`;
  }
}
