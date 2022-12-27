import Link from "next/link"
import Image from "next/image"

export const Navbar = () => {
    return (
        <div className="flex w-full items-center p-3">
            <div className="w-full text-center">
                <Link href="">
                    <p className="text-4xl font-bold sm:text-5xl lg:text-4xl"><span className="text-white">Version</span>Vault</p>
                </Link>
            </div>
            <Image className='cursor-pointer hidden' src="/theme.png" width="25" height="25" alt="theme-icon" />
        </div>
    )
}

export default Navbar
