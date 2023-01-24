import React from 'react'
import './Header.css'

export default function Header({headerTitle, headerExpanded}) {
  return (
    <div className='head-container'>
        <img src='https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png'
        className={`head-img ${headerExpanded ? 'head-img-expanded':'head-img-contracted'}`}
        alt='headerImage ' />

        <h2 className={`head-txt ${headerExpanded ? 'head-txt-expanded':'head-txt-contracted'}`}>
          {headerTitle}
          </h2>
    </div>
  )
}
