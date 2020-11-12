import React from 'react'
import Link from 'gatsby-link'

class Cookie  extends React.Component {
  constructor(props) {
    super(props)
    this.state = {show: true}
    this.accept = this.accept.bind(this)
  }

  /**
   * @see https://www.w3schools.com/js/js_cookies.asp
   */
  getCookie(cname) {
    var name = cname + "=";
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

  componentDidMount() {
    if ('true' === this.getCookie('GA4')) {
      this.setState(() => ({
        show: false
      }))
    }
  }

  accept() {
    document.cookie = 'GA4=true'
    this.setState(() => ({
      show: false
    }))
  }

  reject() {
    this.setState(() => ({
      show: false
    }))
  }

  render() {
    return this.state.show ? (
      <div
        style={{
          background: '#fff4e1',
          borderRadius: '9px',
          bottom: '100px',
          boxShadow: '0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12)',
          maxWidth: '320px',
          padding: '1.0875rem',
          position: 'fixed',
          right: 0,
          width: '100%',
        }}
      >
        <div
          style={{
            margin: '0 auto',
            maxWidth: 860,
          }}
        >
          <p>How about, cookies
            <br />
            <small>
              We've got some cookies to improve your experience.
              By using Balkan Bread you agree to our
              <Link to="/privacy-and-cookie-management" style={{marginLeft: '6px'}}>
                Cookie Policy
              </Link>.
            </small>
          </p>
          <button
            onClick={this.accept}
            style={{
              border: 0,
              padding: '0.4rem 1.2rem',
              background: 'rgb(49, 127, 96)',
              borderRadius: '30px',
              color: 'white',
              textTransform: 'uppercase',
              fontSize: '0.8rem',
              marginRight: '0.4rem',
            }}>
              got it
            </button>
          <button
            style={{background: 'none', border: 0}}
          >
            reject
          </button>
        </div>
      </div>) : null
  }
}

export default Cookie;
