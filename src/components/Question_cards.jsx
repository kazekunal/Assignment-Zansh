import React from 'react'

const Question_cards = (props) => {
  return (
    <div className="absolute h-40 w-maxcontent flex flex-col">
        {props.children}
    </div>
  )
}

export default Question_cards