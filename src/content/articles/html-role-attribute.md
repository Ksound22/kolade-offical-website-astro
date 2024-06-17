---
title: 'What is the HTML Role Attribute?'
publishedDate: 2022-12-23
author: 'Kolade Chris'
coverImage: '/images/blogPostCovers/html-role-attribute.png'
tags: ['HTML', 'WebDev']
category: 'Frontend Development'
badge: 'Popular'
readingTime: '2 minutes'
excerpt: 'The role attribute is an important aspect of accessibility. Reading more about it in this article.'
slug: what-is-the-html-role-attribute
---

The `role` attribute of HTML is one of the attributes that help developers make websites and related technologies conform to the best practices of accessibility. That’s because accessibility is an important aspect of web development to put in mind while making websites, web applications, and even mobile applications.

But before we dive into what the `role` attribute entails, let's look at what attributes are first.

## What are Attributes in HTML?

An attribute provides additional information about an HTML element. The most common attributes developers use in HTML and JSX are `class` and `id`.

With `id`, you get to add unique identifiers to elements:

```html
<nav id="navbar">
  <ul id="navItem">
    ...
  </ul>
</nav>
```

And with `class`, you can group together similar elements:

```html
<nav id="navbar">
  <ul id="navItem">
    <li class="navItem"><a href="">Home</a></li>
    <li class="navItem"><a href="">Services</a></li>
    <li class="navItem"><a href="">Blog</a></li>
    <li class="navItem"><a href="">Contact</a></li>
  </ul>
</nav>
```

There are lots of other attributes such as `href` for defining URL in `<a>` tags, `src` for providing the path to a file, especially images, `height`, `width`, and many more.

## What is the Role Attribute in HTML?

The role attribute was defined as a part of ARIA 1.0. ARIA stands for **Accessible Rich Internet Applications** by the World Wide Web Consortium (W3C). Developers use it in the HTML and JSX markup to tell assistive technologies what the purpose (role) of an element is.

One of those assistive technologies is a screen reader. We'll take a look at those assistive technologies when in the next section of this article.

You might think the HTML elements are enough to tell assistive what the role of an attribute is, but that’s not the case on all occasions. This is because developers can format one element to look like the other. For instance, we can even format a `div` to look like a button.

## Why Use Role Attribute in HTML5?

As I pointed out earlier, accessibility is an important aspect of web development. Persons with disabilities (PWD) should have access to web development too.

These persons with disabilities (PWD) use assistive technologies such as:

- **screen readers** and **braille displays** for blind people
- **Eye tracker** for those with high mobility issues
- **screen magnifiers** for people with low vision

Because these people use assistive technologies, you as a developer need to define the `role` attribute in any element that might confuse the assistive technologies. The most common of that scenario is using the `<a>` tag to define a button as done below:

![role.png](https://media.graphassets.com/GTaxshrjRAqvKU16s4Iq)

In this case, you have to define a role attribute to tell those assistive technologies that it’s a button. Otherwise, assistive technologies would identify it as a link.

That way, that button won't confuse assistive technologies and your website become more accessible to persons with disabilities (PWD):

```html
<a href="#" class="btn" role="button">Start Here</a>
```

Apart from "button", the role attribute can accept several other values and that's what we'll look at next.

## HTML Role Attribute Values

Apart from "button", the role attribute can take several other values such as `layout`, `banner`, `link`, `logo`, `main`, and many more.
For instance, you can leverage the `role` attribute to tell assistive technology about the logo of your website. It doesn’t matter whether the logo is text or an image:

```html
<h1 role="logo">Kolade Chris</h1>
```

If you're formatting a `div` as the wrapper for the main content of a website instead of the `<main>` tag, you can assign it the role of `main` to tell assistive technologies it represents the main content of your website.

```html
<div role="main">...</div>
```

## Conclusion

The `role` attribute is a game changer in making websites more accessible to persons with disabilities (PWD). You should always use it when the name of an element is not enough to tell assistive technologies what the element is about.

If you find this article useful, share it on social media with your friends.
