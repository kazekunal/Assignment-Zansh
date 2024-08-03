import React from 'react'

const Question_cards = (props) => {
  return (
    <div className="relative h-40 w-screen flex flex-col">
        {props.children}
    </div>
  )
}

export default Question_cards