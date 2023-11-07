import Sidebar from '@/app/components/Sidebar'
import React from 'react'

const layout = ({ children }) => {
    return (
        <div className='h-screen flex'>
            <div className='w-4/5'>
                {children}
            </div>
            <div className='w-1/5 h-screen'>
                <Sidebar />
            </div>
        </div>
    )
}

export default layout