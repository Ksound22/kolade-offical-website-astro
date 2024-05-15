---
title: 'What is the Difference between a .js and .jsx File in React?'
publishedDate: 2022-12-24
author: 'Kolade Chris'
coverImage: 'image1.png'
tags: ['React', 'JSX', 'WebDev']
category: 'Frontend Development'
excerpt: "A JavaScript and JSX file are not exactly the same thing. There's one notable difference between them you can learn of in this article."
slug: what-is-the-difference-between-a-js-and-jsx-file-in-react
---

If you create websites and web applications with React, then you are writing some JSX. You might have even had some indecision naming your files with either the `.js` or `.jsx` extensions.

I used to create all my React files with the `.js` extension until I realized I can use `.jsx` too. Then I started having indecision choosing between the two. I finally cleared my confusion and started using both file extensions appropriately.

So, in this article, I want to show you the difference between the `.js` and `.jsx` file extensions. And which of them to use when you have to too. But before I show you what the difference between the two is, let me tell you what JSX is.

## What is JSX?

Some developers and writers have referred to JSX as JavaScript XML, and others call it JavaScript Syntax extension. But the JavaScript Syntax extension is what makes sense to me the most.

By definition, JSX is a syntactic sugar of the `React.createElement()` method that allows developers to write HTML in React.

React is a JavaScript library. When you're writing React, you're also writing some JavaScript. That's why **JSX was created to address clashes that might arise from the combination of HTML and JavaScript**.

One of those clashes is JavaScript's reserved keyword "class", and the class attribute of HTML. In this case, className becomes the JSX word for the class attribute of HTML.

JSX also gives you the ability to **embed JavaScript right inside HTML (the JSX)** between curly braces this way:

```html
<h1>Hello there! 2 + 2 is {2 + 2}</h1>
```

![ss1.png](https://media.graphassets.com/6oCjp49uSpa9lFm271UD)

To do this in vanilla JavaScript, you have to create a script, target those elements with DOM and then add them together.

## Difference between js and jsx File Extension

The notable difference between a `.js` file and `.jsx` is that in a `.js` file, you're writing JavaScript and in `.jsx` file, you're writing JSX. Of course, you can still write JSX inside a `.js` file, but having a separate file for JSX and vanilla JavaScript would reduce confusion in a large React codebase.

Another difference between a `.js` and `.jsx` file is that code editors and their themes might have different syntax highlighting for JavaScript and JSX. Once you separate the two in your codebase, things could become easier for you visually.

## Should I Use js or jsx Extension?

You can leverage the notable difference between a `.js` and `.jsx` file to make things easy for yourself while writing React. Create a `jsx` file to signal that the file contains some JSX in addition to JavaScript. And if you have just a `.js` file, it means you don't have any JSX inside of it.

If you find this article helpful, share it on your favorite social media platforms.
