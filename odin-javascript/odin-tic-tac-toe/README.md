# odin-tic-tac-toe

### Description
This is my solution to the [Tic-Tac-Toe](https://www.theodinproject.com/lessons/node-path-javascript-tic-tac-toe) project of [The Odin Project](https://www.theodinproject.com/)

### Skills Required
- Intermediate/Advanced knowledge of JavaScript, design patterns like Module, Factory Functions & JS module system

### Reflection
This was a challenging project. And to make things more challenging, I decided to write this whole app using JS only. Everything is generated Client-Side, & the only thing HTML file contains is the usual Boilerplate.

After developing an app solely using vanilla JS, I understand why Frameworks like ReactJS are so popular. DOM manipulation when markup is already there is quite easy, at least in ES6, however... creating the whole webpage structure using vanilla JS alone.... Better use JSX or write HTML. You will save tons of time & avoid a lot of boilerplate code.

All in all this was a great project to learn a lot of important concept like Factory functions, module patters, module system as well other coding practices like encapsulating functionality from the outside world.
I also learned a lot about private & public scope from this. Which is a good thing, since I have tried limiting my global scoped variables

Challenges Faced:

- First challenge before even starting the project was to properly break down the app concept. What objects am I gonna need? What each object will do? Should one functionality be a part of X object or Y object or both? etc Using a basic Kanban board helped out a lot.
After deciding the MVP, the hunt to object creation started... halfway through I realized that some functionality would better be a part of X object over Y. There were several refactors along the way as well implementing any new API methods which I might need.

- Second challenge... was more of like a me problem. Since, I wanted to only use JS for everything. Coupling the UI with data posed another problem, since I didn't know how to create a proper link... That's when I discovered (thanks to a fellow Odin-member) the MVC pattern. It 
literally made the whole app make sense, I was able to divide the app into components & work from there. 
Each component is either a Factory or a revealing Module which handles rendering & updating the UI, as well updating the internal Data Structures.

- To make my life easier & not have a heck of code in a single JS file, I looked up the JS Module System introduced in ES6--the import & export module. It helped in keeping everything nice & separate.

- Third challenge was providing visual feedback to the user. Like which player turns it is as well as highlighting the board cells when there is a win or tie. It required a quite bit of refactoring the Game Object, especially near the switchPlayer method because that's when we change the current active player.
I had to lookup async/await because I didn't want to switch to the next player as soon as a match is won but since JS is async, it was not an easy task. Found a solution on SO & created a utility function called sleep which delays executing a piece of code without blocking the main thread completely.

- Fourth challenge, Round system. I think this was hard because of how messy my codebase became. It isn't easily extendable despite all of my efforts to make it extendable. Anyway. I was somehow able to get the round system working

### Todo/Future Goals
- [ ] Refactoring the codebase. Despite all of my efforts to make it as maintainable as possible JS codebase is still a huge mess
- [ ] Implementing Game AI to support Player-vs-AI & AI-vs-AI modes
- [ ] CSS generated X & O
- [ ] UI/UX Improvements