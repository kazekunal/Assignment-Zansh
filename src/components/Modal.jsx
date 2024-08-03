import React from 'react'


const Modal = (props) => {
  return (props.trigger) ? (
    <div>
            {props.children}
    </div>
  ) : "";
} 

export default Modal