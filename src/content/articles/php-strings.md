---
title: 'PHP String – How to Create a String and Use String Functions'
publishedDate: 2024-07-14
author: 'Kolade Chris'
coverImage: '/images/blogPostCovers/php-strings-and-string-functions.png'
tags: ['PHP', 'WebDev']
category: 'Backend Development'
badge: 'NTP'
readingTime: '8 minute'
excerpt: 'Master the essential rules and best practices for naming variables in PHP to write clean and readable code.'
slug: how-to-create-a-string-and-use-string-unctions
---

String is one of the fundamental data types in PHP and other programming languages. It is used extensively in web development for representing textual data.

In PHP, a string is a sequence of characters, such as letters, numbers, symbols, or whitespace, enclosed within either single quotes (`''`) or double quotes (`""`).

## How to Create a String in PHP

The commonest way to create a string is to surround the characters with single or double quotes:

```php
$singleQuoteString = 'John Doe';
$doubleQuoteString = "Jane Doe";
```

Apart from surrounding a sequence of characters with single or double quotes to make it a string, there are other ways you can create a string in PHP. There are `heredoc` and `nowdoc` strings which allow you to create strings that span multiple lines.

`Heredoc` string behaves like a string surrounded by double quotes, and `nowdoc` string behaves like a string created with single quotes.

To create a `heredoc` string, you start with triple lesser than symbols (`<<<`), then the identifier for the variable, and end with that same identifier:

```php
$myHereDocString = <<<EOD
This is a heredoc string
It lets you create variables that
span multiple lines
EOD;
```

If you want to create a `nowdoc` string, you start with triple lesser than symbols followed by the identifier too, but you have to surround the identifier with a single quote:

```php
$myNowdocString = <<<'NOD'
This is a nowdoc string
It also lets you create strings
that span multiple lines
but works like a string with single quotes
NOD;
```

## How to Concatenate Strings in PHP

Concatenation is the process of combining two or more strings. There are several ways to concatenate variables in PHP. These include:

- using the concatenation operator, which is a dot (`.`) in PHP
- compound concatenation assignment
- curly [syntax] braces
- and using the implode function with arrays

### How to Concatenate Strings with the Concatenation Operator

You can concatenate two or more strings by putting a dot (`.`) between them:

```php
$firstname = 'John';
$lastName = 'Doe';

$fullName = $firstname . ' ' . $lastName;
echo $fullName // John Doe
```

You can also concatenate more than two strings more explicitly:

```php
$firstname = 'John';
$lastName = 'Doe';
$middleName = 'Chris';

$fullName = $firstname . ' ' . $middleName . ' ' . $lastName;
echo $fullName // John Chris Doe
```

### How to Concatenate Strings with the Compound Concatenation Assignment Operator

The compound concatenation assignment operator is represented by `.=`. This operator appends the right operand to the left operand:

```php
$greeting = "Hello";
$name = "John";

$greeting .= " " . $name;
echo $greeting; // Hello John
```

### How to Concatenate Strings By Using Double Quotes

PHP allows you to interpolate strings and other variables directly inside a string using double quotes:

```php
$sport = 'Football';
$bestSport = "My best sport is $sport";

echo $bestSport; // My best sport is Football
```

Since a `heredoc` string behaves like a string created with double quotes, it means you can do the same thing with it:

```php
$myStr = "Hello world";
$myHereDocString = <<<EOD
$myStr from a heredoc string
Remember this type of string
lets you create strings spanning
mutiple lines
EOD;

echo $myHereDocString;
/* Hello world from a heredoc string
Remember this type of string
lets you create strings spanning
mutiple lines */
```

### How to Concatenate Strings By Using Curly Braces

You can use curly braces inside a string with double quotes to concatenate two or more variables. Here’s an example:

```php
$firstName = 'John';
$lastName = 'Doe';
$middleName = 'Chris';

$fullName = "My full name is {$firstName} {$middleName} {$lastName}";

echo $fullName; // My full name is John Chris Doe
```

### How to Concatenate Strings With the `implode()` Function

`implode()` is an array method you can use to combine the elements of an array of strings into one string.

`implode()` takes two parameters – a delimiter and the array to use. The delimiter is what will separate each element of the array.

```php
$words = array("Hello", "world!");

echo implode(" ", $words); // Hello world!
```

Here’s an example using an array created with square brackets:

```php
$colors = ["red", "green", "blue"];
$commaSeparatedColors = implode(", ", $colors);

echo $commaSeparatedColors; // red, green, blue
```

## String Functions in PHP

PHP provides a variety of built-in string functions that allow you to manipulate, search, format, and extract information from strings.

Below are some commonly used string functions in PHP:

### The `strlen()` Function

The `strlen()` function returns the length of the characters in a string

```php
$myStr = "PHP is awesome!";

echo strlen($myStr); // 15
```

### The `str_word_count()` Function

This function takes a string as the parameter and returns the length of the words in that string:

```php
$myStr = "Hello world, PHP is awesome!";

echo str_word_count($myStr); // 5
```

### The `substr()` Function

The substr() function in PHP is used to extract a substring from a larger string. It takes three parameters:

- `String`: The original string from which you want to extract the substring.
- `Start`: An integer, it’s the starting position from where the substring extraction begins. If it's positive, counting starts from the beginning of the string. If it's negative, counting starts from the end of the string.
- `Length` (optional): Also an integer, it’s the length of the substring to extract. If omitted, `substr()` extracts everything from the starting position to the end of the string.

The general syntax looks like this:

```php
substr(string, start, length):
```

You can extract a substring from a specific position:

```php
$myStr = "Hello, world!";
$substring = substr($myStr, 7);

echo $substring; // world!
```

You can specify the optional length to indicate how many characters you want:

```php
// extract world without the exclamation mark
$myStr = "Hello, world!";
$substring = substr($myStr, 7, 5);

echo $substring; // world
```

You can use negative starting position to extract from the end of the string:

```php
$myStr = "Hello, world!";
$substring = substr($myStr, -6);

echo $substring; // world!
```

You can also specify a length after using a negative starting index:

```php
$myStr = "Hello, world!";
$substring = substr($myStr, -13, 5);

echo $substring; // Hello
```

### The `strpos()` Function

`strpos()` returns the position of the first occurrence of a substring within a string.

```php
$myStr = "Hello, world!";

echo strpos($myStr, "!"); // 12
```

### The `strtoupper()` Function

`strtoupper()` takes a string and converts it to uppercase:

```php
$myStr = "Hello, world!";

echo strtoupper($myStr); // HELLO, WORLD!
```

### The `strtolower()` Function

`strtolower()` is the opposite of `strtoupper()`. It takes a string and converts it to lowercase:

```php
$myStr = "Hello, world!";

echo strtolower($myStr); // hello, world!
```

### The `str_replace()` Function

The `str_replace()` function takes three compulsory parameters:

- the target string to replace
- the replacer string
- the whole string containing the target string – this could be a variable.

```php
$myStr = "Hello, world!";

echo str_replace("Hello", "Hi", $myStr) . '<br>'; // Hi, world!
echo str_replace("world!", "planet earth!", $myStr); // Hello, planet earth!
```

### The `ucwords()` Function

The `ucwords()` function takes a string and makes the first letter of each word in it uppercase. In some languages, this is not built-in at all!

```php
$myStr = "hello, world!";

echo ucwords($myStr); // Hello, World!
```

## Wrapping Up

Mastering strings in PHP is essential for building dynamic websites. Using different methods like single quotes or double quotes, and also `heredoc` and `nowdoc`, you can create strings flexibly.

As this article discusses, PHP offers valuable functions like `strlen()` or `substr()` for tasks like finding string length or extracting substrings, simplifying the development process. With those functions, you can efficiently handle textual data and build user-friendly applications that meet modern web development standards.
