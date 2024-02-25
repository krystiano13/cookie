# Simple package for managing cookies

## Features
- getting cookies
- deleting cookies
- creating cookies

## API
setCookie:
name: string,
value: any,
daysToExpire: number

deleteCookie:
name: string

getCookie:
name: string

## Usage
```javascript
import { getCookie, setCookie, deleteCookie } from "cookie-creator";

setCookie("cookie", "value", 1);
console.log(getCookie("cookie"));

deleteCookie("cookie");
```