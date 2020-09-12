import React from "react"

function Image(props) {
  return (
    <div style={{position: 'relative', width: props.w, height: props.h, margin: '0 auto'}}>
      <img
        src={require(`../images/${props.src}`)}
        alt="Logo"
        style={{maxWidth: 250,}} />
    </div>
  )
}

export default Image