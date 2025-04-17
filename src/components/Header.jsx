import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='flex gap-8'>
            <Link to="/">About</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
        </div>
    )
}

export default Header
