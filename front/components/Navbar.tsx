import Link from "next/link"
import Image from "next/image"

export const Navbar = () => {
    return (
        <div className="flex justify-between items-center p-5">
            <Link href="">
                <p className="text-3xl font-bold"><span className="text-white">Version</span>Vault</p>
            </Link>
            <div className='flex font-bold'>
                <Link href="" >
                    Versions
                </Link>
                <Link className='px-2' href="https://github.com/baxy5/VersionVault" target="_blank">
                    Github
                </Link>
                <Image className='cursor-pointer' src="/theme.png" width="25" height="25" alt="theme-icon" />
            </div>
        </div>
    )
}

export default Navbar
