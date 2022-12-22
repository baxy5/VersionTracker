import React from 'react'
import Link from "next/link"

const Footer = () => {
    return (
        <div className='flex justify-center items-center p-5'>
            <div>
                <Link className='px-2 font-bold' href="https://github.com/baxy5/VersionVault" target="_blank">
                    Github
                </Link>
                <p>©️ Bakos Janos</p>
            </div>
        </div>
    )
}

export default Footer