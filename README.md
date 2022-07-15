# odin-calculator
Standard calculator with basic calculation functionality which calculates one pair of numbers at a time.
Supports showing equation in realtime

### Description
This is my solution to the [Calculator](https://www.theodinproject.com/lessons/foundations-calculator) problem of [The Odin Project](https://www.theodinproject.com/)

### Skills Required
- Intermediate knowledge of JavaScript, Data Structures & CSS
- Things like DOM manipulation, event listeners, conditionals, switch statements

### Reflection
This was probably the most challenging project of the foundation curriculum. Implementing a calculator sounds easy only.

The only part which posed any difficulty to me was making the calculator work, storing the numbers & operators & updating them.
This sounds easy, I know. Although, there are many other factors which are required to be taken in consideration

- How do you handle multiple 0s entered by user without any numbers around it?
- How do you figure out that the user has finished typing one of the two numbers? Both of the numbers?
- How do you know when to perform calculation on the pair?
- How do you allow the user to update their operator?
- How do you handle updates to the operator?
- How is the equation going to be displayed?
- How do you handle updating the equation when the user clears number(s) entered by mistake?

There were so many variables that my two function (performMath & showEquation) became a huge mess. And I have been refactoring them to reduce the complexity of the codebase. Although, my efforts have all gone in vain for now. And since I don't want to be stuck on a single project, I will be moving on & coming back to this project for fixing it.

### Todo/Future Goals
- [ ] Fix the clear()
- [ ] Add support for multi pair equation
- [ ] Add decimal calculation support
- [ ] Refactor & reduce complexity
Maybe more.