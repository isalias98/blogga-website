import React from 'react'

const About = () => {
    return (
        <div>
            <div className="text-center w-full mx-auto p-4 sm:px-6 lg:px-8 z-20">
                <h1 className="text-4xl font-extrabold text-blacksm:text-4xl">
                    ABOUT PAGE
                </h1>
            </div>
            <div className="hero">
                <div className="hero-content text-center">
                    <div className="max-w-xl leading-loose">
                        <p className="py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur, nisl pellentesque gravida vestibulum, mi quam congue quam, a porttitor eros eros et urna. Nullam vel eleifend leo, bibendum tempor lectus. Cras pulvinar maximus ante vitae sodales. Phasellus id semper odio, et dapibus sem. Morbi dignissim arcu magna, vitae fringilla quam accumsan et. Donec vitae interdum sapien, ut vulputate libero. Aenean libero arcu, varius et sem id, lacinia blandit justo. Integer luctus arcu eget libero blandit, ut congue odio bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate, neque id sollicitudin laoreet, ante enim bibendum dolor, sit amet efficitur dui eros vel nibh. Sed interdum ante nec tortor laoreet, at porttitor urna imperdiet.</p>
                    </div>
                </div>
            </div>
            <div className='rounded-lg border mx-60 mb-8 border-gray-400 shadow-xl shadow-base-300'>
                <div className="text-center w-full mx-auto p-4 sm:px-6 lg:px-8 z-20">
                    <h1 className="text-2xl font-extrabold text-blacksm:text-4xl">
                        OUR TEAM
                    </h1>
                </div>
                <div className="p-4">
                    <div className="mb-4 text-center opacity-90">
                        <a href="#" className="relative block">
                            <img alt="profile" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="mx-auto object-cover rounded-full h-40 w-40 " />
                        </a>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl text-gray-800 ">
                            Patrick Sebastien
                        </p>
                        <p className="text-xl font-bold text-gray-500 ">
                            Developpeur
                        </p>
                        <p className="py-4 font-semibold text-gray-500 text-md">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur, nisl pellentesque gravida vestibulum, mi quam congue quam, a porttitor eros eros et urna. Nullam vel eleifend leo, bibendum tempor lectus.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About