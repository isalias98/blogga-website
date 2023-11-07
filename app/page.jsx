import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <main className="">
      <div className="bg-base-content">
        <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">
              Want to know about whats trending ?
            </span>
            <span className="block text-indigo-500">
              It&#x27;s today or never.
            </span>
          </h2>
          <p className="text-xl mt-4 max-w-md mx-auto text-gray-400">
            I had notice that someone has been living under the rock don&#x27;t know what are the trending stuff people are up to these days
          </p>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
              <Link href={"/blog"} type="button" className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                Check our BLOG!
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-12 bg-white">
        <div className="flex items-end justify-between mb-12 header">
          <div className="title">
            <p className="mb-4 text-4xl font-bold uppercase underline underline-offset-2">
              Lastest articles
            </p>
            <p className="text-2xl font-light">
              All article are verified by 2 experts and valdiate by the CTO
            </p>
          </div>
          <div className="text-end">
            <form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
              <div className=" relative ">
                <input type="text" id="&quot;form-subscribe-Search" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Enter a title" />
              </div>
              <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
          <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
            <Link href="#" className="block w-full h-full">
              <img alt="blog photo" src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover w-full max-h-40" />
              <div className="w-full p-4">
                <p className="font-medium text-indigo-500 text-md">
                  Design Istrument
                </p>
                <p className="mb-2 text-xl font-medium">
                  Work at home
                </p>
                <p className="font-light">
                  Work at home, remote, is the new age of the job, every person can work at home....
                </p>
                <div className="flex items-center mt-4">
                  <Link href="#" className="relative block">
                    <img alt="profil" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="mx-auto object-cover rounded-full h-10 w-10 " />
                  </Link>
                  <div className="flex flex-col justify-between ml-4 text-sm">
                    <p className="">
                      Amelia. Anderson
                    </p>
                    <p className="">
                      20 mars 2029 - 6 min read
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
            <Link href="#" className="block w-full h-full">
              <img alt="blog photo" src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover w-full max-h-40" />
              <div className="w-full p-4">
                <p className="font-medium text-indigo-500 text-md">
                  UI Resource
                </p>
                <p className="mb-2 text-xl font-medium">
                  test
                </p>
                <p className="font-light text-md">
                  The new supercar is here, 543 cv and 140 000$ !!
                </p>
                <div className="flex items-center mt-4">
                  <Link href="#" className="relative block">
                    <img alt="profil" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="mx-auto object-cover rounded-full h-10 w-10 " />
                  </Link>
                  <div className="flex flex-col justify-between ml-4 text-sm">
                    <p className="">
                      Amelia. Anderson
                    </p>
                    <p className="">
                      20 mars 2029 - 6 min read
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
            <Link href="#" className="block w-full h-full">
              <img alt="blog photo" src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover w-full max-h-40" />
              <div className="w-full p-4">
                <p className="font-medium text-indigo-500 text-md">
                  UI Resource
                </p>
                <p className="mb-2 text-xl font-medium">
                  test
                </p>
                <p className="font-light text-md">
                  The new supercar is here, 543 cv and 140 000$ !!
                </p>
                <div className="flex items-center mt-4">
                  <Link href="#" className="relative block">
                    <img alt="profil" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="mx-auto object-cover rounded-full h-10 w-10 " />
                  </Link>
                  <div className="flex flex-col justify-between ml-4 text-sm">
                    <p className="">
                      Amelia. Anderson
                    </p>
                    <p className="">
                      20 mars 2029 - 6 min read
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
            <Link href="#" className="block w-full h-full">
              <img alt="blog photo" src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover w-full max-h-40" />
              <div className="w-full p-4">
                <p className="font-medium text-indigo-500 text-md">
                  UI Resource
                </p>
                <p className="mb-2 text-xl font-medium">
                  test
                </p>
                <p className="font-light text-md">
                  The new supercar is here, 543 cv and 140 000$ !!
                </p>
                <div className="flex items-center mt-4">
                  <Link href="#" className="relative block">
                    <img alt="profil" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="mx-auto object-cover rounded-full h-10 w-10 " />
                  </Link>
                  <div className="flex flex-col justify-between ml-4 text-sm">
                    <p className="">
                      Amelia. Anderson
                    </p>
                    <p className="">
                      20 mars 2029 - 6 min read
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
            <Link href="#" className="block w-full h-full">
              <img alt="blog photo" src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover w-full max-h-40" />
              <div className="w-full p-4">
                <p className="font-medium text-indigo-500 text-md">
                  UI Resource
                </p>
                <p className="mb-2 text-xl font-medium">
                  test
                </p>
                <p className="font-light text-md">
                  The new supercar is here, 543 cv and 140 000$ !!
                </p>
                <div className="flex items-center mt-4">
                  <Link href="#" className="relative block">
                    <img alt="profil" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="mx-auto object-cover rounded-full h-10 w-10 " />
                  </Link>
                  <div className="flex flex-col justify-between ml-4 text-sm">
                    <p className="">
                      Amelia. Anderson
                    </p>
                    <p className="">
                      20 mars 2029 - 6 min read
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
            <Link href="#" className="block w-full h-full">
              <img alt="blog photo" src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover w-full max-h-40" />
              <div className="w-full p-4">
                <p className="font-medium text-indigo-500 text-md">
                  UI Resource
                </p>
                <p className="mb-2 text-xl font-medium">
                  test
                </p>
                <p className="font-light text-md">
                  The new supercar is here, 543 cv and 140 000$ !!
                </p>
                <div className="flex items-center mt-4">
                  <a href="#" className="relative block">
                    <img alt="profil" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="mx-auto object-cover rounded-full h-10 w-10 " />
                  </a>
                  <div className="flex flex-col justify-between ml-4 text-sm">
                    <p className="">
                      Amelia. Anderson
                    </p>
                    <p className="">
                      20 mars 2029 - 6 min read
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="mb-4 text-4xl font-bold uppercase underline underline-offset-2">
            Popular Posts
          </h1>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Design Instrument</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">How to raise $100k+ by using blox ui kit on your design</h1>
                  <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">UI Resource</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Should you create UI Product by using Blox</h1>
                  <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Premium Collection</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Top 10 Blocks you can get on Blox Collection</h1>
                  <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
