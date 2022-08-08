# odin-signup-form

### Description
This is my solution to the [Sign-up Form](https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-sign-up-form) problem of [The Odin Project](https://www.theodinproject.com/)

### Skills Required
- Intermediate knowledge of JavaScript, Data Structures & CSS
- Things like DOM manipulation, event listeners, conditionals, object literals

### Reflection
This was a great project by far. The course does take quite a long detour before throwing a project at you, but when it does, it makes sure you are using everything you were taught.

- Main issue I had (still have) was to find a way to provide feedback to user without breaking the website design. I tried many ways but still its not perfect
- This was the first time I had trouble with CSS specificity & inheritance, my input border color & span color troubled me a lot when I tried applying them using JS they weren't changing because turns out border color do not inherit from their parent & I only wanted to apply color in one go. That's where CSS custom properties saved my arse. I created a utility class called error & overwrote the actual property being applied on password label. then added the class using JS to specific labels
- Another thing I did was to use object literal for storing user passwords to perform client side checking, I am not entirely sure if it would have been better to use separate variables for this? Or is my method correct or not?

### Todo/Future Goals
- [ ] Adding more password validity checks, currently it only checks for similarity
- [ ] Finding a way to convey feedback to the user without breaking the design of the website