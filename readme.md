# Simple package for managing cookies

## Features
- getting cookies
- deleting cookies
- creating cookies

## Usage
```javascript
import { getCookie, setCookie, deleteCookie } from "cookie-creator";

setCookie("cookie", "value", 1);
console.log(getCookie("cookie"));

deleteCookie("cookie");
```