import React, { useState, useEffect } from 'react'
import Viewport from "./ViewPort"
import Header from "./Header"
import Footer from "./Footer"
import { Helmet } from "react-helmet"


/**
 * three rows(header main footer) page layout. top and bottom fixed, main flex.
 * layout only size and postion
 * @param {*} param0 
 */
const PageLayout = ({children}) =>{
    const [theme, setTheme] = useState('dark')
    const onUpdateTheme = () => {
      const newTheme = theme === 'dark' ? 'light' : 'dark'
      
      window.localStorage.setItem('theme', newTheme)
      setTheme(newTheme)
    }
  
    useEffect(() => {
      const savedTheme = window.localStorage.getItem('theme')
      if (savedTheme) {
        setTheme(savedTheme)
      }
    }, [])
  
    
    return (
      <Viewport>
        <Helmet>
          {theme === "dark" && (
            <link rel="stylesheet" type="text/css" href="/dark-theme.css" />
          )}
        </Helmet>
        <div class="w-full bg-gray-100 ">
          <Header onUpdateTheme={onUpdateTheme}/>
        </div>
        <main class="flex w-full" className={"flex w-full "+theme} >{children}</main>
        <div class="w-full mt-auto">
          <Footer />
        </div>
      </Viewport>
    )
}
export default PageLayout