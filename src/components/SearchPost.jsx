import React, { useState } from "react"

export default function SearchPost() {

    const [search, setSearch] = useState('');

    const handleInputPost = (event) => setSearch(event.target.value);
    

    return (
    <form id="searchform" method="get">
        <div className="relative -mt-12 mb-6 md:mb-0 md:mt-0 px-4 md:px-8 py-4 z-50 flex justify-end">
            <div
                className="flex items-center pl-2 pr-2 focus:ring-2 w-1/3 sm:text-sm border border-gray-300 rounded-full shadow-md py-1">
                <button type="submit"
                    className="focus:ring-4 focus:outline-none inline-flex items-center justify-center p-2 border border-transparent rounded-full shadow-sm text-base font-medium text-darkSlateBlue">
                    <svg
                        className="text-black dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="butt" strokeLinejoin="bevel">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </button>
                <input name="Search Post" value={search} className="bg-transparent text-lightDark dark:text-white flex-grow focus:outline-none focus:text-darkSlateBlue" onChange={handleInputPost} />
            </div>
        </div>
    </form>
    )
}

