import React from 'react'
import { Link } from 'gatsby'



const mainNavItems = [
  { url: '/blog', label: 'Blog' ,cn:'文章'},
  { url: '/projects',label: 'Projects' ,cn:'作品'},
  { url: '/resume', label: 'CV',cn:'简历' },
  { url: '/about', label: 'About',cn:'关于' },
  { url: '/github', label: 'Github',cn:'Github' }
]

// const socialNavItems = [
//   { url: 'https://github.com/taniarascia', icon: github, label: 'GitHub' },
// ]

export const Navigation = ({ theme, onUpdateTheme }) => {
  return (
    <nav className="flex justify-between border-2 border-dotted ">
        <div className="ml-4 mt-4 text-2xl p-3 border-2 border-dotted">
            <Link to="/" className=" no-underline">
            <span className='text-red-700'>刘建文</span> <span className='text-neutral-500'>｜Nakeman.cn</span>
            </Link>
        </div>
        <div className="flex p-3 border-2 border-dotted">
            {mainNavItems.map((item) => (
            <div className="p-2 no-underline">
                {/* <img src={item.icon} alt={item.label} className="nav-image" /> */}
                <Link
                to={item.url}
                key={item.label}
                activeClassName="active no-underline"
                // className={`item ${slugify(item.label)}`}
                className='no-underline p-2 text-lg'
                >
                <span>{item.cn}</span>
                </Link>
            </div>
            ))}
            <div className="theme-toggle">
                <button onClick={onUpdateTheme}>
                {/* <img src={moon} alt="Theme" />{' '} */}
                <span>{theme === 'dark' ? 'Dark' : 'Light'}</span>
                </button>
            </div>
        </div>
    </nav>
  )
}
