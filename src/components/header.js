import React from 'react';

let Header = ({ theme, onUpdateTheme }) => {

  return (
    <div class="">
      <h1 className="uicomp">Header </h1>
      <header className="header flex flex-col md:flex-row px-5 py-3 justify-between  bg-slate-100 ">
        {/* <div className="content bg-white w-full flex justify-between"> */}
          <div className="hd--brand flex-none mx-auto  mb-1 md:items-start md:mx-0">
          <Brand></Brand>
          </div>
          <div className="hd--nav flex-none  mb-1 mx-auto md:items-start md:mx-0">
            <Nav />
          </div>
          <div className="hd--social mx-auto  mb-1 md:ml-auto md:mr-1">
          <Social></Social>
          </div>          
        {/* </div> */}
      </header>
      <h1 className="uicomp">Brand</h1>
      <Brand></Brand>

      <h1 className="uicomp">Nav</h1>
      <Nav></Nav>

      <h1 className="uicomp">Social</h1>
      <Social></Social>
      <h1 className="uicomp">Footer</h1>
      <Footer></Footer>
    </div>
  );
}

export default Header;

export const Brand = () => {
  return(
    <div className="brand">
      <span className="flex brand--logo split">
        <a href="/" className="text-red-700">刘建文</a>
      </span>
      <span className="brand--siteurl  md:flex split ">
        <a href="/" >Nakeman.cn</a>
      </span>
    </div>
  )

}

const Nav = () => {
  return(
    <nav className="nav flex">
      <ul class="flex  nav__list">
        <li><a class="nav__item" href="/">文章</a></li>
        <li><a class="nav__item is-active" href="/blog/" aria-current="page">作品</a></li>
        <li><a class="nav__item" href="/talks/">简历</a></li>
        <li><a class="nav__item" href="/projects/">关于</a></li>
      </ul>
    </nav>
  )
}

const Social = () => {
  return(
    <div className="social flex items-center  justify-between h-full">
      <a class="social__item mx-1 text-gray-600 hover:text-black" href="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
        </svg>
      </a>
      <a class="social__item mx-2 w-5 text-green-600 hover:text-[#228a31]" href="/">    
        {/*<Douban height="1.8rem" color="#000"  version="1.1" viewBox="0 0 256 256" width="1.8rem" />*/}
        <svg width="1.8rem" height="1.8rem" version="1.1"  fill="currentColor" viewBox="0 0 256 256">
          <path
            d="M204.508 49.25H51.492v18.549h153.016V49.25zm-37.115 138.951 9.441-32.541h18.232V81.791H60.933v73.869h17.906l9.767 32.541H46.933v18.549h162.133v-18.549h-41.673zm-83.345-51.09V100.34h87.903v36.771H84.048zm64.462 50.765h-41.021l-9.767-32.216h60.23l-9.442 32.216z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      </a>
      <a href="" className="social__item mx-3 border bg-slate-300 p-1 hover:bg-gray-400 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16">
          <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
        </svg>        
      </a>
     
    </div>
  )
}

// const Douban = ({ size = "256", color="#228a31", ...other }) => {
//   return (
//     <svg width={size} height={size}   {...other}>
//       <path
//         d="M204.508 49.25H51.492v18.549h153.016V49.25zm-37.115 138.951 9.441-32.541h18.232V81.791H60.933v73.869h17.906l9.767 32.541H46.933v18.549h162.133v-18.549h-41.673zm-83.345-51.09V100.34h87.903v36.771H84.048zm64.462 50.765h-41.021l-9.767-32.216h60.23l-9.442 32.216z"
//         fillRule="evenodd"
//         clipRule="evenodd"
//         fill={color}
//       />
//     </svg>
//   );
// };

export const Footer = () => {
  return(
    <footer className="footer border-t-[1px]">
      <span className="siteurl">Nakeman.cn</span> 2022 Build by <a href="">Gatsby</a> and <a href="">Tailwind</a>.
    </footer>

  )
}