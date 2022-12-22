import React from 'react'
import Link from "next/link"

const Footer = () => {
    return (
        <div className='flex justify-end p-5'>
            <Link className='px-2 font-bold' href="https://github.com/baxy5/VersionVault" target="_blank">
                Github
            </Link>
            <p>Bakos Janos</p>
        </div>
    )
}

export default Footer