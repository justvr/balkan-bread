import React from "react"

function Image(props) {
  return (
    <div style={{display: 'inline-block', position: 'relative', width: props.w, height: props.h, margin: '0 auto'}}>
      <img
        style={{width: '100%'}}
        src={require(`../images/${props.src}`)}
        alt={props.alt} />
    </div>
  )
}

export default Image
