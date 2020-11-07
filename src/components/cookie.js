import React from 'react'

const Cookie = () => {
  function accept(e) {
    e.preventDefault()
    document.cookie = 'cookie=GA4'
  }

  function reject(e) {
    e.preventDefault()
    document.cookie = 'cookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }

  return (
    <div
      style={{
        background: '#fff4e1',
        borderRadius: '9px',
        bottom: '100px',
        boxShadow: '0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12)',
        maxWidth: '320px',
        padding: '1.0875rem',
        position: 'absolute',
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
        <p>
          We've got some cookies prepared for you!
          If you accept them we will get the basic tracking
          which would make us better understand which stories should we write more about.
        </p>
        <button onClick={accept}>accept</button>
        <button onClick={reject}>reject</button>
      </div>
    </div>
  )
}

export default Cookie;
