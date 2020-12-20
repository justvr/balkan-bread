import React from "react"

function Image(props) {
  return (

    <img
      src={require(`../images/${props.src}`)}
      style={props.style}
      alt={props.alt} />
  )
}

export default Image
