---
title: My experience at React Amsterdam 2019
date: "2019-05-06T23:46:37.121Z"
---

Just over a month ago I was fortunate enough to be able to attend [React Amsterdam](https://react.amsterdam/). Big thanks
to the tech team at [Crimson Education](https://crimsoneducation.org) for sending me all the way over from New Zealand!

As my first tech conference it was a fantastic event where I was able to learn from the best and meet some truely talented people.

I attended two workshops: **Advanced React with Kent C. Dodds** and **Modern React with Max Stoiber**. Both hugely beneficial in
learning patterns and techniques to make our apps back home a pleasure to work on.

# Overall themes
During the three days some overall themes came up time and time again. These are my observations about the general feeling towards these technologies.

## Hooks

No surprises here! Hooks are the most anticipated and talked about feature in the React community at the moment. They are a brilliant
way to break out our data and logic from components. We no longer need enormously nested trees with RenderProps and Hocs wrapping every `<div />`

> Classes and Redux are out.
> Hooks and context are in.

Is Redux really out?! Well maybe, nobody seems quite sure enough to decide one way or another. Time will certainly tell us. The consensus was
that the major problems it aimed to solve have been solved by tech that now exists out the box. This means going forward it will be far less advantageous than it once was.

The other major point was that **far too much state is put into Redux**. See how far you can get without it and you might be surprised!

> Don’t go re-writing everything to use hooks. Just new code

Even though the React team have [**no plans to remove classes from React**](https://reactjs.org/docs/hooks-faq.html#do-i-need-to-rewrite-all-my-class-components), it still seems as though
class components are on their way out. Something to keep in mind. Our team has started using hooks in new code and not one of us has yet to find a case where we've needed to revert back to using classes (yet!).
Embarking on a rewriting of your existing apps is a waste of time, however updating code as you touch it and using hooks in new code is a solid strategy moving forward.

3 years ago when React was gaining traction Dan released a tweet that said: [**Don't go re-writing everything**](https://twitter.com/dan_abramov/status/808770915584638976?s=20) in regards to using React. Fast forward 3 years into
the future and we're facing the same statement but in regards to hooks. 🤔

> Something

Hooks have some interesting rules around them
Only top level. No if statements, loops or conditionals
Every render, exact same hooks have to be called in the exact same way.


**Some tips / tricks**

* useReducer better when computing state from the inputs. Even if there are more than like 3 or 4 if its primitive then it might be better to continue to use setState.

* Gotcha alert!! Might be tempted to put whole {} into useState. But remember this.setState merges state whereas hooks just replace.

* When working with Context API, use “useContext” instead of the context consumer component

* In new react, Refs are not just for Dom nodes. "useRef" can actually be thought of as state that when it changes does not cause a re-render. Similar to class properties in Javascript.


### Apollo + GraphQL
GraphQL is currently taking over the world. And as the leader in the GraphQL space Apollo is the client
of choice. The tech stack I currently work with uses GraphQL without Apollo client and literally every
rection to this was:

>>>>> Insert meme here


### react-testing-library
This is one that came up a lot. Kent.C. Dodd's own **react-testing-library**. This library has taken the
frontend testing world by storm as the standard for rendering React components in our unit tests. It is
designed to be used in place of enzyme and spefically to avoid the problem of [Testing Implementation details](https://kentcdodds.com/blog/testing-implementation-details)


### Minor Observations
In addition to the three above, these are some more minor observations:

* Typescript and *styled-components* is very popular. Over 80% of hands shot up when asked who was using them.



## Other random tidbits


* "Don’t use momentJS” (https://github.com/you-dont-need/You-Dont-Need-Momentjs)

* It's very easy to use Redux way too much. Instead state should only exist where it is used. (https://kentcdodds.com/blog/application-state-management)

* If your component is single-use. Don’t bother with big patterns



## React Concurrent mode - Watch this space!

React concurrent mode is set to drop sometime this year. After that Suspense for data-fetching is also set to be released.

Prepare your team.

How suspense for data-fetching under the hood works
“Read” function from suspense API throws promise if data is not there
React suspense will catch the promise and show a loading state / fallback


# Thing's you can do in your code now

1. Use hooks! You won’t look back. (New code)

2. Use “React.StrictMode” where you can in the code. componentWill* methods are being deprecated don’t use them.
Use hooks and functional components instead and you never face this problem!
Use “React.StrictMode” where you can in the code
Remove componentWill*
String refs
findDOMNode
Legacy context API

3. Introduce React Error Boundaries (Spectrum does this on a per route basis)

4. Give “react-testing-library” a trial. Built with Jest in mind but can work with Mocha

5. React.lazy is super easy to use. You should use it.

6. Use the “eslint” plugin for hooks

7. Use component state as much as possible!

# Resources + Further Reading

* YouTube playlist with all talks (Including React Native): [React Amsterdam](https://www.youtube.com/playlist?list=PLNBNS7NRGKMHLTeH4qfD3F320GXfj97kc)

### My favourites

* [Refactoring React - Siddharth Kshetrapal](https://www.youtube.com/watch?v=2Dw8gA60d_k&list=PLNBNS7NRGKMHLTeH4qfD3F320GXfj97kc&index=4&t=0s)

* [Designing with React - Mark Dalgleish](https://www.youtube.com/watch?v=orPcyJMJh7Y&list=PLNBNS7NRGKMHLTeH4qfD3F320GXfj97kc&index=6&t=0s)

* [Tech regrets at Spectrum - Max Stoiber](https://www.youtube.com/watch?v=UC-bUkbuvZs&list=PLNBNS7NRGKMHLTeH4qfD3F320GXfj97kc&index=10&t=0s)

* [The GraphQL developer experience - Peggy Rayzis](https://www.youtube.com/watch?v=qBla-jgNKZc&list=PLNBNS7NRGKMHLTeH4qfD3F320GXfj97kc&index=21&t=0s)

### Further reading (stuff mentioned during the 3 days)

* [Minimal API surface area](https://www.youtube.com/watch?v=4anAwXYqLG8)

* [Optimized for change](https://overreacted.io/optimized-for-change/)

* [Write tests, not too many. Mostly integration](https://kentcdodds.com/blog/write-tests)
