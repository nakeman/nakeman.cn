import React from 'react';
import './Header.css';
import { Link } from 'gatsby'

let Header = ({ theme, onUpdateTheme }) => {

  return (
      <header className="header">
          <Brand></Brand>
          <Nav />
          <Social onUpdateTheme={onUpdateTheme}></Social>
      </header>
  );
}

export default Header;

export const Brand = () => {
  return(
    <div className="brand">
      <span className="flex brand--logo split">
        <Link to="/" className="text-red-700">刘建文</Link>
      </span>
      <span className="brand--siteurl  md:flex split ">
        <Link to="/" >Nakeman.cn</Link>
      </span>
    </div>
  )

}

const Nav = () => {
  return(
    <nav className="nav flex flex-none  mb-1 mx-auto md:items-start md:mx-0">
      <ul class="flex navlist list-none">
        <li><Link to="/blog" className='navlist--item'activeClassName='is-active' partiallyActive='ture'>文章</Link></li>
        <li><Link to="/projects" className='navlist--item'activeClassName='is-active' partiallyActive='ture'>项目</Link></li>
        <li><Link to="/microblog" className='navlist--item'activeClassName='is-active' partiallyActive='ture'>Micro</Link></li>
        <li><Link to="/resume" className='navlist--item'activeClassName='is-active' partiallyActive='ture'>简历</Link></li>
        <li><Link to="/about" className='navlist--item'activeClassName='is-active' partiallyActive='ture'>关于</Link></li>
      </ul>
    </nav>
  )
}

const Social = ({onUpdateTheme}) => {
  return(
    <div className="social flex items-center  justify-between h-full  mx-auto  mb-1 md:ml-auto md:mr-1">
      <a class="social__item mx-1 text-gray-600 hover:text-black" href="https://github.com/nakeman" target='_blank'>
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
        </svg>
      </a>
      <a class="social__item mx-2 w-5 text-green-600 hover:text-[#228a31]" href="https://www.douban.com/people/kemin" target='_blank'>    
        {/*<Douban height="1.8rem" color="#000"  version="1.1" viewBox="0 0 256 256" width="1.8rem" />*/}
        <svg width="1.8rem" height="1.8rem" version="1.1"  fill="currentColor" viewBox="0 0 256 256">
          <path
            d="M204.508 49.25H51.492v18.549h153.016V49.25zm-37.115 138.951 9.441-32.541h18.232V81.791H60.933v73.869h17.906l9.767 32.541H46.933v18.549h162.133v-18.549h-41.673zm-83.345-51.09V100.34h87.903v36.771H84.048zm64.462 50.765h-41.021l-9.767-32.216h60.23l-9.442 32.216z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      </a>
      <a href="javascript:void(0)" onClick={onUpdateTheme} className="social__item mx-3 border bg-slate-300 p-1 hover:bg-gray-400 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16">
          <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
        </svg>        
      </a>
     
    </div>
  )
}
