---
title: 'How to Create Environment Variables Inside next.config.js File and Use them'
publishedDate: 2023-05-23
author: 'Kolade Chris'
coverImage: '/images/blogPostCovers/next-env-in-config-file.png'
tags: ['Next JS', 'WebDev']
category: 'Frontend Development'
readingTime: '1 minute'
excerpt: 'You can put your environment variables in a next.config.js file'
slug: how-to-create-environment-variables-inside-nextconfigjs-file-and-use-them
---

Environment variables let you store secrets you don’t want to expose for security reasons. So, they are useful in concealing private information such as API keys and other secrets.

The normal way many developers create environment variables is to create a `.env` file and put the variable identifiers and values there:

```js
NEXT_PUBLIC_APP_TOP_SECRET = MyAppTopSecret;
NEXT_PUBLIC_API_KEY = mYaPiKeY;
```

But you can also create them inside the `next.config.js` file. The benefit is that you won’t need to prefix the variables with `NEXT_PUBLIC_` as you can see in the code snippet above.

## How to Create env Variables Inside `next.config.js` File

Creating environment variables inside the `next.config.js` file is not a straightforward process, it is not hard though. What I mean is, you cannot just put them inside the `next.config.js` file as you do inside the `env` file.

To create environment variables inside the `next.config.js` file, you have to define an `env` key as a part of the `nextConfig` object and put them inside of it in a `key:value` pair:

```js
env: {
    APP_TOP_SECRET: 'MyAppTopSecret',
    API_KEY: 'mYaPiKeY',
  },
```

If you are using the latest version of Next JS, the whole file would look like this:

```js
const nextConfig = {
  // env variables start
  env: {
    APP_TOP_SECRET: 'MyAppTopSecret',
    API_KEY: 'mYaPiKeY',
  },
  // env variables end
};
```

## How to Use Environment Variables of a `next.config.js` File

The reason why you created the environment variables is to use them. So, to use the variables, prefix their names with `process.env.` like this:

```js
process.env.APP_TOP_SECRET;
process.env.API_KEY;
```

And if you want to display them in the browser, you can put them inside curly braces:

```js
<h2>My Environment Variables</h2>
<p>My App's Top Secret = {process.env.APP_TOP_SECRET}</p>
<p>My API Key = {process.env.API_KEY}</p>
```

![Screenshot 2023-03-27 at 14.47.23.png](https://media.graphassets.com/bYFBZOeNS460jchZj7Ok)

Thank you for reading. Don’t hesitate to share the article so others who need it can read it.
