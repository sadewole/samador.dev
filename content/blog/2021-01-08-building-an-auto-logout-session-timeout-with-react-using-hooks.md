---
layout: blog
title: Building an Auto Logout Session Timeout with React using hooks.
slug: building-an-auto-logout-session-timeout-with-react-using-hooks
date: 2021-01-05T18:03:05.333Z
tags:
  - "React"
  - "Programming"
  - "Javascript"
  - "Web development"
  - "React hook"
---

![Clock image](/media/pexels-brett-sayles-937512.jpg "Picture: <https://www.pexels.com/photo/close-up-photo-of-street-clock-near-tall-building-937512/>")

Sometimes, a user logs in to your application and forgets to logout. Let’s assume there are lots of sensitive information about the user on your application e.g personal information or transactions data. This leaves the user data vulnerable.

As a developer, you are to develop a solution that detects user inactiveness on your application. This solution is to help logout users whenever they are not making use of the application.

In this tutorial, we’re going to build the frontend using react and its hooks. Following the steps should give you a better understanding when working on either Vue or Angular.

**Let’s get started!**

Before we continue, please note that this tutorial assumes you have a basic understanding of react and react hooks. If not, kindly find available resources that’ll guide you through and come back here.

First, Let’s start by creating a javascript file in your component folder e.g _SessionTimeout.js_

To make things faster for us, let’s import all the things we need for the tutorial. You’ll need to install [moment](https://momentjs.com/).

```
npm install moment --save
```

```javascript
import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  Fragment,
} from "react"
import moment from "moment"

const SessionTimeout = () => {
  return <Fragment />
}

export default SessionTimeout
```

`useState:` accepts the initial value of the state item and returns an array containing the state variable, and the function you call to alter the state.

`useCallback:` This hook is useful when you have a component with a child frequently re-rendering.

`useEffect:` The function runs when the component is first rendered, and on every subsequent re-render/update.

`useRef:` This hook allows us to access a DOM element imperatively.

`Fragment:` This lets you group a list of children without adding extra nodes to the DOM.

Next, we list out all the state needed.

```javascript
const SessionTimeout = () => {
  const [events, setEvents] = useState(['click', 'load', 'scroll']);
  const [second, setSecond] = useState(0);
```

`events:` This state helps to define our event listeners. You can add as many listeners as you want.

`second:` This state helps to define the remaining seconds left before the user will be logout.

Next, let’s write a function that initializes the timer when the component mounts.

```javascript
const SessionTimeout = () => {
  const [events, setEvents] = useState(['click', 'load', 'scroll']);
  const [second, setSecond] = useState(0);

  // reset interval timer
  let resetTimer = useCallback(() => {

    if (isAuthenticated) {
      timeStamp = moment();
      sessionStorage.setItem('lastTimeStamp', timeStamp);
    } else {
      sessionStorage.removeItem('lastTimeStamp');
    }
  }, [isAuthenticated]);

  // Life cycle hook
  useEffect(() => {
    events.forEach((event) => {
      window.addEventListener(event, resetTimer);
    });

  }, [resetTimer]);
```

`resetTimer:` First, we check if the user is authenticated. If yes, we set the timestamp in sessionStorage and if not authenticated, we remove the timestamp from storage. The `usecallback` hook is used to look-up changes in user authentication.

In our `useEffect` hook, we then pass the function in our **window.addEventListener.**

Next, let’s also write a setTimeout function that checks for our stored **timeStamp.**

```javascript
const SessionTimeout = () => {
  const [events, setEvents] = useState(['click', 'load', 'scroll']);
  const [second, setSecond] = useState(0);

  let timeStamp;
  let warningInactiveInterval = useRef();
  let startTimerInterval = useRef();

  // start inactive check
  let timeChecker = () => {
    startTimerInterval.current = setTimeout(() => {
      let storedTimeStamp = sessionStorage.getItem('lastTimeStamp');
      warningInactive(storedTimeStamp);
    }, 60000);
  };
```

`timeChecker:` We use this function to initialize the timer. The **setTimeout** method sets a timer that executes a function once the timer expires at 1 minute. We get the stored timeStamp from sessionStorage which is then sent to our warning function. We’ll look at the **warningInactive** function in a bit.

Next, let us run the timeChecker function

```javascript
let timeStamp
let warningInactiveInterval = useRef()
let startTimerInterval = useRef()

// start inactive check
let timeChecker = () => {
  startTimerInterval.current = setTimeout(() => {
    let storedTimeStamp = sessionStorage.getItem("lastTimeStamp")
    warningInactive(storedTimeStamp)
  }, 60000)
}

// reset interval timer
let resetTimer = useCallback(() => {
  clearTimeout(startTimerInterval.current)

  if (isAuthenticated) {
    timeStamp = moment()
    sessionStorage.setItem("lastTimeStamp", timeStamp)
  } else {
    sessionStorage.removeItem("lastTimeStamp")
  }

  timeChecker()
}, [isAuthenticated])

// Life cycle hook
useEffect(() => {
  events.forEach(event => {
    window.addEventListener(event, resetTimer)
  })
  // Run the timeChecker
  timeChecker()
}, [resetTimer])
```

As you can see, the ideal timer is gradually coming to life. Here are the updates:

1. We run the **timeChecker** on both **useEffect** and **resetTimer.** This is because we want the timeChecker to do a check when the component mounts and when there’s a listened event on the window.
2. We also clear the setTimeout at the resetTimer function. This will help us stop any continuous loop.

Now that we’ve been able to write a time checker, let us write a function that warns the user.

```javascript
let timeStamp
let warningInactiveInterval = useRef()
let startTimerInterval = useRef()

// start inactive check
let timeChecker = () => {
  startTimerInterval.current = setTimeout(() => {
    let storedTimeStamp = sessionStorage.getItem("lastTimeStamp")
    warningInactive(storedTimeStamp)
  }, 60000)
}

// warning timer
let warningInactive = timeString => {
  clearTimeout(startTimerInterval.current)

  warningInactiveInterval.current = setInterval(() => {
    const maxTime = 2 // Maximum ideal time given before logout
    const popTime = 1 // remaining time (notification) left to logout.

    const diff = moment.duration(moment().diff(moment(timeString)))
    const minPast = diff.minutes()
    const leftSecond = 60 - diff.seconds()

    if (minPast === popTime) {
      setSecond(leftSecond)
    }

    if (minPast === maxTime) {
      clearInterval(warningInactiveInterval.current)
      sessionStorage.removeItem("lastTimeStamp")
      // your logout function here
    }
  }, 1000)
}
```

Okay, don’t be scared. I know this is a bunch of code. I’ll explain everything.

`warningInactive:` Before doing anything in this function, let us first clear the setTimeout. Now, we can work with the **setInterval** method. The setInterval method is set to run repeatedly at every 1 second. And here, all thanks to `momentjs`, we can easily check for the time difference with it.

Click these links if you’re yet to understand the difference between [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) and [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval).

We check the time difference between the **current time** and the **stored time. minPast** as minute past and **leftSecond** for counting down seconds.

Things to notes at this point:

1. The max ideal time is 2 minutes and **popTime** (which is the notification time) is set to 1 minute of user ideal.
2. We set the second to start counting once the **minPast** is equal to the **popTime.**
3. You can change the **maxTime** to increase the ideal timer for the user.
4. Lastly, we clear both the setInterval and sessionStorage once the **minPast** is equal with **maxTime** I.e once it’s 2 minutes of user ideal.

Yeah, that’s a lot of code we’ve written. Anyway, we’re almost done.

Lastly, let us go back to our resetTimer function and do some cleanups.

```javascript
// reset interval timer
let resetTimer = useCallback(() => {
  clearTimeout(startTimerInterval.current)
  clearInterval(warningInactiveInterval.current)

  if (isAuthenticated) {
    timeStamp = moment()
    sessionStorage.setItem("lastTimeStamp", timeStamp)
  } else {
    clearInterval(warningInactiveInterval.current)
    sessionStorage.removeItem("lastTimeStamp")
  }
  timeChecker()
}, [isAuthenticated])

useEffect(() => {
  events.forEach(event => {
    window.addEventListener(event, resetTimer)
  })

  timeChecker()

  return () => {
    clearTimeout(startTimerInterval.current)
  }
}, [resetTimer, events, timeChecker])
```

Here are a few things we did:

1. We added a **clearInterval** method at the resetTimer. This is necessary to avoid unwanted loops. And also clear all running conditions when the user is not authenticated.
2. We also added a cleanup once the component unmount.

Finally! That’s all for everything. Now, we can test our code by adding the **SessionTimeout.js** in **app.js** or where you feel you’ll be needing it.

To spice things up, you can change the `fragment` to a modal that notifies the user of the warning. And you can also apply this with other frameworks.

The complete code for this tutorial can be found at <https://github.com/sadewole/Idle-session-timer>. And thanks to [Flavio Copes](https://medium.com/u/fe1c14f6cde?source=post_page-----e7804ef973ec--------------------------------), I used his definition of hooks.

\--

**You can like and do leave a comment for any contribution to this article on [medium](https://samador9.medium.com/building-an-auto-logout-session-timeout-with-react-using-hooks-e7804ef973ec#434c-70de593939bb). Thank you.**
