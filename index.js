/**
 *
 * @param name
 * @param value
 * @param daysToExpire
 */
export function setCookie(name, value, daysToExpire) {
    const date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    const expire = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expire}; path=/`;
}