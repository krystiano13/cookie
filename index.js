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
 * @param name
 */
export function deleteCookie(name) {
    document.cookie = `${name}=${null}; ${null}; path=/`
}

export function getCookie() {

}