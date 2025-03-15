import React from 'react'

export default function Header(props) {
  return (
    <div className='header'>
        <h5>{props.Header}</h5>
        <div className="onlines">
        <i class='bx bxs-circle'></i>
            <p>{props.online}</p>
            <i class='bx bx-right-arrow-alt' ></i>
        </div>
    </div>
  )
}
