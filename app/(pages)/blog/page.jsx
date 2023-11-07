import Link from 'next/link'
const BlogPage = () => {
    return (
        <div className="">
            <div className="text-center w-full mx-auto p-4 sm:px-6 lg:px-8 z-20">
                <h1 className="text-4xl font-extrabold text-blacksm:text-4xl">
                    BLOG PAGE
                </h1>
            </div>
            <section class="">
                <div class="container px-6 py-10 mx-auto">
                    <div class="lg:flex lg:-mx-6">
                        <div class="w-full lg:px-6">
                            <img class="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl" src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                            <div>
                                <h1 class="max-w-lg mt-4 text-2xl font-semibold leading-tight ">
                                    What do you want to know about UI
                                </h1>
                                <Link href={"#"}>
                                    <p className='truncate'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla dui, dapibus eu elit ut, pharetra feugiat neque. Nam sit amet viverra sapien. Vestibulum in rhoncus arcu. Donec vel augue facilisis, aliquet orci at, vulputate arcu. Aenean ultricies placerat turpis hendrerit lacinia. Donec convallis tellus eu blandit dignissim. Donec interdum orci at sodales ullamcorper. Mauris pretium odio id mattis imperdiet. Sed efficitur arcu vel fringilla condimentum.
                                    </p>
                                </Link>

                                <div class="flex items-center mt-6">
                                    <img class="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />

                                    <div class="mx-4">
                                        <h1 class="text-sm ">Amelia. Anderson</h1>
                                        <p class="text-sm ">Lead Developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="">
                <div className="container px-6 py-10 mx-auto">
                    <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
                        <div className="lg:flex">
                            <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                            <div className="flex flex-col justify-between py-6 lg:mx-6">
                                <a href="#" className="text-xl font-semibold text-gray-800 hover:underline">
                                    How to use sticky note for problem solving
                                </a>
                                <span>
                                    Amelia. Anderson
                                </span>
                                <span className="text-sm text-gray-500">On: 20 October 2019</span>
                            </div>
                        </div>

                        <div className="lg:flex">
                            <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                            <div className="flex flex-col justify-between py-6 lg:mx-6">
                                <a href="#" className="text-xl font-semibold text-gray-800 hover:underline">
                                    How to use sticky note for problem solving
                                </a>
                                <span>
                                    Amelia. Anderson
                                </span>
                                <span className="text-sm text-gray-500">On: 20 October 2019</span>
                            </div>
                        </div>

                        <div className="lg:flex">
                            <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                            <div className="flex flex-col justify-between py-6 lg:mx-6">
                                <a href="#" className="text-xl font-semibold text-gray-800 hover:underline  ">
                                    Morning routine to boost your mood
                                </a>
                                <span>
                                    Amelia. Anderson
                                </span>
                                <span className="text-sm text-gray-500">On: 25 November 2020</span>
                            </div>
                        </div>

                        <div className="lg:flex">
                            <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80" alt="" />

                            <div className="flex flex-col justify-between py-6 lg:mx-6">
                                <a href="#" className="text-xl font-semibold text-gray-800 hover:underline">
                                    All the features you want to know
                                </a>
                                <span>
                                    Amelia. Anderson
                                </span>
                                <span className="text-sm text-gray-500">On: 30 September 2020</span>
                            </div>
                        </div>

                        <div className="lg:flex">
                            <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1484&q=80" alt="" />

                            <div className="flex flex-col justify-between py-6 lg:mx-6">
                                <a href="#" className="text-xl font-semibold text-gray-800 hover:underline">
                                    Minimal workspace for your inspirations
                                </a>
                                <span>
                                    Amelia. Anderson
                                </span>
                                <span className="text-sm text-gray-500">On: 13 October 2019</span>
                            </div>
                        </div>

                        <div className="lg:flex">
                            <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                            <div className="flex flex-col justify-between py-6 lg:mx-6">
                                <a href="#" className="text-xl font-semibold text-gray-800 hover:underline">
                                    What do you want to know about Blockchane
                                </a>
                                <span>
                                    Amelia. Anderson
                                </span>
                                <span className="text-sm text-gray-500">On: 20 October 2019</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BlogPage