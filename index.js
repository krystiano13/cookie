/**
 *
 * @param { string } name
 * @param { any } value
 * @param { number } daysToExpire
 */
export function setCookie(name, value, daysToExpire) {
    /** @type Date */
    const date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    /** @type string */
    const expire = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expire}; path=/`;
}

/**
 *
 * @param { string } name
 */
export function deleteCookie(name) {
    document.cookie = `${name}=${null}; ${null}; path=/`
}

/**
 *
 * @param { string } name
 * @returns { string }
 */
export function getCookie(name) {
    /** @type string */
    const decodedCookie = decodeURIComponent(document.cookie);

    /** @type string[] */
    const cookies = decodedCookie.split("; ");

    /** @type string */
    let result = "";

    cookies.forEach(item => {
        if(item.indexOf(name) === 0) {
            result = item.substring(name.length + 1);
        }
    });

    return result;
}