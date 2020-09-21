import React from "react"

function Image(props) {
  return (
    <div style={{display: 'flex', position: 'relative', width: props.w, height: props.h, margin: '0 auto'}}>
      <img
        src={require(`../images/${props.src}`)}
        alt="Logo" />
    </div>
  )
}

export default Image