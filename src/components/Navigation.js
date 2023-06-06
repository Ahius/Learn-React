import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
export default function Navigation() {
    const { theme, toggle, dark } = useContext(ThemeContext)
    return (
        <div className='menu'>
            <nav style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                <ul>
                    <li><a className='active' href='/'>Home</a></li>
                    <li><a href='#News'>News</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#Contact'>Contact</a></li>
                </ul>
                <div style={{ position: 'relative' }}>
                    <a className='switch-mode' href='#' onClick={toggle}
                        style={{
                            backgroundColor: theme.backgroundColor,
                            color: theme.color,
                            outline: 'none'
                        }} data-testid="toggle-theme-btn"
                    >
                        Switch Nav to {!dark ? 'Dark' : 'Light'} mode
                    </a>
                </div>
            </nav>
        </div>
    )
}
