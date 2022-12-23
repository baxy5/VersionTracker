import React from 'react'
import Link from "next/link"

const Footer = () => {
    return (
        <div className='flex justify-center items-center p-5'>
            <div className='text-center'>
                <Link className='px-2 font-bold' href="https://github.com/baxy5" target="_blank">
                    Github
                </Link>
                <p className='font-bold'>©️ Bakos Janos</p>
            </div>
        </div>
    )
}

export default Footer