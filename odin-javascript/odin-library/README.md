# odin-library

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

- One of the problems was to uniquely identify each book to perform appropriate operations when a user interacts with the book. To solve this problem, a variable to store book id alongside a method incrementing said variable was declared. The incremented value is assigned to each book alongside other data entered by the user.
- Another hurdle which I am still facing is improving Code Design. I found that writing maintainable & extendable code is hard. To be able to improve the code design & making it extendable, I am learning about SOLID & DRY principles. In fact, one of the recent additions to codebase was data persistance using localdb, precisely, localStorage of the browser. I tried to follow the 'Dependency Inversion' principle here, my code doesn't rely on the underlying localStorage APIs directly. Instead, it relies on a LocalDBManager which wraps around the localStorage api. I know its overkill for such a small project, although, I have realized the importance of maintainable & extendable codebase. And, now, I want to develop good habits.


### Todo/Future Goals
- [ ] Refactoring the codebase, JS code is still a huge mess
- [ ] UI Improvements
- [ ] Backend to enable data persistance 
- [ ] Other features like Book count etc
- [ ] Perhaps, transforming this app into an eBook reader app using Electron later
- [x] Implement data persistance using localStorage API