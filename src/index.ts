import Person from './person';


const root: HTMLElement | null = document.getElementById('app');

const person = new Person('Hello, TypeScript!');
person.sayHello(root);