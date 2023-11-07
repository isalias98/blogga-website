import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="bg-white dark:bg-gray-800  ">
                <div className="px-8 mx-auto max-w-7xl">
                    <div className="flex items-center justify-between h-16">
                        <div className=" flex items-center">
                            <a className="flex-shrink-0" href="/">
                                <h1 className='text-4xl font-extrabold'>BLOGGA</h1>
                            </a>
                            <div className="hidden md:block">
                                <div className="flex items-baseline ml-10 space-x-4">
                                    <a className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/about">
                                        ABOUT
                                    </a>
                                    <a className="text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/blog">
                                        BLOG
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Navbar