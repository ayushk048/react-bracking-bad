import React from 'react'
import './header.css'

const Header = ({ logo, alt }) => {
    return (
        <header className='center'>
            <img src={logo} alt={alt} />
        </header>
    )
}

export default Header
