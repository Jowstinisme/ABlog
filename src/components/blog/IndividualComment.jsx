import React from 'react'

function IndividualComment({value}) {
  return (
    <div key={value.index} className="comment">
        <p clsasName="author"><b>Author: </b>{value.name}</p>
        <p>{value.content}</p>
    </div>
  )
}

export default IndividualComment