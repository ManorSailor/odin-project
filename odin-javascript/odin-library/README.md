# odin-dashboard

### Description
This is my solution to the [Library](https://www.theodinproject.com/lessons/node-path-javascript-library) project of [The Odin Project](https://www.theodinproject.com/)

### Skills Required
- Intermediate knowledge of JavaScript, OOP & CSS
- An ability to go through & read docs on MDN. Reading required for using the SubmitEventAPI

### Reflection
This project provided a nice opportunity to utilize several of JS specific features like Prototypes & Prototypal Inheritance, Constructors &the new & this keyword.

This is also one of the projects where I focused on creating a plan around the whole app instead of jumping straight to coding. 
One of the biggest hurdles was to find a way to design my app in such a way that it is extendable all while ensuring my MVP time limit.

Challenges Faced

- The biggest challenge was to find way uniquely identifying each book when the user toggles or deletes it Instead of relying on the book object array index, I simply declared a variable which increments itself whenever a new book is initialized. The incremented value is assigned to each book alongside other data entered by the user
- I realized how powerful constructors can be & how much of boilerplate can be reduced using them
- Although, the app doesn't store any of the added books yet, support for that will be added in the future


### Todo/Future Goals
- [ ] Refactoring the codebase, JS code is still a huge mess
- [ ] UI Improvements
- [ ] Backend to enable data persistance 
- [ ] Other features like Book count etc
- [ ] Perhaps, transforming this app into an eBook reader app using Electron later