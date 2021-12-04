import React, { useState } from 'react'
import ModeSwitcherButton from './ModeSwitcherButton'

export default function Header() {
    
  return ( 
    <header className="fixed top-0 w-full">
      <nav className="grid border-b border-lightWhite dark:border-lightGray px-8 grid-cols-7">
        <div className="grid items-end pb-4 col-span-3 border-r border-lightWhite dark:border-lightGray py-8 dark:text-white text-black">
          <a href="/" className="text-lg font-normal">
            Samuel Tirtawidjaja
          </a>
        </div>

        <ul className="col-span-3 grid grid-cols-3">
          <li className="desktop-list grid items-end border-r border-lightWhite dark:border-lightGray relative">
            <a href="/" className="text-2xl font-normal dark:text-white dark:hover:text-white text-black">
                Blog
            </a>
          </li>
          <li className="desktop-list grid items-end border-r border-lightWhite dark:border-lightGray relative">
            <a href="/works" className="text-2xl font-normal dark:text-white dark:hover:text-white text-black">
                Works
            </a>
          </li>
          <li className="desktop-list grid items-end border-r border-lightWhite dark:border-lightGray relative">
            <a href="/blog" className=" text-2xl font-normal dark:text-white dark:hover:text-white text-black">
                Bio
            </a>
          </li>
        </ul>

        {/* Button to change the dark and light mode */}
        <div className="col-span-1">
          <div className="grid items-end desktop-list-switcher text-black dark:text-white">
              <ModeSwitcherButton />
            </div>
        </div>

      </nav>
    </header>
  )
}