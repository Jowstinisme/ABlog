import React from 'react'

function IndividualComment({value, user}) {
  return (
    <div key={value.index} className="comment">
        <p className="author"><b>Author: </b>{value.name}</p>
        <p>{value.body}</p>
    </div>
  )
}

export default IndividualComment