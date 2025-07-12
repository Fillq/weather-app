import React, { useState } from 'react'
import { useDebounce } from '../../hooks/useDebounce'

const Search = () => {
    const [search, setSearch] = useState('');
    const debouncedSearch = useDebounce(search, 1500);

    return (
        <>
            <div className='flex justify-center items-center gap-3.5'>
                <input 
                    type="text"
                    id='search'
                    placeholder='Search' 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)}
                    className='
                    ease-in transition-all duration-300 h-10 w-48 p-2 bg-gray-200 rounded-4xl outline-none border-none
                    focus-within:bg-gray-50 focus-within:w-96 focus-within:rounded-md not-placeholder-shown:w-96'/>
                <button 
                    className="w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 flex justify-center items-center hover:*:-rotate-30 hover:*:scale-105 hover:*:*:nth-[1]:border-gray-300 hover:*:*:nth-[2]:bg-gray-300 hover:cursor-pointer"
                    onClick={() => setSearch(document.getElementById('search').value)}>
                    <div className="transition-easy flex flex-col gap-0 justify-between items-center -rotate-45 scale-95">
                        <div className="w-5 h-5 transition-easy rounded-[100vw] border-4 border-gray-100"></div>
                        <div className="w-1.25 h-3 transition-easy rounded-b-[100vw] -mt-0.5 bg-gray-100"></div>
                    </div>
                </button>
            </div>
        </>
    )
}

export default Search
