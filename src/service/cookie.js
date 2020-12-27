/**
 * service for handling cookie functionality
 */
export default {
  /**
   * get cookie by name
   *
   * @see https://www.w3schools.com/js/js_cookies.asp
   */
  get(cName) {
    const name = cName + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  },
  /**
   * set a cookie with name & value
   * and predefined expiry date of one month
   *
   * @param {String} name name of the cookie
   * @param {String} value value of the cookie
   */
  set(name, value) {
    var expiryDate = new Date()
    expiryDate.setMonth(expiryDate.getMonth() + 1)
    document.cookie = `${name}=${value}; expires=${expiryDate}`;
  },
}
