---
title: 'The CSS var() Function – How to Create and Use CSS Variables'
publishedDate: 2022-12-28
author: 'Kolade Chris'
coverImage: '/images/blogPostCovers/css-variables.webp'
tags: ['CSS', 'WebDev']
category: 'Frontend Development'
readingTime: '3 minutes'
excerpt: 'Yes. You can declare and reuse variables in CSS by reading this article.'
slug: how-to-create-and-use-css-variables
---

CSS variables, AKA CSS custom properties came into existence due to the need to have a consistent and maintainable CSS stylesheet. Instead of repeatedly defining the same style declaration over and over again, why not define it once, use it in multiple style declarations, and change it all in one place?

That's the big void CSS variable has been able to fill – help you achieve the **DRY (do not repeat yourself) principle**.

The first working draft of CSS variables was published back in 2012. But CSS variables never became popular until after 2017 due to browser support. Since then, CSS variable has become a mainstay amongst developers.

In this article, we are going to take a look at CSS variables in detail by showing you how to:

- define it
- use it with the `var()` function
- and change it in one place so it reflects everywhere it is used.

## What is a CSS variable?

CSS variables, also called "custom properties" is a reusable value developers define in their stylesheets to reduce repetition. You can define them locally and globally in your stylesheet. You can even target them with JavaScript and do whatever you want with them.

## Benefits of CSS Variables

- easier identification of properties – `bg-dark` is easier to identify than `#040705`
- easier to maintain code
- a lot more readable code
- one declaration, use anywhere

## How Do you Create a New Variable in CSS?

The syntax for creating a CSS variable is not complicated to grasp at once. You can declare a CSS variable globally or locally in your style sheet.

## How to Declare a CSS Variable Globally

To create a CSS variable globally, you can use the `:root` pseudo-selector or the `html` element selector. But it is advisable to use the `:root` pseudo-selector because it is the root CSS. Hence, it is more specific.

```css
:root {
  --background-dark: #040705;
  --background-light: #f1f1f1;
  --big-font: 2.5rem;
  --small-font: 1.5rem;
}
```

Once you declare a CSS variable like this, you can use it anywhere in your stylesheet. In a framework like Next JS, you can declare several CSS variables in the `global.css` file and use it in every other stylesheet. Amazing!

## How to Declare a CSS Variable Locally

To declare a CSS variable locally, you define it right inside the selector you want to use it.

```css
h1 {
  --text-color: #2babab;
  --font-weight: bolder;
}
```

Now that you've created the CSS variables, there should be a way to use them. Properly put, reuse them. CSS provides the `var()` function for that. And that's what we are going to look at next in this article.

## What Does var() Do in CSS?

The `var()` function is what allows you to reuse a CSS variable in your stylesheet. All you have to do is type out your property and put the name of the variable inside the `var()` function. The syntax looks like this:

```css
selector {
  property: var(--name-of-CSS-variable);
}
```

Remember we declare some global and local CSS variables previously, let's see how to reuse them now. I want to make the background color of the whole page black, so I can reuse the `--background-dark` variable this way:

```css
body {
  background-color: var(--background-dark);
}
```

Here's what it looks like:

![ss1.png](https://media.graphassets.com/wRaiHaSG65YQqKiDs8zg)

The dark background color reflects on the page. Notice I have a greenish text on the web page. And the default color of HTML texts is black (`#000`). I was able to change the color of the text with the local variable I declared the other time like this:

```css
h1 {
  --text-color: #2babab;
  --font-weight: bolder;
  color: var(--text-color);
}
```

That's how you can reuse a local variable!

## Can you Change CSS variables?

Technically, any variable can be changed. CSS variable is not an exception to this. Once you change the variable in one place, it reflects anywhere you're reusing it.

I have changed our global `background-dark` variable to a greenish color and the local `text-color` variable to a dark color:

```css
:root {
  --background-dark: #2babab;
}

h1 {
  --text-color: #040705;
  --font-weight: bolder;

  color: var(--text-color);
}
```

Now, things have changed in the browser:

![ss2.png](https://media.graphassets.com/yVCccp5HSxbapqWWWC5e)

## Wrapping Up

The introduction of CSS variables is a game-changer in modern CSS. With CSS variables, it is now possible to write simple, consistent, and easy-to-maintain stylesheets with CSS variables.

In addition, these days, we can easily switch style declarations around to make cool themes for websites.

I hope this article helps you learn how to use CSS variables in your projects. Make sure you share the article with your friends on social media so it can get to them too.
