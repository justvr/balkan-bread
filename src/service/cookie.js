export default {
  set(name, value) {
    var expiryDate = new Date()
    expiryDate.setMonth(expiryDate.getMonth() + 1)
    document.cookie = `${name}=${value}; expires=${expiryDate}`;
  },
  /**
   * @see https://www.w3schools.com/js/js_cookies.asp
   */
  get(cookieName) {
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
}
