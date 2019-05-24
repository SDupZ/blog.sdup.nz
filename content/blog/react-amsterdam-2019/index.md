---
title: My experience at React Amsterdam 2019
date: "2019-05-24T23:46:37.121Z"
description: In April 2019 I attended React Amsterdam all the way from New Zealand. It was three days of non-stop React with a huge focus on the newly released React Hooks!
---

![React amsterdam cover](https://scontent.fakl2-1.fna.fbcdn.net/v/t1.0-9/57210703_864886970528065_7262220962261630976_o.jpg?_nc_cat=109&_nc_ht=scontent.fakl2-1.fna&oh=94925d66f9a923392b7a1995cb062e65&oe=5D60B89A)

Just over a month ago I was fortunate enough to be able to attend [React Amsterdam](https://react.amsterdam/). Big thanks
to the tech team at [Crimson Education](https://crimsoneducation.org) for sending me all the way over from New Zealand!

As my first tech conference it was a fantastic event where I was able to learn from the best and meet some truely talented people.

I attended two workshops: **Advanced React with Kent C. Dodds** and **Modern React with Max Stoiber**. Both hugely beneficial in
learning patterns and techniques to make our apps back home a pleasure to work on.

The whole conference was jam packed with an enormous amount of information. Far too much for one post, so I've cherry picked only a handful of topics
to include here.

# Overall themes
During the three days some overall themes came up time and time again. These are my observations about the general feeling towards these technologies.

## Hooks

No surprises here! Hooks are the most anticipated and talked about feature in the React community at the moment. They are a brilliant
way to break out our data and logic from components. We no longer need enormously nested trees with RenderProps and Hocs wrapping every `<div />`  🎉

> Classes and Redux are out.
> Hooks and context are in.

Is Redux really out?! Well maybe, nobody seems quite sure enough to decide one way or another. Time will certainly tell us. The consensus was
that the major problems it aimed to solve have been solved by tech that now exists out the box (Context API, Hooks, react-cache - coming soon). This means going forward it will be far less advantageous than it once was.

> Don’t go re-writing everything to use hooks. Just new code

Even though the React team have [**no plans to remove classes from React**](https://reactjs.org/docs/hooks-faq.html#do-i-need-to-rewrite-all-my-class-components), it still seems as though
class components are on their way out. Definitely something to keep in mind. Our team has started using hooks in new code and not one of us has yet to find a case where we've needed to revert back to using classes (yet!).
Embarking on a rewrite of your existing apps is a waste of time, however updating code as you touch it and using hooks in new code is a solid strategy moving forward.

My prediction is that before you know it classes will be a thing of the past. 3 years ago when React was gaining traction Dan released a tweet that said: [**Don't go re-writing everything**](https://twitter.com/dan_abramov/status/808770915584638976?s=20) to use React. Fast forward 3 years into the future and most apps that *use* React are built *entriely* with React. We've got the same statement 3 years later but now with hooks. 🤔

### Some tips and tricks for using hooks

Hooks have some interesting rules and quirks surrounding them. These are due to how they are implemented under the hood.
Notably they must only be used at the top level. They **cannot** be used inside **if** statements, **loops** or any other conditionals.
**Every** render of a component, the exact same number of hooks must be called in the same order and way.

An easy way to make sure you don't fall into some early traps is to use the official [**eslint**](https://www.npmjs.com/package/eslint-plugin-react-hooks) plugin.

Other things to remember:

* You cannot use them in class components

* It's tempting to use hooks in a similar way to `this.setState` and put a whole js object `{}` into state. However, this will likely lead to bugs as hooks *replace* state, whereas `this.setState` will *merge* the state

* useReducer is better than useState when computing state from multiple values. If your state values are independant of each other they are better suited to individual calls to React.useState, even if you have more than 3 or 4 pieces of state

* When working with Context API, use `useContext` instead of the context consumer component

One final piece of advice that I would like to expand on further in another post is that:

> In new React, Refs are not just for Dom nodes

`useRef` can actually be thought of as state that when it changes does not cause a re-render. This is similar to class properties in Javascript.
You can read a little more in the docs [here](https://reactjs.org/docs/hooks-faq.html#is-there-something-like-instance-variables)


### Apollo + GraphQL
GraphQL is currently taking over the world and Apollo, as the leader of the GraphQl Client / Server space is doing so as well. This was clearly evident at React Amsterdam. A significant amount of people are using it today and the people that aren't are
certainly on their way.

The tech stack I work with uses GraphQL without Apollo client and literally every rection to this was:

![But why?](./but_why.jpeg)

An emphasized point was that **far too much state is put into Redux**. Apollo is aiming to handle all the data fetching / caching side of things. So a key takeaway is see how far you can get without Redux and you might be surprised!

### react-testing-library
This is one that came up a lot. Kent.C. Dodd's own **react-testing-library**. This library has taken the
frontend testing world by storm as the standard for rendering React components in our unit tests. It is
designed to be used in place of enzyme and spefically to avoid the problem of [Testing Implementation details](https://kentcdodds.com/blog/testing-implementation-details)


### Misc notes

* *Typescript* and *styled-components* is very popular. Over 80% of hands shot up when asked who was using them.

* MomentJS is heavy and you probably don't need it ["Don’t use momentJS”](https://github.com/you-dont-need/You-Dont-Need-Momentjs)

* It's very easy to use Redux way too much. Instead state should only exist where it is used. (https://kentcdodds.com/blog/application-state-management)

> Use React.StrictMode

React concurrent mode is set to drop sometime this year. After that Suspense for data-fetching is also set to be released. As part of
this there are a few things which will no longer work.
Namely the following cannot be used in concurrent mode:

1. Functions starting with `componentWill*`
2. String refs
3. `findDOMNode`
4. Legacy context API

Your team can prepare for these changes by wrapping all your new code (and old if you're brave) in the `<React.StrictMode>` tag. This is stripped out in production builds
but during development will fire warnings to the console where you've breached any of the conditions for concurrent mode. You can add this as many times you like and anywhere
in the tree so there isn't much excuse to not using it.

# Takeaways

1. Use hooks! You won’t look back. (New code)

2. Use “React.StrictMode”

3. Introduce React Error Boundaries (Per route basis seems logical)

4. Give “react-testing-library” a go

5. React.lazy is ridiculously easy to use for code splitting. Use it

6. Add the “eslint” plugin for hooks

7. Use component state as much as possible!

# Resources and Further Reading

[YouTube](https://www.youtube.com/playlist?list=PLNBNS7NRGKMHLTeH4qfD3F320GXfj97kc) playlist with all talks (Including React Native)

### My favourites

* [Requisite React - Kent C. Dodds](https://www.youtube.com/watch?v=tO8qHlr6Wqg&list=PLNBNS7NRGKMHLTeH4qfD3F320GXfj97kc&index=2&t=0s)

* [Refactoring React - Siddharth Kshetrapal](https://www.youtube.com/watch?v=2Dw8gA60d_k&list=PLNBNS7NRGKMHLTeH4qfD3F320GXfj97kc&index=4&t=0s)

* [Designing with React - Mark Dalgleish](https://www.youtube.com/watch?v=orPcyJMJh7Y&list=PLNBNS7NRGKMHLTeH4qfD3F320GXfj97kc&index=6&t=0s)

* [Tech regrets at Spectrum - Max Stoiber](https://www.youtube.com/watch?v=UC-bUkbuvZs&list=PLNBNS7NRGKMHLTeH4qfD3F320GXfj97kc&index=10&t=0s)

* [The GraphQL developer experience - Peggy Rayzis](https://www.youtube.com/watch?v=qBla-jgNKZc&list=PLNBNS7NRGKMHLTeH4qfD3F320GXfj97kc&index=21&t=0s)

### Further reading (stuff mentioned during the 3 days)

* [Minimal API surface area](https://www.youtube.com/watch?v=4anAwXYqLG8)

* [Optimized for change](https://overreacted.io/optimized-for-change/)

* Kent has a blog for [everything](https://kentcdodds.com/blog/how-i-am-so-productive). Check it out.
