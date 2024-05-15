---
title: 'ValueError: invalid literal for int() with base 10: in Python [Fixed]'
publishedDate: 2022-12-26
author: 'Kolade Chris'
coverImage: 'images/blogPostCovers/python-valueerror.webp'
tags: ['Python']
category: 'Programming'
excerpt: "One conversion Python won't allow you to do is to convert a string structured as a floating point number (a number with a decimal point) to an integer."
slug: valueerror-invalid-literal-for-int-with-base-10-in-python-fixed
---

In Python, you can convert one data type to another. For instance, integers to strings and vice versa, floats to strings, and many others.

However, one conversion Python won't allow you to do is to convert a string structured as a floating point number (a number with a decimal point) to an integer. For example, converting "5.20" to an integer. This results in the **ValueError: invalid literal for int() with base 10:** error.

```py
print(int("5.20"))

# Traceback (most recent call last):
#   File "value_error.py", line 1, in <module>
#     print(int("5.20"))
# ValueError: invalid literal for int() with base 10: '5.20'
```

This error also occurs if you try to convert a string of letters to an integer:

```py
print(int("Python"))

# Traceback (most recent call last):
#   File "value_error.py", line 1, in <module>
#     print(int("Python"))
# ValueError: invalid literal for int() with base 10: 'Python'
```

In this article, you'll learn about how to fix this error in Python so you can avoid it in the future.

## What Causes ValueError: invalid literal for int() with base 10 in Python?

What causes this error is already in the error message – the `int()` method expects an integer. Any number with a decimal point is not an integer. Hence, such a number is not in base 10.

This means you cannot convert a floating point number formatted as a string to an integer with the `int()` method.

## How do I fix this ValueError invalid literal for int with base 10 error in Python?

To fix this error, Python provides a method for converting such numbers formatted as a string – the `float()` method. So, whenever you have a number with a decimal point you want to convert, you should use the `float()` method instead of `int()`.

```py
print(float("5.20"))

# Output 5.2
```

If you want the string as an integer, you can use the combination of the `int()` and `float()` methods – convert the number to a float first, then convert it back to an integer:

```py
num = "5.20"
# convert the number to float
floated_num = float(num)

# convert the floating point number to an integer
intNum = int(floated_num)

print(intNum)
# 5
```

Here's how to do it all in one line:

```py
print(int(float("5.20")))
# 5
```

You can also use `try...except…` to prevent this error. If the string cannot be converted to an integer, the `except` block will run:

```py
num = '128.4'

try:
    res = int(num)
except ValueError:
    res = 0

print(res)
# 0
```

If the string can be converted to an integer, the try block will run:

```py
num = '128'

try:
    res = int(num)
except ValueError:
    res = 0

print(res)
# 128
```

If you find the article helpful, share it with your friends on social media.
