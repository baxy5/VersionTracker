import { Roboto } from '@next/font/google'
import Link from "next/link"
import Image from "next/image"

const roboto = Roboto({
  subsets: ['latin'],
  weight: "700",
  style: "normal"
})

export default function Home() {
  return (
    <div className={roboto.className}>
      <div className="flex justify-between items-center p-5">
        <p className="text-3xl"><span className="text-white">Version</span>Vault</p>
        <div className='flex'>
          <Link className='px-2' href="https://github.com/baxy5" target="_blank">
            Github
          </Link>
          <p className='px-2'>Versions</p>
        </div>
      </div>
      <div className="hero"></div>
      <div className="versiontracker"></div>
    </div>
  )
}
